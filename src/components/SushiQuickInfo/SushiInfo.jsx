import React from "react";

const SushiInfo = (props) => {
  const { show, type, name, recipe, handleClick } = props;

  return (
    <>
      {show ? (
        <div className="sushi-info">
          <>
            <div className="sushi-info-wrapper">
              <div className="sushi-info-container">
                <ul className="sushi-info-list">
                  <li className="sushi-info-item">Type: {type}</li>
                  <li className="sushi-info-item">Name: {name}</li>
                  <li className="sushi-info-item">Recipe: {recipe}</li>
                </ul>
                <div className="sushi-info-btn ">
                  <button className="button-32" onClick={handleClick}>
                    close
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      ) : null}
    </>
  );
};

export default SushiInfo;
