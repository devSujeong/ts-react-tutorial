import React from "react";

type GreetingsProps = {
  name: string;
  mark?: string;
  optional?: string;
  onClick: (name: string) => void;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!', optional, onClick }) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>
          click me
        </button>
      </div>
      
    </div>
  )
};

export default Greetings;