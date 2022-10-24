import React from "react";
import SushiItemContainer from "../SushiListAndItem/SushiItemContainer";
import SushiList from "../SushiListAndItem/SushiList";
import { Link } from "react-router-dom";
import BlockFilter from "./BlockFilter";

const HomePage = (props) => {
  const { sushi, postsQuery, setCube, setSearchParams, loading } = props;

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Link to={`/addSushi`}>
        <button className="btn">addSushi</button>
      </Link>
      <BlockFilter postQuery={postsQuery} setSearchParams={setSearchParams} />

      <SushiList>
        {sushi &&
          sushi
            .filter(
              (sushiItem) =>
                sushiItem.type
                  .toLowerCase()
                  .includes(postsQuery.toLowerCase()) ||
                sushiItem.name.toLowerCase().includes(postsQuery.toLowerCase())
            )
            .map((item, index) => (
              <SushiItemContainer
                key={index}
                name={item.name}
                type={item.type}
                recipe={item.recipe}
                id={item.id}
                setCube={setCube}
              >
                <Link to={`/editSushi/${item.id}`}>
                  <button className="button-37">edit</button>
                </Link>
                <Link to={`/aboutSushi/${item.id}`}>
                  <button className="button-37">fullInfo</button>
                </Link>
              </SushiItemContainer>
            ))}
      </SushiList>
    </>
  );
};

export default HomePage;
