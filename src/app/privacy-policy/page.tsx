import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Birth Creative",
  description:
    "At Birth Creative, we prioritize your privacy and are committed to safeguarding your personal information. Read our comprehensive Privacy Policy.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-secondary pt-[40px] pb-[60px] px-[5%]">
        <div className="max-w-[1312px] mx-auto">
          <h1 className="text-pink-light">Privacy policy.</h1>
        </div>
      </section>

      <section className="py-[60px] px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto font-[--font-libre] text-[15px] text-dark leading-relaxed prose max-w-none">
          <p className="font-semibold mb-8">Last updated: January 24th, 2025</p>

          <h2 className="text-secondary text-[28px] mb-4">Who we are</h2>
          <p className="mb-4">
            Our website address is: <Link href="https://birthcreative.com">https://birthcreative.com</Link>.
          </p>
          <p className="mb-8">
            This Privacy Policy describes how Birth Creative (the &ldquo;Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from https://www.birthcreative.com (the &ldquo;Site&rdquo;) or otherwise communicate with us (collectively, the &ldquo;Services&rdquo;). For purposes of this Privacy Policy, &ldquo;you&rdquo; and &ldquo;your&rdquo; means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.
          </p>
          <p className="mb-8">
            Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.
          </p>

          <h2 className="text-secondary text-[28px] mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-8">
            We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the &ldquo;Last updated&rdquo; date and take any other steps required by applicable law.
          </p>

          <h2 className="text-secondary text-[28px] mb-4">How We Collect and Use Your Personal Information</h2>
          <p className="mb-4">
            To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.
          </p>
          <p className="mb-8">
            In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.
          </p>

          <h2 className="text-secondary text-[28px] mb-4">What Personal Information We Collect</h2>
          <p className="mb-4">
            The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term &ldquo;personal information&rdquo;, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.
          </p>

          <h3 className="text-secondary text-[22px] mb-3">Information We Collect Directly from You</h3>
          <p className="mb-4">Information that you directly submit to us through our Services may include:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Basic contact details including your name, address, phone number, email.</li>
            <li>Order information including your name, billing address, shipping address, payment confirmation, email address, phone number.</li>
            <li>Account information including your username, password, security questions.</li>
            <li>Shopping information including the items you view, put in your cart or add to your wishlist.</li>
            <li>Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.</li>
          </ul>

          <h3 className="text-secondary text-[22px] mb-3">Information We Collect through Cookies</h3>
          <p className="mb-8">
            We also automatically collect certain information about your interaction with the Services (&ldquo;Usage Data&rdquo;). To do this, we may use cookies, pixels and similar technologies (&ldquo;Cookies&rdquo;). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.
          </p>

          <h3 className="text-secondary text-[22px] mb-3">Information We Obtain from Third Parties</h3>
          <p className="mb-4">Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Companies who support our Site and Services.</li>
            <li>Our payment processors, who collect payment information to process your payment in order to fulfill your orders and provide you with products or services you have requested.</li>
            <li>Third-party analytics and advertising partners.</li>
          </ul>

          <h2 className="text-secondary text-[28px] mb-4">How We Use Your Personal Information</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Providing Products and Services.</strong> We use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you related to your account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account.</li>
            <li><strong>Marketing and Advertising.</strong> We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail.</li>
            <li><strong>Security and Fraud Prevention.</strong> We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity.</li>
            <li><strong>Communicating with you.</strong> We use your personal information to provide you with customer support and improve our Services.</li>
          </ul>

          <h2 className="text-secondary text-[28px] mb-4">Cookies</h2>
          <p className="mb-8">
            Like many websites, we use Cookies on our Site. We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better understand user interaction with the Services. We may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.
          </p>

          <h2 className="text-secondary text-[28px] mb-4">How We Disclose Personal Information</h2>
          <p className="mb-4">In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage, fulfillment and shipping).</li>
            <li>With business and marketing partners to provide services and advertise to you.</li>
            <li>When you direct, request us or otherwise consent to our disclosure of certain information to third parties.</li>
            <li>With our affiliates or otherwise within our corporate group.</li>
            <li>In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations.</li>
          </ul>

          <h2 className="text-secondary text-[28px] mb-4">Your Rights</h2>
          <p className="mb-8">
            Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. These rights may include: Right to Access, Right to Delete, Right to Correct, Right of Portability, Right to Opt out of Sale or Sharing, and Right to Limit Use of Sensitive Personal Information. To exercise any of these rights, please contact us using the details below.
          </p>

          <h2 className="text-secondary text-[28px] mb-4">Contact</h2>
          <p className="mb-8">
            Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please contact us through our <Link href="/contact-us">Contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
