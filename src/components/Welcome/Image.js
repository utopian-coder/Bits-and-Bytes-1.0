import LandingImg from "../../assets/landing.jpg";
import classes from "./Image.module.css";
const Image = () => {
  return <img className={classes.img} src={LandingImg} />;
};

export default Image;
