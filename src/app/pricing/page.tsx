import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Birth Creative",
  description:
    "Get a professional 5-7 page website for your birth worker business starting at just $39/month. Includes setup, continuous support, and ready-made resources.",
};

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pt-[40px] pb-[60px] px-[5%]">
        <div className="max-w-[1312px] mx-auto text-center">
          <h1 className="text-pink-light mb-4">Pricing</h1>
          <p className="font-[--font-libre] text-[17px] font-medium text-cream leading-[25px] tracking-[-0.1px] max-w-2xl mx-auto">
            Simple, transparent pricing designed to get your birth worker business online fast, without breaking the bank.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-[60px] px-[5%] bg-cream">
        <div className="max-w-[1312px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Annual Plan */}
            <div className="bg-white rounded-lg overflow-hidden border border-[#98A2B3] shadow-sm">
              <div className="p-8 flex flex-col gap-3">
                <h3 className="text-secondary">Annual</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-[--font-figtree] text-5xl font-extrabold text-dark-plum">$39</span>
                  <span className="font-[--font-libre] text-[17px] text-dark">/mo</span>
                </div>
                <p className="font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px]">
                  + $399 one-time setup fee
                </p>
                <p className="font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px]">
                  Billed annually. Best value.
                </p>
                <ul className="space-y-2 font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px] mt-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    5-7 page custom website
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Live in under 14 days
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Continuous support &amp; maintenance
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Ready-made business resources
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    FREE branding package ($299 value)
                  </li>
                </ul>
                <Link href="/contact-us" className="btn-primary mt-6 text-center">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="bg-white rounded-lg overflow-hidden border border-[#98A2B3] shadow-sm">
              <div className="p-8 flex flex-col gap-3">
                <h3 className="text-secondary">Monthly</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-[--font-figtree] text-5xl font-extrabold text-dark-plum">$49</span>
                  <span className="font-[--font-libre] text-[17px] text-dark">/mo</span>
                </div>
                <p className="font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px]">
                  + $499 one-time setup fee
                </p>
                <p className="font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px]">
                  Billed monthly. No commitment.
                </p>
                <ul className="space-y-2 font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px] mt-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    5-7 page custom website
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Live in under 14 days
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Continuous support &amp; maintenance
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Ready-made business resources
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Cancel anytime
                  </li>
                </ul>
                <Link href="/contact-us" className="btn-primary mt-6 text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center font-[--font-libre] text-[15px] text-dark mt-8">
            All prices in CAD. Have questions?{" "}
            <Link href="/contact-us" className="font-extrabold">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
