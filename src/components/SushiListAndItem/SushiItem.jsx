import React from "react";

const SushiItem = (props) => {
  const {
    type,
    name,
    setCube = Function.prototype,
    recipe,
    children,
    handleClick,
    handleDelete,
    id,
  } = props;

  return (
    <>
      <span className="li-span" onMouseEnter={() => setCube(type)}>
        <div className="span-items">
          <ul className="span-items-list">
            <li>Type: {type}</li>
            <li>Name: {name}</li>
            <li className="span-items-list-recipe">Recipe: {recipe}</li>
          </ul>
          <div className="span-items-btn">
            {children}
            <button className="button-37" onClick={() => handleClick(id)}>
              check
            </button>
            <button className="button-24" onClick={() => handleDelete(id)}>
              delete
            </button>
          </div>
        </div>
      </span>
    </>
  );
};

export default SushiItem;
