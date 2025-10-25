import { useCallback, useEffect, useRef, useState } from "react";
import { BANNER_CONFIG } from "./banner.constants";
import type { BannerState } from "./banner.types";

export function useBannerState() {
  const [show, setShowState] = useState(false);
  const stateRef = useRef<BannerState>({ show: false, dismissed: false });

  // Update both state and ref, plus CSS variable
  const setShow = useCallback((visible: boolean) => {
    stateRef.current.show = visible;
    setShowState(visible);

    document.documentElement.style.setProperty(
      "--banner-offset",
      visible ? `${BANNER_CONFIG.BANNER_HEIGHT}px` : "0px"
    );
  }, []);

  const hide = useCallback(() => setShow(false), [setShow]);

  const dismissForever = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(BANNER_CONFIG.STORAGE_KEY, "1");
    }
    stateRef.current.dismissed = true;
    hide();
  }, [hide]);

  useEffect(() => {
    // Initialize dismissed state from localStorage
    if (typeof window !== "undefined") {
      const isDismissed = localStorage.getItem(BANNER_CONFIG.STORAGE_KEY) === "1";
      stateRef.current.dismissed = isDismissed;

      if (!isDismissed) {
        setShow(true);
      }
    }

    // Scroll handler
    const handleScroll = () => {
      const { dismissed, show: currentShow } = stateRef.current;

      if (dismissed) return;

      const scrollY = window.scrollY;
      const { SHOW, HIDE } = BANNER_CONFIG.THRESHOLDS;

      if (scrollY <= SHOW && !currentShow) {
        setShow(true);
      } else if (scrollY > HIDE && currentShow) {
        hide();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShow, hide]);

  return { show, dismissForever };
}
