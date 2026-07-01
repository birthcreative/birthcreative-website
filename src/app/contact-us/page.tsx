import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Birth Creative",
  description:
    "At Birth Creative, we're here to support you on your journey to building a strong web presence as a birth worker. Whether you're a doula, midwife, or consultant, get in touch with us today.",
};

export default function ContactUs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pt-[40px] pb-[80px] px-[5%]">
        <div className="max-w-[1312px] mx-auto">
          <h1 className="text-pink-light">Let&apos;s get your voice heard.</h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-[60px] px-[5%] bg-cream">
        <div className="max-w-[800px] mx-auto">
          <p className="font-[--font-libre] text-[17px] font-medium text-dark leading-[25px] tracking-[-0.1px] mb-8">
            Let&apos;s get your business started, we are thrilled to hear from you. Whether you have a question, want to discuss a project, or are interested in collaborating, we are here to help.
          </p>

          <form className="space-y-6 bg-white p-8 rounded-lg border border-[#D0D5DD]">
            <div>
              <label htmlFor="name" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
              <label htmlFor="service" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                What service are you interested in?
              </label>
              <select
                id="service"
                name="service"
                className="w-full border border-[#D0D5DD] rounded-lg px-4 py-3 font-[--font-libre] text-[15px] text-dark focus:outline-none focus:border-primary bg-white"
              >
                <option value="">Select an option</option>
                <option value="website">New Website</option>
                <option value="redesign">Website Redesign</option>
                <option value="resources">Business Resources</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block font-[--font-figtree] text-[16px] font-semibold text-dark mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-[#D0D5DD] rounded-lg px-4 py-3 font-[--font-libre] text-[15px] text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
