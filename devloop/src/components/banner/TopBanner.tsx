"use client";

import { BANNER_CONFIG } from "./banner.constants";
import { BannerContent } from "./BannerContent";
import { useBannerState } from "./useBannerState";

export default function TopBanner() {
  const { show, dismissForever } = useBannerState();

  if (!show) return null;

  return (
    <aside
      className="fixed top-0 left-0 right-0 z-50"
      role="banner"
      aria-label="Announcement banner"
    >
      <div className="bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-cyan-200 text-gray-900 border-b border-gray-200">
        <div
          className="max-w-7xl mx-auto flex items-center justify-center gap-3 px-4 text-sm font-medium"
          style={{ height: BANNER_CONFIG.BANNER_HEIGHT }}
        >
          <BannerContent onDismiss={dismissForever} />
        </div>
      </div>
    </aside>
  );
}
