"use client";

import clsx from "clsx";
import { HEADER_CONFIG, NAV_ITEMS } from "./header.constants";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderActions } from "./HeaderActions";
import { useHeaderScroll } from "./useHeaderScroll";

export default function Header() {
  const scrolled = useHeaderScroll();

  return (
    <header
      className={clsx(
        "sticky left-0 w-full z-40 transition-all duration-300 border-b",
        "top-[var(--banner-offset,0px)]",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-white border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <HeaderLogo
          src={HEADER_CONFIG.LOGO.src}
          alt={HEADER_CONFIG.LOGO.alt}
          width={HEADER_CONFIG.LOGO.width}
          height={HEADER_CONFIG.LOGO.height}
          brandName={HEADER_CONFIG.BRAND_NAME}
        />

        <HeaderNavigation items={NAV_ITEMS} />

        <HeaderActions />
      </div>
    </header>
  );
}
