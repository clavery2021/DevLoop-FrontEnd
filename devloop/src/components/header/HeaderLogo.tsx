import Link from "next/link";
import Image from "next/image";
import type { LogoProps } from "./header.types";

export function HeaderLogo({ src, alt, width, height, brandName }: LogoProps) {
  return (
    <Link href="#hero" className="flex items-center gap-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full"
      />
      <span className="text-xl font-semibold tracking-tight text-gray-900">
        {brandName}
      </span>
    </Link>
  );
}
