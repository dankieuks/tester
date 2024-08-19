import { useEffect, useState } from "react";

import "./App.css";
import Count from "./Count.tsx";

type People = {
  name: string;
  age: number;
  locations?: string | number;
};

interface IEmployee extends People {
  job: string;
  degree: string;
}

function App() {
  const [count, setCount] = useState<number>(0);

  function total(number1: number, number2: number): string {
    return String(number1 + number2);
  }

  const employee: IEmployee = {
    job: "cxv",
    degree: "cv",
    name: "sdfds",
    age: 18,
  };

  return (
    <>
      <Count count={count} setCount={setCount} total={total} />
    </>
  );
}

export default App;
