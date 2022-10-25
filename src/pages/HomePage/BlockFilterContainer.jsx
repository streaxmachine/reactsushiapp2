import React from "react";
import { useState } from "react";
import BlockFilter from "./BlockFilter";

const BlockFilterContainer = ({ postQuery, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;

    setSearchParams({ search: query });
  };

  return (
    <BlockFilter
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      search={search}
    />
  );
};

export default BlockFilterContainer;
