import { useEffect } from 'react';

interface CollisionHandlerProps {
  sprite1: { x: number; y: number };
  sprite2: { x: number; y: number };
  onSwap: () => void;
}

const detectCollision = (s1: { x: number; y: number }, s2: { x: number; y: number }) => {
  const distance = Math.sqrt((s1.x - s2.x) ** 2 + (s1.y - s2.y) ** 2);
  return distance < 50; // Threshold for collision
};

const CollisionHandler: React.FC<CollisionHandlerProps> = ({ sprite1, sprite2, onSwap }) => {
  useEffect(() => {
    if (detectCollision(sprite1, sprite2)) {
      onSwap();
    }
  }, [sprite1, sprite2, onSwap]);

  return null;
};

export default CollisionHandler;
