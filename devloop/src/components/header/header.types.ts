export interface NavItem {
  label: string;
  href: string;
}

export interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  brandName: string;
}

export interface NavigationProps {
  items: readonly NavItem[];
}

export interface HeaderActionsProps {
  // Future props for customization
}
