import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateSubmission, deliverSubmission} from '../src/lib/submissions.ts';

const contact = {kind:'contact', requestId:'aabbccdd-1234-4567-8abc-123456789012', name:'Form verification', email:'joseph@thejclabs.com', service:'other', message:'Controlled verification only.'};

test('validates both form contracts and preserves message content', () => {
  assert.equal(validateSubmission(contact).fields.at(-1)[1],contact.message);
  const onboard=validateSubmission({...contact,kind:'onboarding',fullname:'Form verification',business:'Test business',role:'other',details:'Controlled verification only.'});
  assert.equal(onboard.kind,'onboarding');
  assert.equal(onboard.fields.find(([label])=>label==='Phone')[1],'');
});
test('rejects incomplete, malformed and oversized submissions before delivery',()=>{
  for(const patch of [{email:'invalid'},{email:'a@example.com\r\nBcc: attacker@example.com'},{name:' '},{message:'x'.repeat(5001)},{requestId:'reused'},{kind:'other'},{service:'invalid'},{email:[]}]) {
    assert.throws(()=>validateSubmission({...contact,...patch}));
  }
  assert.throws(()=>validateSubmission({...contact,kind:'onboarding'}));
});
test('recipient and sender are server-owned; retries reuse provider idempotency',async()=>{
  const calls=[];
  const request=async(url,options)=>{calls.push({url,options});return Response.json({id:'test-provider-id'});};
  const submission=validateSubmission({...contact,to:'attacker@example.com'});
  const config={apiKey:'test-only',recipient:'joseph@thejclabs.com',sender:'Birth Creative <forms@mail.thejclabs.com>'};
  assert.equal(await deliverSubmission(submission,config,request),'test-provider-id');
  await deliverSubmission(submission,config,request);
  assert.equal(calls[0].options.headers['idempotency-key'],calls[1].options.headers['idempotency-key']);
  const body=JSON.parse(calls[0].options.body);
  assert.deepEqual(body.to,[config.recipient]);
  assert.equal(body.reply_to,contact.email);
  assert.equal(body.from,config.sender);
  assert.equal(body.text.includes('attacker@example.com'),false);
});
test('provider errors and unconfirmed responses never become success',async()=>{
  const submission=validateSubmission(contact),config={apiKey:'test-only',recipient:'test@example.com',sender:'test@example.com'};
  for(const response of [new Response('Unavailable',{status:503}),Response.json({})]) {
    await assert.rejects(deliverSubmission(submission,config,async()=>response));
  }
  await assert.rejects(deliverSubmission(submission,config,async()=>{throw new Error('timeout');}));
});
