import { FC } from "react";
import { plans } from "./cards";
import "../../App.css";

interface RangeSliderProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}
export const RangeSlider: FC<RangeSliderProps> = ({
  currentIndex,
  setCurrentIndex,
}) => {
  console.log("Rendering RangeSlider");
  const maxIndex = plans.length > 0 ? plans.length - 1 : 1;
  const percentage = (currentIndex / maxIndex) * 100;

  return (
    <div className="range-container">
      {/* Range Input */}
      <input
        type="range"
        min={0}
        max={maxIndex}
        value={currentIndex}
        onChange={(e) => {
          setCurrentIndex(Number(e.target.value));
        }}
        className="range-slider"
        style={{
          background: `linear-gradient(to right, black ${percentage}%, #dbdbdb ${percentage}%)`,
        }}
      />

      {/* Dots for each plan */}
      {plans.map((_, index) => {
        const dotPosition = (index / maxIndex) * 100;

        return (
          <div
            key={index}
            className={`range-dot ${index <= currentIndex ? "active" : ""}`}
            style={{
              left: `calc(${dotPosition}% )`,
            }}
          />
        );
      })}
    </div>
  );
};

export default RangeSlider;
