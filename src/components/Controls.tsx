import React from 'react';

interface ControlsProps {
  steps: number;
  onStepsChange: (value: number) => void;
  rotationAngle: number;
  onRotationChange: (value: number) => void;
  gotoX: number;
  onGotoXChange: (value: number) => void;
  gotoY: number;
  onGotoYChange: (value: number) => void;
  onMove: () => void;
  onRotateCW: () => void;
  onRotateACW: () => void;
  onJump: () => void;
  onGoto: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  steps,
  onStepsChange,
  rotationAngle,
  onRotationChange,
  gotoX,
  onGotoXChange,
  gotoY,
  onGotoYChange,
  onMove,
  onRotateCW,
  onRotateACW,
  onJump,
  onGoto,
}) => {
  return (
    <div className="flex flex-col space-y-4 mr-4">
      <h2 className="text-xl font-semibold mb-2">Controls</h2>

      <div>
        <label>Steps:</label>
        <input
          type="number"
          value={steps}
          onChange={(e) => onStepsChange(Number(e.target.value))}
          className="border rounded px-2 py-1 mb-2"
        />
        <button
          onClick={onMove}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Move
        </button>
      </div>

      <div>
        <label>Rotate (degrees):</label>
        <input
          type="number"
          value={rotationAngle}
          onChange={(e) => onRotationChange(Number(e.target.value))}
          className="border rounded px-2 py-1 mb-2"
        />
        <div className="flex space-x-2">
          <button
            onClick={onRotateCW}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-700 transition"
          >
            CW
          </button>
          <button
            onClick={onRotateACW}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-700 transition"
          >
            ACW
          </button>
        </div>
      </div>

      <button
        onClick={onJump}
        className="px-4 py-1 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition"
      >
        Jump
      </button>

      <div>
        <label>Go to X:</label>
        <input
          type="number"
          value={gotoX}
          onChange={(e) => onGotoXChange(Number(e.target.value))}
          className="border rounded px-2 py-1 mb-2"
        />
        <label>Go to Y:</label>
        <input
          type="number"
          value={gotoY}
          onChange={(e) => onGotoYChange(Number(e.target.value))}
          className="border rounded px-2 py-1 mb-2"
        />
        <button
          onClick={onGoto}
          className="px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-700 transition"
        >
          Go to Position
        </button>
      </div>
    </div>
  );
};

export default Controls;
