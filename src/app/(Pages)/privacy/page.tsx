import {
  FaShieldHalved,
  FaDatabase,
  FaUserShield,
  FaLock,
  FaShareNodes,
  FaUserCheck,
  FaCookie,
  FaClock,
  FaMessage,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import PageHeader from "../header/page";
import Link from "next/link";
import { IconType } from "react-icons";
type Article = {
  icon: IconType;
  title: string;
  items: { label?: string; text: string }[];
};

const articles: Article[] = [
  {
    icon: FaDatabase,
    title: "Information We Collect",
    items: [
      {
        label: "Personal Data:",
        text: "Name, email address, phone number, and shipping address.",
      },
      {
        label: "Payment Data:",
        text: "Credit card information processed securely through our payment providers.",
      },
      {
        label: "Technical Data:",
        text: "IP address, browser type, device information, and access times.",
      },
      {
        label: "Usage Data:",
        text: "Pages viewed, products browsed, and actions taken within our platform.",
      },
    ],
  },
  {
    icon: FaUserShield,
    title: "How We Use Your Information",
    items: [
      { text: "To process and fulfill your orders." },
      { text: "To send order confirmations and shipping updates." },
      { text: "To provide customer support and respond to inquiries." },
      { text: "To improve our products, services, and user experience." },
      { text: "To send promotional communications (with your consent)." },
    ],
  },
  {
    icon: FaLock,
    title: "Data Protection",
    items: [
      {
        text: "We implement industry-standard encryption (SSL/TLS) for all data transfers.",
      },
      {
        text: "Payment information is processed by PCI-compliant payment providers.",
      },
      {
        text: "We conduct regular security audits and vulnerability assessments.",
      },
      {
        text: "Access to personal data is restricted to authorized personnel only..",
      },
    ],
  },
  {
    icon: FaShareNodes,
    title: "Information Sharing",
    items: [
      {
        text: "We do not sell, trade, or rent your personal information to third parties.",
      },
      {
        text: "We may share data with trusted service providers who assist in our operations.",
      },
      {
        text: "We may disclose information when required by law or to protect our rights.",
      },
    ],
  },
  {
    icon: FaUserCheck,
    title: "Your Rights",
    items: [
      {
        label: "Access:",
        text: "Request a copy of your personal data",
      },
      {
        label: "Rectification:",
        text: "Request correction of inaccurate data.",
      },
      {
        label: "Erasure:",
        text: "Request deletion of your personal data..",
      },
      {
        label: "Portability:",
        text: "Request your data in a portable format.",
      },
      {
        label: "Opt-out:",
        text: "Unsubscribe from marketing communications at any time.",
      },
    ],
  },
  {
    icon: FaCookie,
    title: "Cookies",
    items: [
      {
        text: "We use cookies to enhance your browsing experience and remember preferences.",
      },
      {
        text: "You can control cookie settings through your browser preferences.",
      },
      {
        text: "Disabling cookies may affect the functionality of certain features.",
      },
    ],
  },
  {
    icon: FaClock,
    title: "Data Retention",
    items: [
      {
        text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Account data is deleted within 30 days of account closure upon request.",
      },
    ],
  },
  {
    icon: FaMessage,
    title: "Contact Us",
    items: [
      {
        text: "For questions about this Privacy Policy or to exercise your rights, contact our Data Protection Officer at privacy@freshcart.com",
      },
    ],
  },
];
export default function Privacy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: February 2026"
        icon={FaShieldHalved}
        background="bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
      />

      <main className="bg-slate-50 py-8">
        <div className="mx-auto max-w-6xl space-y-8 px-4 lg:px-6">
         
          <div className="flex items-start gap-4 rounded-2xl border border-green-200 bg-linear-to-br from-green-50 to-emerald-50 p-5 shadow-sm">
            <span className="flex bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80] h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-spring-green-45 text-lg text-white shadow-md">
              <FaShieldHalved />
            </span>

            <div>
              <h2 className="text-sm font-bold text-green-950">
                Your Privacy Matters
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-green-900">
                This Privacy Policy describes how FreshCart collects, uses, and
                protects your personal information when you use our services. We
                are committed to ensuring that your privacy is protected.
              </p>
            </div>
          </div>

          
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map(({ icon: Icon, title, items }, i) => (
              <article
                key={title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
             
                <div className="flex items-center gap-4">
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-green-50 text-lg text-primary-600 transition-colors duration-300 group-hover:text-white">
                    {/* طبقة التدرّج: مخفية في الأول وتظهر عند hover على الكارت */}
                    <span className="absolute inset-0 bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="relative">
                      <Icon />
                    </span>
                  </span>

                  <div className="leading-tight">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-spring-green-36">
                      Article {i + 1}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  </div>
                </div>

                
                <ul className="mt-5 space-y-3">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-xs text-gray-700"
                    >
                      <span className="mt-px text-primary-600 shrink-0 rounded-md bg-green-100 px-1.5 py-0.5 text-[10px] font-semibold text-spring-green-36">
                        {i + 1}.{j + 1}
                      </span>
                      <p className="leading-relaxed">
                        {item.label && (
                          <span className="font-semibold text-gray-900">
                            {item.label}{" "}
                          </span>
                        )}
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm text-gray-800 transition hover:bg-gray-200"
              >
                <FaArrowLeft className="text-xs" />
                Back to Home
              </Link>

              <Link
                href="/terms"
                className="flex items-center bg-primary-600 gap-2 rounded-lg bg-spring-green-45 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-spring-green-36"
              >
                View Terms of Service
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
