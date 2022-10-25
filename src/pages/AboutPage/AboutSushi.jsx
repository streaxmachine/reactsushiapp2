import React from "react";

const AboutSushi = (props) => {
  const { type, name, recipe, navigate } = props;

  return (
    <>
      <button
        className="btn-about-sushi button-32"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <ul className="about-sushi">
        <li className="about-sushi-text">type: {type}</li>
        <li className="about-sushi-text">name: {name}</li>
        <li className="about-sushi-text">recipe: {recipe}</li>
      </ul>
    </>
  );
};

export default AboutSushi;
