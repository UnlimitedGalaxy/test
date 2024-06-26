import { count } from 'console';
import { useEffect, useState } from 'react';

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("哈哈哈，useEffect 又执行了");
    const p = document.getElementById('count');
    console.log(p);
    debugger;
    return () => {
      console.log("看到我就知道执行了清除机制(～￣▽￣)～");
    };
  }, [count]);

  useEffect(() => {
    console.log('count2: ', count2);
    return () => {
      console.log('clear count2: ', count2);
    }
  }, [count2]);

  return (
    <div>
      <p id='count'>那啥，你点了我 {count} 次 ⏲️⏲️⏲️⏲️</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        你觉得你点击我之后会发生什么⛏️⛏️⛏️
      </button>
      <div>
        <button
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          {count2}
        </button>
      </div>

    </div>
  );
};

export default UseEffectDemo;