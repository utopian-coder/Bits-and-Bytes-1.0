import classes from "./TagLine.module.css";

const TagLine = () => {
  return (
    <div className={classes.tag}>
      <p>BE CONSISTENT TO ACHIEVE A TARGET</p>;
      <h1>Learn to Code effectively.</h1>;
      <p>
        Boost your problem solving skills with consistent practice, and our
        guidance.
      </p>
      <button>Sign Up</button>
      <a href='#'>Get started </a>
    </div>
  );
};

export default TagLine;
