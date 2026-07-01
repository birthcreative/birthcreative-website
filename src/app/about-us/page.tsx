import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pt-[40px] pb-[80px] px-[5%]">
        <div className="max-w-[1312px] mx-auto">
          <h1 className="text-pink-light mb-4">About Us</h1>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="relative py-[60px] pb-[80px] px-[5%] bg-accent"
        style={{
          backgroundImage: "url('/images/Untitled-design-25.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 relative z-10">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/Untitled-design-27.png"
              alt="Joseph Choi & Lynn Shinto"
              width={600}
              height={400}
              className="w-full h-auto rounded-[25px]"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-secondary mb-6">Our Story</h2>
            <div className="space-y-4 font-[--font-libre] text-[17px] font-medium text-dark leading-[25px] tracking-[-0.1px]">
              <p>
                Founded by husband and wife team Joseph Choi and Lynn Shinto, Birth Creative was born from a shared vision: to help birth workers build strong, professional online presences so they can focus on what matters most, supporting families through one of life&apos;s most transformative experiences.
              </p>
              <p>
                Lynn brings years of hands-on experience as a birth and postpartum doula through <b>Birth to Life Doula</b>, where she has supported countless families through pregnancy, childbirth, and postpartum care. Her deep understanding of the birth work community means she knows exactly what clients need to succeed.
              </p>
              <p>
                Joseph brings over <b>15 years of business and marketing experience</b> to the table, helping birth workers translate their passion into professional, client-attracting websites that actually work.
              </p>
              <p>
                Together, we understand the challenges new healthcare professionals face. We&apos;re here to support you in maximizing your impact, allowing you to focus on what you do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[60px] px-[5%] bg-cream">
        <div className="max-w-[1312px] mx-auto">
          <h2 className="text-dark-plum text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-secondary mb-3">Empathy First</h3>
              <p className="font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px]">
                We listen, understand, and build from a place of genuine care for your work and your clients.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-secondary mb-3">Done Fast, Done Right</h3>
              <p className="font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px]">
                Your site goes live in under 14 days without cutting corners. Speed and quality are not trade-offs.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-secondary mb-3">Your Voice, Amplified</h3>
              <p className="font-[--font-libre] text-[15px] text-dark leading-[21px] tracking-[-0.1px]">
                Every site we build is a reflection of you, your story, your expertise, and your unique approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-[60px] px-[5%] text-center">
        <div className="max-w-[1312px] mx-auto">
          <h2 className="text-text-warm mb-6">Ready to get started?</h2>
          <p className="font-[--font-libre] text-[17px] text-cream mb-8 max-w-2xl mx-auto">
            Let&apos;s build a website that helps you connect with the families who need you most.
          </p>
          <Link href="/pricing" className="btn-primary">
            View Our Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
