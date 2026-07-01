import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary relative py-10 pb-20 px-[5%]">
        <div className="max-w-[1312px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-[40%] flex flex-row flex-wrap gap-4">
            <div className="w-full flex justify-center lg:justify-start">
              <svg
                aria-hidden="true"
                className="w-[65px] h-[65px] text-accent fill-current"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z" />
              </svg>
            </div>

            <h1 className="text-pink-light">We help Canadian birth workers get found.</h1>

            <p className="font-[family-name:var(--font-libre)] text-[17px] font-medium text-cream leading-[25px] tracking-[-0.1px] lg:pr-[50px] mb-6">
              <b>Starting a new business can be scary, but it doesn&apos;t have to be. </b>
              We help Canadian birth workers get found by building you a strong business foundation with the resources you need to succeed.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="btn-primary">
                Our Pricing
              </Link>
              <Link href="/about-us" className="btn-primary">
                About Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%]">
            <Image
              src="/images/Birth-Creative-Browser-Image-1-1.webp"
              alt="Birth Creative Website Preview"
              width={1600}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Who We're For */}
      <section
        className="relative py-20 px-[5%]"
        style={{
          backgroundColor: "#5B3952",
          backgroundImage: "url('/images/Share-Your-Story-1-scaled.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#231F20] opacity-80" />
        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ transform: "translateY(1px)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-[300%] h-[300px]" style={{ fill: "#C498B9" }}>
            <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>

        <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
          <div className="w-full lg:w-[15%]" />
          <div className="w-full lg:w-[73%]">
            <h2 className="text-pink-light mb-6">Who we&apos;re for.</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Doulas */}
              <div className="flex flex-col items-start gap-2">
                <svg className="w-12 h-12" style={{ color: "#F5F8FF" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <h4 style={{ color: "#D5C4BC", fontFamily: "var(--font-figtree)", fontSize: "24px", fontWeight: 700, lineHeight: "26px", marginBottom: "16px" }}>Doulas</h4>
                <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-white leading-[21px] tracking-[-0.1px]">
                  Those who empower families with continuous emotional and physical support during pregnancy, childbirth, and postpartum.
                </p>
              </div>

              {/* Midwives */}
              <div className="flex flex-col items-start gap-2">
                <svg className="w-12 h-12" style={{ color: "#F5F8FF" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                </svg>
                <h4 style={{ color: "#D5C4BC", fontFamily: "var(--font-figtree)", fontSize: "24px", fontWeight: 700, lineHeight: "26px", marginBottom: "16px" }}>Midwives</h4>
                <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-white leading-[21px] tracking-[-0.1px]">
                  Those who provide expert care and guidance throughout the childbirth process, ensuring the safety and well-being of mothers &amp; babies.
                </p>
              </div>

              {/* Healthcare Workers */}
              <div className="flex flex-col items-start gap-2">
                <svg className="w-12 h-12" style={{ color: "#F5F8FF" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <h4 style={{ color: "#D5C4BC", fontFamily: "var(--font-figtree)", fontSize: "24px", fontWeight: 700, lineHeight: "26px", marginBottom: "16px" }}>Healthcare Workers</h4>
                <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-white leading-[21px] tracking-[-0.1px]">
                  Those who offer specialized knowledge and support to help new parents navigate breastfeeding challenges &amp; establish a successful feeding journey.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[15%]" />
        </div>
      </section>

      {/* What We Do */}
      <section
        className="relative pt-[60px] pb-20 px-[5%]"
        style={{ backgroundColor: "#C498B9" }}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/Untitled-design-25.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Top curve */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ transform: "translateY(-1px)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-[54px]" style={{ fill: "#E3B8D6" }}>
            <path d="M0,0c0,0,126.7,96.3,500,97c373.3-0.7,500-97,500-97v100H0V0z" />
          </svg>
        </div>
        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ transform: "translateY(1px)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-[54px]" style={{ fill: "#E3B8D6" }}>
            <path d="M0,100c0,0,126.7-96.3,500-97c373.3,0.7,500,97,500,97H0z" />
          </svg>
        </div>

        <div className="max-w-[1312px] mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-[#5B3952] text-center w-full mb-4">What we do.</h2>
          <p className="text-center mx-[15%] mb-8 max-lg:mx-0 font-[family-name:var(--font-libre)] text-[17px] font-medium text-[#231F20] leading-[25px] tracking-[-0.1px]">
            We create <b>simple, tailored, 5-7 page websites</b> for you that go live in under 14 days, then we&apos;ll give you the tools &amp; resources you need to secure your first client,{" "}
            <b>all starting at just $39 a month</b>.
          </p>

          {/* Two-column: image left, features right */}
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            {/* Left: image */}
            <div className="w-full lg:w-[45%]">
              <Image
                src="/images/MG_5269-scaled.webp"
                alt="Website creation process"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover object-left rounded-[25px]"
              />
            </div>

            {/* Right: features grid */}
            <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-2">
                <div className="rounded p-[10px] shrink-0" style={{ backgroundColor: "#D5C4BC" }}>
                  <svg className="w-9 h-9" style={{ color: "#231F20" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: "#411F37", fontFamily: "var(--font-figtree)", fontSize: "24px", fontWeight: 700, lineHeight: "26px", marginBottom: "16px" }}>Running in Under 14</h4>
                  <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-[#231F20] leading-[21px] tracking-[-0.1px]">
                    From our initial meeting, we&apos;ll get your site up &amp; running in under 14 days. Whether you need a fresh start or a redesign, we&apos;ll help you take care of the hard part.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-2">
                <div className="rounded p-[10px] shrink-0" style={{ backgroundColor: "#D5C4BC" }}>
                  <svg className="w-9 h-9" style={{ color: "#231F20" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: "#411F37", fontFamily: "var(--font-figtree)", fontSize: "24px", fontWeight: 700, lineHeight: "26px", marginBottom: "16px" }}>Continuous Support</h4>
                  <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-[#231F20] leading-[21px] tracking-[-0.1px]">
                    We&apos;ll ensure your website stays secure and up-to-date with our continuous care services. Whenever you need help, just give us a shout and we&apos;ll be there to support.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-2">
                <div className="rounded p-[10px] shrink-0" style={{ backgroundColor: "#D5C4BC" }}>
                  <svg className="w-9 h-9" style={{ color: "#231F20" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-6.5-4.5l4.79-5.85.71.71-5.5 5.5-2.79-2.79.71-.71 2.08 2.08z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: "#411F37", fontFamily: "var(--font-figtree)", fontSize: "24px", fontWeight: 700, lineHeight: "26px", marginBottom: "16px" }}>Ready-Made Resources</h4>
                  <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-[#231F20] leading-[21px] tracking-[-0.1px]">
                    Then, we&apos;ll give you access to essential business resources, including intake forms, confidentiality agreements, checklists, and birth plan templates to secure your first client (and many more!).
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-2">
                <div className="rounded p-[10px] shrink-0" style={{ backgroundColor: "#D5C4BC" }}>
                  <svg className="w-9 h-9" style={{ color: "#231F20" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: "#411F37", fontFamily: "var(--font-figtree)", fontSize: "24px", fontWeight: 700, lineHeight: "26px", marginBottom: "16px" }}>A Website About YOU!</h4>
                  <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-[#231F20] leading-[21px] tracking-[-0.1px]">
                    We&apos;ll customize your content to match your voice, highlighting your unique story and expertise. Your website will be all about you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Works */}
      <section className="pt-[60px] pb-10 px-[5%]" style={{ backgroundColor: "#E3B8D6" }}>
        <div className="max-w-[1312px] mx-auto">
          <h2 className="text-center mb-8" style={{ color: "#411F37", fontFamily: "var(--font-figtree)", fontSize: "40px", fontWeight: 800, lineHeight: "42px" }}>Latest works.</h2>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-10 flex-wrap">
            {/* Coast Wellness */}
            <div className="w-full lg:w-[48%] rounded-lg overflow-hidden mb-12" style={{ borderColor: "#98A2B3" }}>
              <div className="bg-white px-[34px] py-6 flex flex-col gap-2">
                <div className="text-center -mx-[34px] -mt-6 mb-0">
                  <Image
                    src="/images/Birth-Creative-Coast-Wellness-4.webp"
                    alt="Coast Wellness"
                    width={800}
                    height={540}
                    className="w-full h-auto rounded-none"
                  />
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <div>
                    <h3 style={{ color: "#411F37", fontFamily: "var(--font-figtree)", fontSize: "34px", fontWeight: 700, lineHeight: "40px", marginBottom: "8px" }}>Coast Wellness</h3>
                    <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-[#231F20] leading-[21px] tracking-[-0.1px] mb-8">
                      Coast Wellness is owned by Ursula Haczkiewicz, a certified birth and postpartum doula trained through DONA International.
                    </p>
                    <a
                      href="https://coastwellness.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Birth to Life */}
            <div className="w-full lg:w-[48%] rounded-lg overflow-hidden mb-12" style={{ borderColor: "#98A2B3" }}>
              <div className="bg-white px-[34px] py-6 flex flex-col gap-2">
                <div className="text-center -mx-[34px] -mt-6 mb-0">
                  <Image
                    src="/images/Birth-Creative-Coast-Wellness-5.webp"
                    alt="Birth to Life"
                    width={800}
                    height={540}
                    className="w-full h-auto rounded-none"
                  />
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <div>
                    <h3 style={{ color: "#411F37", fontFamily: "var(--font-figtree)", fontSize: "34px", fontWeight: 700, lineHeight: "40px", marginBottom: "8px" }}>Birth to Life</h3>
                    <p className="font-[family-name:var(--font-libre)] text-[15px] font-medium text-[#231F20] leading-[21px] tracking-[-0.1px] mb-8">
                      Birth to Life is owned by Lynn Shinto, a birth and postpartum doula trained by DONA International, a Child Passenger Safety Tech (CPST), and a professional postpartum belly binder.
                    </p>
                    <a
                      href="https://birthtolifedoula.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section
        className="relative py-[60px] px-[5%]"
        style={{ backgroundColor: "#5B3952" }}
      >
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/images/Untitled-design-27.png')",
            backgroundSize: "cover",
          }}
        />
        <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-40 relative z-10">
          <div className="w-full">
            <h2 className="mb-2" style={{ color: "#D5C4BC", fontFamily: "var(--font-figtree)", fontSize: "40px", fontWeight: 800, lineHeight: "42px" }}>Who we are.</h2>
            <p className="font-[family-name:var(--font-libre)] text-[17px] font-medium leading-[25px] tracking-[-0.1px] mb-6" style={{ color: "#D5C4BC" }}>
              Founded by husband and wife team Joseph Choi &amp; Lynn Shinto, Birth Creative combines Lynn&apos;s extensive experience as a birth and postpartum doula at{" "}
              <b>Birth to Life Doula</b> with Joseph&apos;s 15+ years in <b>business &amp; marketing</b>.
            </p>
            <p className="font-[family-name:var(--font-libre)] text-[17px] font-medium leading-[25px] tracking-[-0.1px] mb-6" style={{ color: "#D5C4BC" }}>
              We understand the challenges new healthcare professionals face, and we&apos;re here to support you in maximizing your impact, allowing you to focus on what you do best.
            </p>
            <Link href="/about-us" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="w-full">
            <Image
              src="/images/MG_5439-scaled.webp"
              alt="Joseph & Lynn"
              width={600}
              height={400}
              className="w-full h-auto rounded-[25px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
