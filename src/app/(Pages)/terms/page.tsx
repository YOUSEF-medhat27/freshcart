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
  FaRegIdCard,
  FaWallet,
} from "react-icons/fa6";
import { FaFileMedicalAlt, FaHandshake, FaBalanceScale  } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { IoRefresh } from "react-icons/io5";
import PageHeader from "../header/page";
import Link from "next/link";
import type { IconType } from "react-icons";
type Article = {
  icon: IconType;
  title: string;
  items: { label?: string; text: string }[];
};

const articles: Article[] = [
  {
    icon: FaHandshake,
    title: "Acceptance of Terms",
    items: [
      {
        text: "By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
      },
      {
        text: "If you do not agree to these Terms, you must not access or use the Service.",
      },
      {
        text: "We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.",
      },
    ],
  },
  {
    icon: FaUserCheck,
    title: "Data Protection",
    items: [
      {
        text: "The Service is intended for users who are at least eighteen (18) years of age.",
      },
      {
        text: "By using the Service, you represent and warrant that you are of legal age to form a binding contract.",
      },
      {
        text: "If you are accessing the Service on behalf of a legal entity, you represent that you have the authority to bind such entity.",
      },
    ],
  },
  {
    icon: FaRegIdCard,
    title: "Account Registration",
    items: [
      {
        text: "You may be required to create an account to access certain features of the Service.",
      },
      {
        text: "You agree to provide accurate, current, and complete information during registration.",
      },
      {
        text: "You are solely responsible for maintaining the confidentiality of your account credentials.",
      },
      {
        text: "You agree to notify us immediately of any unauthorized use of your account.",
      },
    ],
  },
  {
    icon: FaWallet,
    title: "Orders and Payments",
    items: [
      {
        text: "All orders placed through the Service are subject to acceptance and availability.",
      },
      {
        text: "Prices are subject to change without notice prior to order confirmation.",
      },
      {
        text: "Payment must be made in full at the time of purchase through approved payment methods.",
      },
      {
        text: "We reserve the right to refuse or cancel any order at our sole discretion.",
      },
    ],
  },
  {
    icon: MdLocalShipping,
    title: "Shipping and Delivery",
    items: [
      {
        text: "Shipping times are estimates only and are not guaranteed.",
      },
      {
        text: "Risk of loss and title for items purchased pass to you upon delivery to the carrier.",
      },
      {
        text: "We are not responsible for delays caused by carriers, customs, or other factors beyond our control.",
      },
    ],
  },
  {
    icon: IoRefresh,
    title: "Data Retention",
    items: [
      {
        text: "Our return policy allows returns within 14 days of delivery for most items.",
      },
      {
        text: "Products must be unused and in original packaging.",
      },
      {
        text: "Refunds will be processed within 5-7 business days after receiving the returned item.",
      },
    ],
  },
  {
    icon: FaBalanceScale ,
    title: "Limitation of Liability",
    items: [
      {
        text: "To the maximum extent permitted by applicable law, FreshCart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.",
      },
    ],
  },
  {
    icon: FaMessage,
    title: "Contact Us",
    items: [
      {
        text: "If you have any questions about these Terms, please contact us at support@freshcart.com",
      },
    ],
  },
];
export default function Service() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: February 2026"
        icon={FaFileMedicalAlt}
        background="bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
      />

      <main className="bg-slate-50 py-8">
        <div className="mx-auto max-w-6xl space-y-8 px-4 lg:px-6">
          <div className="flex items-start gap-4 rounded-2xl bg-linear-to-r from-amber-50 to-amber-100/50 border border-amber-200 p-5 shadow-sm">
            <span className="flex bg-amber-500 h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-spring-green-45 text-lg text-white shadow-md">
              <FaFileMedicalAlt />
            </span>

            <div className="">
              <h2 className="text-sm font-bold text-green-950">
                Important Notice
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
                href="/privacy"
                className="flex items-center bg-primary-600 gap-2 rounded-lg bg-spring-green-45 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-spring-green-36"
              >
                View Privacy Policy
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
