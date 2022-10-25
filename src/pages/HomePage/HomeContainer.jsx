import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadSushiStart } from "../../store/actions";
import { useSearchParams } from "react-router-dom";
import Home from "./Home";

const HomeContainer = ({ setCube }) => {
  const dispatch = useDispatch();
  const { sushi, loading } = useSelector((s) => s.sushiData);
  const [searchParams, setSearchParams] = useSearchParams();

  const postsQuery = searchParams.get("search") || "";

  useEffect(() => {
    dispatch(loadSushiStart());
  }, [dispatch]);

  return (
    <>
      <Home
        sushi={sushi}
        postsQuery={postsQuery}
        setCube={setCube}
        setSearchParams={setSearchParams}
        loading={loading}
      />
    </>
  );
};

export default HomeContainer;
