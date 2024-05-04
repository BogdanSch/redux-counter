import React from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice.js";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1); // Default increment amount is 1

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementAmount));
  };

  return (
    <div className="app__content">
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles["input-group"]}>
        <input
          className={`${styles.input}`}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
          type="number"
        />
        <button
          className={styles.button}
          aria-label="Increment by amount"
          onClick={handleIncrementByAmount}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}
