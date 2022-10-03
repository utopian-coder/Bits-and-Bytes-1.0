import classes from "./TagLine.module.css";

const TagLine = () => {
  return (
    <div className={classes.tag}>
      <h1>Learn to Code effectively.</h1>
      <div className={classes["attract-lines"]}>
        <p>Good resources build consistency.</p>
        <p>Give us a chance and fall in love with coding.</p>
      </div>
      <button className={classes.btn}>Sign Up</button>
      <a href='#'>Get started </a>
    </div>
  );
};

export default TagLine;
