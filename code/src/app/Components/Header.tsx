import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
            <Link href="dynamic">
            <h2 className="head-text">
                Dynamic Page
            </h2>
            </Link>

        </header>
    );
}