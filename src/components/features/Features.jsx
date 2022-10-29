import React from "react";
import classes from "./Features.module.css";
import FeatureList from "./FeatureList";

const Features = () => {
  return (
    <section id='features' className={classes.features}>
      <div className={`container ${classes.features__container}`}>
        <header>
          <h2 className='text__header'>What is Bits & Bytes?</h2>
        </header>
        <div>
          <FeatureList />
        </div>
      </div>
    </section>
  );
};

export default Features;
