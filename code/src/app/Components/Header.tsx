import Image from "next/image";
import Link from "next/link";

interface HeaderProps{
    heading:string;
    linkHref:string;
}

export default function Header(props: HeaderProps) {
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
            <Link href={props.linkHref}>
            <h2 className="head-text">
                {props.heading}
            </h2>
            </Link>

        </header>
    );
}