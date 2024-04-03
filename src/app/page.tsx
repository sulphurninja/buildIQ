import Navbar from "@/components/global/navbar";
import Image from "next/image";
import { Hero } from "@/components/global/hero";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/global/text-generate-effect";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/global/sparkles";
import { InfiniteMovingCardsDemo } from "@/components/global/infinite-cards";
import { products } from "@/lib/constants";
import { HeroParallax } from "@/components/global/connect-parallax";
import { SpotlightComponent } from "@/components/global/spotlightComponent";
import {motion} from 'framer-motion'
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { CheckIcon } from "lucide-react";
import PlanHeader from "@/components/global/plan-header";

export default function Home() {


  return (
    <main className="">
      <Navbar />

      <div className="h-[40rem] text-center   w-full dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

        <h1 className="text-4xl md:text-6xl mb-2 bg-black  bg-clip-text text-transparent dark:bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
          buildIQ
        </h1>
        <TextGenerateEffect words="The Fastest Automation Builder on the planet!" />

        <div className="w-[40rem] h-40  relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <Button
            size={'lg'}
            className="p-6 md:p-8 absolute z-10 mt-12 md:ml-40 ml-52 mb-8 md:mb-0 md:text-2xl text-xl cursor-pointer  w-fit border-t-2 rounded-full border-[#4D4D4D] dark:bg-[#1F1F1F] dark:hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl dark:hover:shadow-neutral-500 duration-500"
          >
            <span className="dark:bg-clip-text  text-white dark:text-transparent cursor-pointer  dark:bg-gradient-to-r from-neutral-500 to-neutral-600   md:text-center font-sans dark:group-hover:bg-gradient-to-r dark:group-hover:from-black dark:group-hover:to-black">
              Start For Free Today
            </span>
          </Button>
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <InfiniteMovingCardsDemo />

      </div>
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="dark:bg-black/40 bg-black md:mt-0 -mt-[20rem]">
        <SpotlightComponent />
        <div className="-mt-56 md:mt-0">
        <PlanHeader/>

        </div>
     
        <div className="flex flex-wrap items-center  justify-center flex-col md:flex-row gap-8 ">
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan - <span className="text-amber-300">Most Popular</span>
                <h2 className="text-6xl ">$19</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    3000 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Multi-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$199</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
