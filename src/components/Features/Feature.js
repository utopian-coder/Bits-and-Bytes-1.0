import classes from "./Feature.module.css";
import FeatureList from "./FeatureList";

const Feature = () => {
  return (
    <section className={classes.feature_container}>
      <h1>What is Bits &amp; Bytes?</h1>
      <FeatureList />
    </section>
  );
};

export default Feature;
