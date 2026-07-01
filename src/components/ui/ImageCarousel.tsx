"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0); // 0=rest, -1=show next, +1=show prev
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetIndex, setTargetIndex] = useState<number | null>(null);

  // Touch/swipe state
  const [dragOffset, setDragOffset] = useState(0); // pixel offset while dragging
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1);
  const touchStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setTargetIndex(null);
    setOffset(-1);
    setIsAnimating(true);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setTargetIndex(null);
    setOffset(1);
    setIsAnimating(true);
  }, [isAnimating]);

  const goToIndex = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;
      setTargetIndex(index);
      setOffset(index > currentIndex ? -1 : 1);
      setIsAnimating(true);
    },
    [currentIndex, isAnimating]
  );

  const handleTransitionEnd = useCallback(() => {
    if (targetIndex !== null) {
      setCurrentIndex(targetIndex);
      setTargetIndex(null);
    } else if (offset === -1) {
      setCurrentIndex(nextIndex);
    } else if (offset === 1) {
      setCurrentIndex(prevIndex);
    }
    setOffset(0);
    setIsAnimating(false);
  }, [offset, nextIndex, prevIndex, targetIndex]);

  // Touch handlers for swipe
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (isAnimating) return;
      touchStartX.current = e.touches[0].clientX;
      setContainerWidth(containerRef.current?.offsetWidth || 300);
      setIsDragging(true);
      setDragOffset(0);
    },
    [isAnimating]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = currentX - touchStartX.current;
      setDragOffset(diff);
    },
    [isDragging]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = containerWidth * 0.2; // 20% swipe triggers navigation

    if (dragOffset < -threshold) {
      // Swiped left -> go next
      goToNext();
    } else if (dragOffset > threshold) {
      // Swiped right -> go prev
      goToPrev();
    }
    // Reset drag offset (snap back or let the transition take over)
    setDragOffset(0);
  }, [isDragging, dragOffset, containerWidth, goToNext, goToPrev]);

  // Mouse drag handlers (for desktop dragging too)
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isAnimating) return;
      e.preventDefault();
      touchStartX.current = e.clientX;
      setContainerWidth(containerRef.current?.offsetWidth || 300);
      setIsDragging(true);
      setDragOffset(0);
    },
    [isAnimating]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const diff = e.clientX - touchStartX.current;
      setDragOffset(diff);
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = containerWidth * 0.2;

    if (dragOffset < -threshold) {
      goToNext();
    } else if (dragOffset > threshold) {
      goToPrev();
    }
    setDragOffset(0);
  }, [isDragging, dragOffset, containerWidth, goToNext, goToPrev]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  }, [isDragging]);

  if (images.length === 1) {
    return (
      <div className="relative size-full">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-contain p-8"
          sizes="(max-width: 1024px) 100vw, 600px"
        />
      </div>
    );
  }

  // Calculate translate based on offset + drag
  const dragPercent = isDragging ? (dragOffset / containerWidth) * 100 : 0;

  const shouldTransition = isAnimating && !isDragging;
  const transitionClass = shouldTransition
    ? "transition-transform duration-400 ease-in-out"
    : "";

  const getTranslate = (panelPos: number) => {
    // panelPos: -1=prev, 0=current, 1=next
    const base = (panelPos + offset) * 100 + dragPercent;
    return `translateX(${base}%)`;
  };

  return (
    <div
      ref={containerRef}
      className="group relative size-full overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Previous panel */}
      <div
        className={cn("absolute inset-0 select-none", transitionClass)}
        style={{ transform: getTranslate(-1) }}
      >
        <Image
          src={images[prevIndex]}
          alt=""
          fill
          className="pointer-events-none object-contain p-6"
          sizes="(max-width: 1024px) 100vw, 600px"
          draggable={false}
        />
      </div>

      {/* Current panel */}
      <div
        className={cn("absolute inset-0 select-none", transitionClass)}
        style={{ transform: getTranslate(0) }}
        onTransitionEnd={handleTransitionEnd}
      >
        <Image
          src={images[currentIndex]}
          alt={`${alt} — image ${currentIndex + 1} of ${images.length}`}
          fill
          className="pointer-events-none object-contain p-6"
          sizes="(max-width: 1024px) 100vw, 600px"
          draggable={false}
        />
      </div>

      {/* Next panel */}
      <div
        className={cn("absolute inset-0 select-none", transitionClass)}
        style={{ transform: getTranslate(1) }}
      >
        <Image
          src={images[nextIndex]}
          alt=""
          fill
          className="pointer-events-none object-contain p-6"
          sizes="(max-width: 1024px) 100vw, 600px"
          draggable={false}
        />
      </div>

      {/* Navigation arrows (visible on hover for desktop) */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-[2px] bg-neutral-black/80 text-neutral-white opacity-0 transition-all hover:bg-primary hover:text-neutral-black group-hover:opacity-100 focus-visible:opacity-100"
      >
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next image"
        className="absolute right-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-[2px] bg-neutral-black/80 text-neutral-white opacity-0 transition-all hover:bg-primary hover:text-neutral-black group-hover:opacity-100 focus-visible:opacity-100"
      >
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-200",
              index === currentIndex
                ? "w-6 bg-primary"
                : "w-2 bg-neutral-dark-gray hover:bg-neutral-offwhite"
            )}
          />
        ))}
      </div>
    </div>
  );
}
