import React from "react";

type Props = {
  onSelect: (count: number) => void;
  label: string;
};

const WordSelector: React.FC<Props> = ({ onSelect, label }) => {
  const options = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <div className="word-selector">
      <h2>{label}</h2>
      {/* <h2>Choose number of words:</h2> */}
      {options.map((count) => (
        <button key={count} onClick={() => onSelect(count)}>
          {count}
        </button>
      ))}
    </div>
  );
};

export default WordSelector;
