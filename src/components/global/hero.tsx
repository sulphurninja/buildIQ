"use client";
import React from "react";
import { SparklesCore } from "./sparkles";
import { TextGenerateEffect } from "./text-generate-effect";
import { Button } from "../ui/button";

export function Hero() {
    return (
        <div className="h-[40rem] text-center   w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            
            <h1 className="text-4xl md:text-6xl   bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  FlowIQ 
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
                    className="p-8 absolute z-[100] mt-12 md:ml-40 ml-44 mb-8 md:mb-0 text-2xl  cursor-pointer  w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                    <span className="bg-clip-text text-transparent cursor-pointer bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
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
         
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
               
            </div>
        </div>
    );
}
