import FeatureItem from "./FeatureItem";
import classes from "./FeatureList.module.css";

const DUMMY_DATA = [
  { id: "item1", heading: "nothing", description: "lorem impsum" },
  { id: "item2", heading: "nothing", description: "lorem impsum" },
  { id: "item3", heading: "nothing", description: "lorem impsum" },
  { id: "item4", heading: "nothing", description: "lorem impsum" },
  { id: "item5", heading: "nothing", description: "lorem impsum" },
  { id: "item6", heading: "nothing", description: "lorem impsum" },
];

const FeatureList = () => {
  return (
    <div>
      <ul className={classes.feature_list}>
        {DUMMY_DATA.map((data) => (
          <FeatureItem
            id={data.id}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
