import { type ReactNode, useEffect, useRef, useState } from "react";

interface ScrollAnimationSectionProps {
  children: ReactNode; // <-- type for children
  animationClass?: string; 
}

export default function ScrollAnimationSection({
  children,
  animationClass = "animate-fade-up", // default animation
}: ScrollAnimationSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity ease-out ${
        isVisible ? `opacity-100 ${animationClass}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

