"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getRouteInfo } from "../../routes";


export default function Header() {
    const pathname = usePathname();
    const { title, linkHref } = getRouteInfo(pathname);

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
                    {title}
                </h2>
            </Link>

        </header>
    );
}