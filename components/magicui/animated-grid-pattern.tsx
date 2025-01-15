"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
}

export default function AnimatedGridPattern({
  numSquares = 30,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1,
  className,
}: AnimatedGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create grid lines
    const gridContainer = document.createElement("div");
    gridContainer.className = "absolute inset-0";
    container.appendChild(gridContainer);

    // Create vertical lines
    for (let i = 0; i <= numSquares; i++) {
      const line = document.createElement("div");
      line.className = "absolute top-0 bottom-0 bg-gray-200/30";
      line.style.width = "1px";
      line.style.left = `${(i / numSquares) * 100}%`;
      gridContainer.appendChild(line);
    }

    // Create horizontal lines
    for (let i = 0; i <= numSquares; i++) {
      const line = document.createElement("div");
      line.className = "absolute left-0 right-0 bg-gray-200/30";
      line.style.height = "1px";
      line.style.top = `${(i / numSquares) * 100}%`;
      gridContainer.appendChild(line);
    }

    // Create animated squares
    const squares: HTMLDivElement[] = [];
    const size = Math.floor(container.offsetWidth / numSquares);

    for (let i = 0; i < numSquares * numSquares; i++) {
      const square = document.createElement("div");
      square.className = "absolute bg-[#3945cb] rounded-sm";
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;
      square.style.left = `${(i % numSquares) * size}px`;
      square.style.top = `${Math.floor(i / numSquares) * size}px`;
      square.style.opacity = "0";
      square.style.transition = `opacity ${duration}s ease-in-out`;
      squares.push(square);
      container.appendChild(square);
    }

    let isAnimating = true;

    const animate = () => {
      if (!isAnimating) return;

      squares.forEach((square) => {
        square.style.opacity = "0";
      });

      const numToAnimate = Math.floor(squares.length * 0.3);
      const shuffled = squares.sort(() => Math.random() - 0.5).slice(0, numToAnimate);

      shuffled.forEach((square) => {
        square.style.opacity = String(Math.random() * maxOpacity);
      });

      setTimeout(animate, (duration + repeatDelay) * 1000);
    };

    animate();

    return () => {
      isAnimating = false;
      squares.forEach((square) => square.remove());
      gridContainer.remove();
    };
  }, [numSquares, maxOpacity, duration, repeatDelay]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
    />
  );
} 