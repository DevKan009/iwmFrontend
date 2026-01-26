import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  useImperativeHandle,
  useState,
  useEffect,
  useCallback
} from 'react';

export interface CardSwapHandle {
  bringToFront: (idx: number) => void;
}

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  children: ReactNode;
  // Kept for compatibility but unused or simplified
  cardDistance?: number;
  verticalDistance?: number;
  skewAmount?: number;
  easing?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute inset-0 rounded-xl bg-background border border-border overflow-hidden transition-all duration-500 ease-in-out ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));
Card.displayName = 'Card';

const CardSwap = forwardRef<CardSwapHandle, CardSwapProps>(({
  width = 600,
  height = 400,
  delay = 5000,
  pauseOnHover = true,
  onCardClick,
  children
}, ref) => {
  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;

  // State to track the order of indices [0, 1, 2, 3, 4]
  // Index 0 is front, Index 1 is behind it, etc.
  const [order, setOrder] = useState<number[]>(
    Array.from({ length: totalCards }, (_, i) => i)
  );

  const [isHovered, setIsHovered] = useState(false);

  const bringToFront = useCallback((targetIndex: number) => {
    setOrder((prevOrder) => {
      // If already at front, do nothing
      if (prevOrder[0] === targetIndex) return prevOrder;

      // Move target to front, keep others in relative order
      const newOrder = [targetIndex, ...prevOrder.filter(i => i !== targetIndex)];
      return newOrder;
    });
  }, []);

  const nextCard = useCallback(() => {
    setOrder((prevOrder) => {
      const [first, ...rest] = prevOrder;
      return [...rest, first];
    });
  }, []);

  useImperativeHandle(ref, () => ({
    bringToFront
  }));

  useEffect(() => {
    if (pauseOnHover && isHovered) return;

    const interval = setInterval(nextCard, delay);
    return () => clearInterval(interval);
  }, [nextCard, delay, pauseOnHover, isHovered]);

  return (
    <div
      className="relative mx-auto mt-10 perspective-[1000px]"
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {childrenArray.map((child, originalIndex) => {
        // Find where this card is in the current stack order
        const positionIndex = order.indexOf(originalIndex);

        // Use position to determine styles
        // Position 0 = Front
        // Position 1 = Behind 1 step
        // etc.

        // Simple stacking logic
        const xOffset = positionIndex * 15; // 15px right per step
        const yOffset = positionIndex * 15; // 15px down per step
        const scale = 1 - (positionIndex * 0.05); // Scale down 5% per step
        const zIndex = totalCards - positionIndex;
        const opacity = positionIndex > 3 ? 0 : 1; // Fade out cards deep in stack is optional, let's keep visible but maybe fading

        // If it's the very last card moving to front (conceptually), we might want a different transition,
        // but simple CSS transition works surprisingly well for the "shifting" stack effect.

        const style: React.CSSProperties = {
          zIndex,
          transform: `translate3d(${xOffset}px, ${yOffset}px, -${positionIndex * 50}px) scale(${scale})`,
          opacity: positionIndex > 4 ? 0 : 1, // Hide cards that are too far back
          pointerEvents: positionIndex === 0 ? 'auto' : 'none', // Only interact with front card usually?
          // Or allow clicking visible parts of back cards?
          // Let's allow clicking back cards to bring them to front.
        };

        // If we want back cards to be clickable to bring to front:
        const isClickable = true; // positionIndex !== 0; 
        const pointerEvents = isClickable ? 'auto' : 'none';

        if (!isValidElement(child)) return null;

        return (
          <div
            key={originalIndex}
            style={{
              ...style,
              pointerEvents,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)'
            }}
            onClick={() => {
              bringToFront(originalIndex);
              onCardClick?.(originalIndex);
            }}
            className="cursor-pointer shadow-2xl rounded-2xl"
          >
            {/* Pass width/height to children if needed, but they are absolutely positioned now */}
            {cloneElement(child as ReactElement<any>, {
              // We can pass internal props if needed
            })}
          </div>
        );
      })}
    </div>
  );
});

CardSwap.displayName = 'CardSwap';
export default CardSwap;
