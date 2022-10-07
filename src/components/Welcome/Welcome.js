import TagLine from "./TagLine";
import Image from "./Image";

import classes from "./Welcome.module.css";

const Welcome = (props) => {
  return (
    <section className={classes["welcome-container"]}>
      <TagLine onSignUp={props.onSignUp} />
      <Image />
    </section>
  );
};

export default Welcome;
