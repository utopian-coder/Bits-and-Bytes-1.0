import React from "react";
import FeatureCard from "./FeatureCard";
import classes from "./FeatureList.module.css";

const FEATURES = [
  {
    id: "" + Math.random(),
    heading: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo distinctio molestiae dolorem vel autem fugiat earum harum nesciunt. Ab, doloribus?",
  },
  {
    id: "" + Math.random(),
    heading: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo distinctio molestiae dolorem vel autem fugiat earum harum nesciunt. Ab, doloribus?",
  },
  {
    id: "" + Math.random(),
    heading: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo distinctio molestiae dolorem vel autem fugiat earum harum nesciunt. Ab, doloribus?",
  },
  {
    id: "" + Math.random(),
    heading: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo distinctio molestiae dolorem vel autem fugiat earum harum nesciunt. Ab, doloribus?",
  },
  {
    id: "" + Math.random(),
    heading: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo distinctio molestiae dolorem vel autem fugiat earum harum nesciunt. Ab, doloribus?",
  },
  {
    id: "" + Math.random(),
    heading: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo distinctio molestiae dolorem vel autem fugiat earum harum nesciunt. Ab, doloribus?",
  },
];

const FeatureList = () => {
  return (
    <ul className={classes.featurelist__container}>
      {FEATURES.map((item) => (
        <FeatureCard
          key={item.id}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default FeatureList;
