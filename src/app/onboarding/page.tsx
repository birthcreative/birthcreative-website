import type { Metadata } from "next";
import SubmissionForm from "@/components/SubmissionForm";

export const metadata: Metadata = {
  title: "Onboarding | Birth Creative",
  description:
    "At Birth Creative, we understand that getting started can feel overwhelming. Complete our straightforward onboarding form to begin your journey. It should take less than 15 minutes.",
};

export default function Onboarding() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pt-[40px] pb-[60px] px-[5%]">
        <div className="max-w-[1312px] mx-auto">
          <h1 className="text-pink-light">Onboarding Form</h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-[60px] px-[5%] bg-cream">
        <div className="max-w-[800px] mx-auto">
          <p className="font-[--font-libre] text-[17px] font-medium text-dark leading-[25px] tracking-[-0.1px] mb-8">
            We&apos;re glad to have you with us. Please complete the following onboarding form! It should take you less than 15 minutes.
          </p>

          <SubmissionForm kind="onboarding" submitLabel="Submit Onboarding Form">
            <div>
              <label htmlFor="fullname" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                className="w-full border border-[#D0D5DD] rounded-lg px-4 py-3 font-[--font-libre] text-[15px] text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="business" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="business"
                name="business"
                required
                className="w-full border border-[#D0D5DD] rounded-lg px-4 py-3 font-[--font-libre] text-[15px] text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-[#D0D5DD] rounded-lg px-4 py-3 font-[--font-libre] text-[15px] text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-[#D0D5DD] rounded-lg px-4 py-3 font-[--font-libre] text-[15px] text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="role" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                Your Role *
              </label>
              <select
                id="role"
                name="role"
                required
                className="w-full border border-[#D0D5DD] rounded-lg px-4 py-3 font-[--font-libre] text-[15px] text-dark focus:outline-none focus:border-primary bg-white"
              >
                <option value="">Select your role</option>
                <option value="doula">Doula</option>
                <option value="midwife">Midwife</option>
                <option value="healthcare">Healthcare Worker / Consultant</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="details" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                Tell us about your business *
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                required
                placeholder="Tell us about your services, experience, and what you're looking for in a website..."
                className="w-full border border-[#D0D5DD] rounded-lg px-4 py-3 font-[--font-libre] text-[15px] text-dark focus:outline-none focus:border-primary"
              />
            </div>
          </SubmissionForm>
        </div>
      </section>
    </>
  );
}
