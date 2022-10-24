import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadSushiStart } from "../store/actions";
import SushiItemContainer from "../components/SushiListAndItem/SushiItemContainer";
import SushiList from "../components/SushiListAndItem/SushiList";
import { Link, useSearchParams } from "react-router-dom";
import BlockFilter from "../components/HomePage/BlockFilter";
import HomePage from "../components/HomePage/HomePage";

const Home = ({ setCube }) => {
  const dispatch = useDispatch();
  const { sushi, loading } = useSelector((s) => s.sushiData);
  const [searchParams, setSearchParams] = useSearchParams();

  const postsQuery = searchParams.get("search") || "";

  useEffect(() => {
    dispatch(loadSushiStart());
  }, [dispatch]);

  return (
    <>
      <HomePage
        sushi={sushi}
        postsQuery={postsQuery}
        setCube={setCube}
        setSearchParams={setSearchParams}
        loading={loading}
      />
    </>
  );
};

export default Home;
