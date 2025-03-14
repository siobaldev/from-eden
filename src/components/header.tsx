import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, UserRound, AlignJustify } from "lucide-react";
import { siteConfig } from "@/app/siteConfig";

export default function Header() {
  return (
    <header className="wrapper py-4 lg:py-6 items-center flex justify-between">
      <div className="lg:hidden">
        <AlignJustify />
      </div>

      <Link href={"/"} className="flex items-center">
        <Image
          className="w-16 h-auto lg:w-20"
          src={"/assets/from-eden-logo.svg"}
          alt="from-eden-logo"
          width={80}
          height={80}
        />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex font-bold gap-x-10">
          {siteConfig.sections.tableOfContents.map((section, index) => (
            <li key={index}>
              <Link href={`#${section.id}`}>{section.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-3.5">
        <Search className="hidden lg:block" />
        <ShoppingBag />
        <UserRound className="hidden lg:block" />
      </div>
    </header>
  );
}
