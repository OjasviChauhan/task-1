import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

function Counter() {
  const setCounter = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className={classes.counter}>
      <div className={classes.counter__button}>
        <button onClick={() => setCounter({ type: "increment" })}>
          Click to Increment
        </button>
      </div>
      <div className={classes.counter__count}>
        <h1> {counter} </h1>
      </div>
    </div>
  );
}

export default Counter;
