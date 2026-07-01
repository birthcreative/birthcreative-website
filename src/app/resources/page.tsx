import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Birth Creative",
  description:
    "Welcome to the Resources section of Birth Creative, your go-to hub for essential tools and materials specifically designed for birth workers, including doulas, midwives, and consultants.",
};

const resources = [
  {
    title: "Birth Preferences",
    description:
      "Helps new doulas support and advocate for their clients' desired birth experiences by outlining specific wishes and choices for labor, delivery, and postpartum care.",
    image: "/images/1.jpg",
    link: "https://www.canva.com/design/DAGeJWjG3FU/W5LzwOocoCcjFu2dBqKkpg/view",
  },
  {
    title: "Service Agreement",
    description:
      "This letter of agreement outlines the terms and conditions between the doula and the client for the provision of doula services, including support during pregnancy, childbirth, and postpartum care.",
    image: "/images/Birth-Creative-ContractService-Agreement.webp",
    link: "https://www.canva.com/design/DAGfLSFQzt8/tzlBduRipRhnLmJTLcWDyg/view",
  },
  {
    title: "Labour Positions",
    description:
      "This educational poster features 15 different positions for labour and childbirth, including standing, squatting, sitting, and supported laboring techniques that can be used in hospital settings.",
    image: "/images/Birth-creative-Effective-Positions-For-Labour-Birth.webp",
    link: "https://www.canva.com/design/DAGgIV-r8FI/IwKdhsl6VGEbnP_PkW4WsA/view",
  },
];

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pt-[40px] pb-[60px] px-[5%]">
        <div className="max-w-[1312px] mx-auto">
          <h1 className="text-pink-light">Resources</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-[60px] px-[5%] bg-cream">
        <div className="max-w-[1312px] mx-auto">
          <p className="font-[--font-libre] text-[17px] font-medium text-dark leading-[25px] tracking-[-0.1px] mb-12 max-w-3xl">
            Here, you will find a collection of essential documents, like sample contracts, client intake forms, and informational brochures, designed to empower new birth workers in establishing their practice and connecting with clients across Canada. If you need specific templates, guidance on marketing strategies, or assistance with regulatory requirements, please let us know.{" "}
            <Link href="/contact-us">We&apos;re here to help</Link>!
          </p>

          <h2 className="text-secondary mb-8">For Doulas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-white rounded-lg p-6 border border-[#D0D5DD] flex flex-col gap-4">
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                </a>
                <h3 className="text-secondary">{resource.title}</h3>
                <p className="font-[--font-libre] text-[15px] font-medium text-dark leading-[21px] tracking-[-0.1px] flex-1">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-[17px]"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
