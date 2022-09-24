import TagLine from "./TagLine";
import Image from "./Image";

import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section className={classes["welcome-container"]}>
      <TagLine />
      <Image />
    </section>
  );
};

export default Welcome;
