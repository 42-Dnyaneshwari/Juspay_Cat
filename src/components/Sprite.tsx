import React from 'react';

interface SpriteProps {
  image: string;
  x: number;
  y: number;
  angle: number;
  size: number;
}

const Sprite: React.FC<SpriteProps> = ({ image, x, y, angle, size }) => {
  return (
    <img
      src={image}
      alt="cat"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: `rotate(${angle}deg)`,
        transition: 'all 0.5s ease',
      }}
      width={size}
      height={size}
    />
  );
};

export default Sprite;
