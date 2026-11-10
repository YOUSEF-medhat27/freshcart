import Link from "next/link";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { FaBoxOpen } from "react-icons/fa6";

type Crumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title?: string;
  subtitle?: string;
  icon?: IconType;
  breadcrumbs?: Crumb[];
  background?: string;
  className?: string;
  children?: ReactNode;
};

export default function PageHeader({
  title = "All Products",
  subtitle = "Explore our complete product collection",
  icon: Icon = FaBoxOpen,
  breadcrumbs,
  background = "bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80]",
  className = "",
  children,
}: PageHeaderProps) {
  const crumbs: Crumb[] = breadcrumbs ?? [
    { label: "Home", href: "/" },
    { label: title },
  ];
  return (
    <section className={`${background} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-white/80"
        >
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <span key={crumb.label} className="flex items-center gap-2">
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-white">{crumb.label}</span>
                )}
                {!isLast && <span>/</span>}
              </span>
            );
          })}
        </nav>

      
        <div className="mt-4 flex items-center gap-4">
          {Icon && (
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-2xl text-white shadow-lg backdrop-blur-sm">
              <Icon />
            </span>
          )}

          <div className="leading-tight">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-white/90">{subtitle}</p>}
          </div>
        </div>

        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}