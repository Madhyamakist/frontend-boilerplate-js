"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Default values
  let headerText = "Dynamic Page";
  let linkHref = "/dynamic";

  if (pathname === "/dynamic") {
    headerText = "Static Page";
    linkHref = "/";
  }

  return <Header heading={headerText} linkHref={linkHref} />;
}
