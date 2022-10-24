import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showSushiInfo } from "../../store/actions";
import SushiInfo from "./SushiInfo";

const initialState = {
  type: "",
  name: "",
  recipe: "",
};

const SushiInfoContainer = () => {
  const { sushi } = useSelector((s) => s.sushiData);
  const { id } = useSelector((s) => s.sushiId);
  const { show } = useSelector((s) => s.sushiShow);
  const dispatch = useDispatch();

  const [sushiValue, setSushiValue] = useState(initialState);
  const { name, type, recipe } = sushiValue;

  useEffect(() => {
    if (show) {
      const singleSushi = sushi.find((item) => item.id === id);
      setSushiValue({ ...singleSushi });
    }
  }, [show]);

  const handleClick = () => {
    dispatch(showSushiInfo(false));
  };

  return (
    <SushiInfo
      show={show}
      type={type}
      name={name}
      recipe={recipe}
      handleClick={handleClick}
    />
  );
};

export default SushiInfoContainer;
