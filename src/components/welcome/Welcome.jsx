import React from "react";
import Landing from "../../assets/landing3.jpg";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section id='welcome' className={classes.welcome}>
      <div className={`${classes.welcome__container} container`}>
        <div className={classes.tagline__container}>
          <h1 className='text__header'>Learn To Code Effectively</h1>
          <p className={classes.paragraph__pos}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            consequatur possimus dicta eos natus.
          </p>
          <button href='#' className='btn btn__primary'>
            Sign Up
          </button>
        </div>

        <div className={classes.image__container}>
          <img src={Landing} alt='landing-img' className={classes.img} />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
