"use client"

import React, { useRef, useEffect, useState } from 'react';
import { cn } from "../../lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight ({ className, fill }: SpotlightProps)  {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Adjust the threshold as needed, here 0.5 means at least 50% of the element is visible
        const threshold = 3.0   ;
        const isVisible = rect.top < windowHeight * threshold && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible && (
        <svg
          className={cn(
            "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-100",
            className
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              fill={fill || "white"}
              fillOpacity="0.21"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};

