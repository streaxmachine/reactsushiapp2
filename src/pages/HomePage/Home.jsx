import React from "react";
import { Link } from "react-router-dom";
import BlockFilterContainer from "./BlockFilterContainer";
import SushiList from "../../components/SushiListAndItem/SushiList";
import SushiItemContainer from "../../components/SushiListAndItem/SushiItemContainer";

const Home = (props) => {
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
      <BlockFilterContainer
        postQuery={postsQuery}
        setSearchParams={setSearchParams}
      />
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

export default Home;
