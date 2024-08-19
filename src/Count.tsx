import React from "react";
type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: (a: number, b: number) => String;
};
// interface IProps{
//     ""
// }
function Count({ count, setCount, total }: Props) {
  console.log(total(23, 44));
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

export default Count;
