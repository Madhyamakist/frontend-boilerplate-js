"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
    const pathname = usePathname();


    let heading = "Dynamic Page";
    let linkHref = "/dynamic";

    if (pathname === "/dynamic") {
        heading = "Static Page";
        linkHref = "/";
    }

    return (
        <header>
            <div className="-m-6">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}

                />
            </div>
            <Link href={linkHref}>
                <h2 className="head-text">
                    {heading}
                </h2>
            </Link>

        </header>
    );
}