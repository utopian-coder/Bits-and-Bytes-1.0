import React from "react";
import classes from "./FeatureCard.module.css";

const FeatureCard = (props) => {
  return (
    <div
      key={props.id}
      className={`${classes.feature__card__container} ${classes.feature__card}`}
    >
      <header>
        <h5>{props.heading}</h5>
      </header>
      <article>{props.description}</article>
    </div>
  );
};

export default FeatureCard;
