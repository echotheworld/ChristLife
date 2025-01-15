"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  phrases?: string[];
  className?: string;
}

export default function TypingAnimation({
  phrases = [
    "Welcome To Christ Life Bacoor",
    "Welcome To God&apos;s Family",
    "Welcome Home"
  ],
  className = "",
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("Welcome");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const baseText = "Welcome";

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > baseText.length) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhraseIndex((current) => (current + 1) % phrases.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [displayText, isTyping, phraseIndex, phrases]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-[2px] h-[1em] bg-[#3945cb] ml-1 animate-[blink_1s_steps(1)_infinite]" />
    </span>
  );
} 