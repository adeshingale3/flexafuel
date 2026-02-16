'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline()
        .from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
        })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full"
    >
      <div className="w-full px-4 sm:px-6 text-center">
        <img src="./banner.png" alt="" className="h-full w-auto inline-block"/>
        
      </div>
    </section>
  );
}
