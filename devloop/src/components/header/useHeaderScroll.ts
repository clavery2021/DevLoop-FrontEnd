import { useEffect, useState, useCallback } from "react";
import { HEADER_CONFIG } from "./header.constants";

export function useHeaderScroll(): boolean {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > HEADER_CONFIG.SCROLL_THRESHOLD;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrolled;
}
