import React from "react";

const BlockFilter = (props) => {
  const { handleSubmit, handleChange, search } = props;

  return (
    <form autoComplete="off" action="" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="search"
        name="search"
        placeholder="Search sushi..."
        value={search}
        onChange={handleChange}
      />
      <input className="search-btn button-32" type="submit" value="Search" />
    </form>
  );
};

export default BlockFilter;
