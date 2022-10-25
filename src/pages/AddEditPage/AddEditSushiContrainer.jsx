import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addSushiStart, updateSushiStart } from "../../store/actions";
import AddEditSushi from "./AddEditSushi";

const initialState = {
  type: "Nigiri",
  name: "",
  recipe: "",
};

const AddEditSushiContrainer = ({ setCube }) => {
  const [formValue, setValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { type, name, recipe } = formValue;
  const { id } = useParams();
  const { sushi } = useSelector((s) => s.sushiData);

  const [nameError, setNameError] = useState("field cannot be empty");
  const [recipeError, setRecipeError] = useState("field cannot be empty");
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      setRecipeError("");
      setNameError("");
      const singleSushi = sushi.find((item) => item.id === Number(id));
      setValue({ ...singleSushi });
    } else {
      setEditMode(false);
      setValue({ ...initialState });
    }
  }, [id, sushi]);

  useEffect(() => {
    if (nameError || recipeError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }

    if (editMode) {
      if (nameError || recipeError) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    }
  }, [nameError, recipeError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && name && recipe) {
      if (!editMode) {
        dispatch(addSushiStart(formValue));
        setTimeout(() => {
          goBack();
        }, 500);
      } else {
        dispatch(updateSushiStart({ id, formValue }));
        setTimeout(() => {
          goBack();
          setEditMode(false);
        }, 500);
      }
    }
  };

  const handleRecipeChange = (e) => {
    const { name, value } = e.target;

    if (name === "recipe" && value.length < 15) {
      setRecipeError("Recipe should contain at least 15 symbols");
      if (!value) {
        setRecipeError("field cannot be empty");
      }
    } else {
      setRecipeError("");
    }

    setValue({ ...formValue, [name]: value });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.length <= 3) {
      setNameError("Sushi`s name should contain at least 3 symbols");
      if (!value) {
        setNameError("field cannot be empty");
      }
    } else {
      setNameError("");
    }

    setValue({ ...formValue, [name]: value });
  };

  const handleTypeChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (e.target.name === "type") {
      setCube(value);
    }
    setValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <AddEditSushi
        type={type}
        handleTypeChange={handleTypeChange}
        nameError={nameError}
        name={name}
        recipe={recipe}
        handleRecipeChange={handleRecipeChange}
        handleNameChange={handleNameChange}
        recipeError={recipeError}
        editMode={editMode}
        formValid={formValid}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AddEditSushiContrainer;
