"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical]
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  return (
    <svg
      viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
      className={cn(
        "absolute inset-0 h-full w-full",
        className,
      )}
      {...props}
    >
      <pattern
        id="grid-pattern"
        width={width}
        height={height}
        patternUnits="userSpaceOnUse"
      >
        <rect
          width={width - 1}
          height={height - 1}
          className={cn(
            "stroke-gray-400/30 transition-all duration-100 ease-in-out fill-transparent",
            squaresClassName,
          )}
        />
      </pattern>
      <rect
        width="100%"
        height="100%"
        fill="url(#grid-pattern)"
      />
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width - 1}
            height={height - 1}
            className={cn(
              "stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
              hoveredSquare === index ? "fill-[#3945cb]/30" : "fill-transparent",
              squaresClassName,
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
} 