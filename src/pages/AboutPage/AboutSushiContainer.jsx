import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AboutSushi from "./AboutSushi";

const singleSushi = {
  type: "",
  name: "",
  recipe: "",
};

const AboutSushiContainer = () => {
  const [sushiValue, setValue] = useState(singleSushi);
  const { id } = useParams();
  const { sushi } = useSelector((s) => s.sushiData);
  const { type, name, recipe } = sushiValue;
  const navigate = useNavigate();

  useEffect(() => {
    const currentSushi = sushi.find((item) => item.id === Number(id));
    setValue({ ...currentSushi });
  }, [id]);

  return (
    <AboutSushi type={type} name={name} recipe={recipe} navigate={navigate} />
  );
};

export default AboutSushiContainer;
