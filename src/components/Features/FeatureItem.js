import classes from "./FeatureItem.module.css";
import Card from "../UI/Card";

const FeatureItem = (props) => {
  return (
    <Card className={classes.container}>
      <li key={props.id} className={classes.feature_item}>
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </li>
    </Card>
  );
};

export default FeatureItem;
