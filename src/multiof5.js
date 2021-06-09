import React, { useState, useEffect } from "react";

function MultipleOf5 () {
  const [values, setvalues] = useState([]);
  useEffect(() => {
    let arr = Array.from({ length: 100 / 5 }, (c, i) => i * 5);
    setvalues(arr);
  },[]);
  return (
    <div>
      {values.map(item => (
          <li key={item} className={item%10? "white" : "red"}>
          {item}
          </li>
        ))}
    </div>
  );
};

export default MultipleOf5;