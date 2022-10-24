import React from "react";
import { Link } from "react-router-dom";

const AddEditSushi = (props) => {
  const {
    type,
    handleTypeChange = Function.prototype,
    nameError,
    name,
    recipe,
    handleRecipeChange = Function.prototype,
    handleNameChange = Function.prototype,
    recipeError,
    editMode,
    formValid,
    handleSubmit = Function.prototype,
  } = props;

  return (
    <>
      <form action="">
        <div className="form-div">
          Choose type
          <select
            style={{ marginBottom: "10px", marginTop: "10px" }}
            className="select"
            value={type}
            name="type"
            onChange={handleTypeChange}
          >
            <option value="Nigiri">Nigiri</option>
            <option value="Uramaki">Uramaki</option>
            <option value="Gunkan maki">Gunkan maki</option>
          </select>
          <label htmlFor="name">Enter sushi name: </label>
          {<div className="error-text">{nameError}</div>}
          <input
            style={{
              marginBottom: "20px",
              border: "solid 1px white",
              borderRadius: "5px",
              height: "20px",
              marginTop: "10px",
            }}
            type="text"
            name="name"
            value={name || ""}
            required
            onChange={handleNameChange}
          />
          Enter recipe
          <textarea
            name="recipe"
            cols="30"
            className="recipe-textarea"
            rows="10"
            value={recipe || ""}
            onChange={handleRecipeChange}
          ></textarea>
          {<div className="error-text">{recipeError}</div>}
          <input
            type="submit"
            className="button-32"
            style={{ backgroundColor: "rgb(25, 189, 25)" }}
            value={!editMode ? "Add" : "Edit"}
            disabled={!formValid}
            onClick={handleSubmit}
          />
          <Link to={"/"}>
            <button className="button-32"> Cancel </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddEditSushi;
