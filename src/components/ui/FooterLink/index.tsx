import Link from "next/link";

import { FC, ReactNode } from "react";

interface footerLinkType {
  href: string;
  children?: ReactNode;
}

const FooterLink: FC<footerLinkType> = ({
  href,
  children,
}: footerLinkType): ReactNode => {
  return (
    <Link
      href={href}
      target="_blank"
      className="footer-link my-2 inline-flex items-center justify-center gap-1 rounded-md px-2 font-semibold"
    >
      {children}
    </Link>
  );
};

export default FooterLink;
