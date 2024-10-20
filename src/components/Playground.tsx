import React, { useState } from 'react';
import Sprite from './Sprite';
import Controls from './Controls';

const Playground: React.FC = () => {
  const [cat, setCat] = useState({ x: 50, y: 50, angle: 0 });
  const [steps, setSteps] = useState(10);
  const [rotationAngle, setRotationAngle] = useState(15);
  const [gotoX, setGotoX] = useState(200);
  const [gotoY, setGotoY] = useState(200);

  const boxWidth = 500;
  const boxHeight = 500;
  const catSize = 100; // Increase the size of the cat

  const moveCat = () => {
    setCat((prev) => {
      let newX = prev.x + steps * Math.cos((prev.angle * Math.PI) / 180);
      let newY = prev.y + steps * Math.sin((prev.angle * Math.PI) / 180);

      newX = Math.min(Math.max(newX, 0), boxWidth - catSize);
      newY = Math.min(Math.max(newY, 0), boxHeight - catSize);

      return { ...prev, x: newX, y: newY };
    });
  };

  const rotateCat = (angle: number) => {
    setCat((prev) => ({ ...prev, angle: prev.angle + angle }));
  };

  const jumpCat = () => {
    setCat((prev) => ({ ...prev, y: Math.max(prev.y - 50, 0) }));
    setTimeout(() => {
      setCat((prev) => ({ ...prev, y: Math.min(prev.y + 50, boxHeight - catSize) }));
    }, 300);
  };

  const gotoPosition = () => {
    setCat({
      x: Math.min(Math.max(gotoX, 0), boxWidth - catSize),
      y: Math.min(Math.max(gotoY, 0), boxHeight - catSize),
      angle: 0,
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Cat Playground</h1>

      <div className="flex">
        <Controls
          steps={steps}
          onStepsChange={setSteps}
          rotationAngle={rotationAngle}
          onRotationChange={setRotationAngle}
          gotoX={gotoX}
          onGotoXChange={setGotoX}
          gotoY={gotoY}
          onGotoYChange={setGotoY}
          onMove={moveCat}
          onRotateCW={() => rotateCat(rotationAngle)}
          onRotateACW={() => rotateCat(-rotationAngle)}
          onJump={jumpCat}
          onGoto={gotoPosition}
        />

        <div
          className="relative border-4 border-blue-500 rounded-lg bg-white ml-4"
          style={{ width: boxWidth, height: boxHeight }}
        >
        <img 
        src="https://tse4.mm.bing.net/th?id=OIP.UDQELsdJWyTtQA3KBRXjlAHaEj&pid=Api&P=0&h=220" 
        alt="Cat" 
        style={{ width: '150px', height: 'auto', borderRadius: '8px' }} 
        />
        </div>
      </div>
    </div>
  );
};

export default Playground;
