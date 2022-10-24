import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteSushiStart,
  getSushiId,
  showSushiInfo,
} from "../../store/actions";
import SushiItem from "./SushiItem";

const SushiItemContainer = (props) => {
  const {
    name,
    type,
    recipe,
    setCube = Function.prototype,
    id,
    children,
  } = props;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteSushiStart(id));
  };

  const handleClick = (id) => {
    dispatch(getSushiId(id));
    dispatch(showSushiInfo(true));
  };

  return (
    <SushiItem
      name={name}
      type={type}
      recipe={recipe}
      setCube={setCube}
      id={id}
      children={children}
      handleClick={handleClick}
      handleDelete={handleDelete}
    />
  );
};

export default SushiItemContainer;
