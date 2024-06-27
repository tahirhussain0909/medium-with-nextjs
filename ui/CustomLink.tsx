"use client"

import Link from "next/link";

type LinkTypes = {
  label?: string;
  to: string;
  className?: string;
  children?: React.ReactNode;
};

export const CustomLink = ({
  label,
  to,
  className,
  children,
}: LinkTypes): JSX.Element => {
  return (
    <Link href={to} className={className}>
      {children || label}
    </Link>
  );
};
