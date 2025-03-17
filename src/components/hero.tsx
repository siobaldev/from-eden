import { siteConfig } from "@/app/siteConfig";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="wrapper md:pt-20 pt-16">
      <div className="grid place-items-center lg:grid-cols-2 gap-y-16">
        <div className="text-center grid place-items-center lg:place-items-start lg:text-start order-2 lg:order-1 space-y-4">
          <h1 className="text-3xl sm:text-4xl sm:max-w-[40rem] md:text-5xl lg:text-6xl">
            {siteConfig.sections.hero.title}
          </h1>
          <p className="md:text-lg lg:text-xl sm:max-w-[40rem]">
            {siteConfig.sections.hero.description}
          </p>
          <button className="bg-brown text-beige px-8 py-4">
            {siteConfig.sections.hero.cta}
          </button>
        </div>
        <div className="relative w-fit flex justify-center order-1 lg:order-2 items-center ">
          <span className="abolute rotate-45 size-48 md:size-72 bg-brown/10 lg:size-96" />
          <Image
            className="w-32 absolute md:w-48 lg:w-72 -rotate-[16deg] -left-2 lg:-left-10 h-auto "
            src={"/assets/flower-1.webp"}
            alt="from-eden-logo"
            width={80}
            height={80}
            unoptimized
          />
          <Image
            className="size-32 absolute md:w-48 lg:w-72 -right-2 lg:-right-10 rotate-[16deg] h-auto "
            src={"/assets/flower-2.webp"}
            alt="from-eden-logo"
            width={80}
            height={80}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
