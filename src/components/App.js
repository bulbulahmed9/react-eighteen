import React, { useState, useEffect, startTransition, useDeferredValue } from "react";
import { staticData } from "./data";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // let newData = [];
    // for (let i = 0; i < 5000; i++) {
    //   newData.push({ name: `Mahmud ${i}`, email: `mahmud${i}@gmail.com` });
    // }

    // console.log("data", JSON.stringify(newData));

    setData(staticData);
  }, []);

  const filterData = (value) => {
    startTransition(() => {
      const regex = new RegExp(value.toLowerCase());
      let newDta = staticData?.filter(
        (item) =>
          regex.test(item?.name.toLowerCase()) ||
          regex.test(item?.email.toLowerCase())
      );
      setData(newDta);
    });
  };

  const [color, setColor] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  

  function handleClick() {
    setTimeout(() => {
        setColor((color) => !color); // react re-renders
        setClickCount((click) => click + 1);
      }, 2000);
  }

  const deferredValue = useDeferredValue(search, { timeoutMs: 5000 });


  console.log("Render")

  return (
    <div>
      <div>
        <button onClick={handleClick}>Change color</button>
        <h1 style={{ color: color ? "red" : "black" }}>Hello ,your click count is {clickCount}</h1>
      </div>
      deferredValue : {deferredValue}
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          filterData(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
