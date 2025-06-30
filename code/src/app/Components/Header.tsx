import Image from "next/image";
export default function Header() {
    return (
        <header className="flex items-center justify-between bg-[#634741] h-[100px] border-1"> 
            <div className="-mb-[20px] -ml-[20px]">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={150}
                    height={150}
                />
            </div>
            <h1 className="text-[16px] pr-[15px] text-[#C4BBAF] ${montserrat.variable}">
                Dynamic Page
            </h1>

        </header>
    );
}
