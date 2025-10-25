export const HEADER_CONFIG = {
  SCROLL_THRESHOLD: 10,
  HEIGHT: 64, // h-16 = 64px
  LOGO: {
    src: "/devloop-swirl.svg",
    alt: "DevLoop logo",
    width: 30,
    height: 30,
  },
  BRAND_NAME: "DevLoop",
} as const;

export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Agent", href: "#agent" },
  { label: "Integrations", href: "#integrations" },
] as const;
