import Link from "next/link";
import type { BannerContentProps, DismissButtonProps } from "./banner.types";

function DismissButton({ onClick }: DismissButtonProps) {
  return (
    <button
      type="button"
      aria-label="Dismiss announcement"
      onClick={onClick}
      className="ml-2 p-1 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export function BannerContent({ onDismiss }: BannerContentProps) {
  return (
    <>
      <span>
        The future of code reviews is changing — with{" "}
        <span className="font-semibold">Dev + AI</span>.
      </span>
      <Link
        href="/blog/vision"
        className="underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        Read our vision →
      </Link>
      <DismissButton onClick={onDismiss} />
    </>
  );
}
