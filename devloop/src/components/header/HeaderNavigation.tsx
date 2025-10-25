import type { NavigationProps } from "./header.types";

export function HeaderNavigation({ items }: NavigationProps) {
  return (
    <nav className="hidden md:flex items-center gap-10">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
