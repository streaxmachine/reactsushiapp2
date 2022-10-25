import React, { useState } from "react";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { Preloader } from "./Preloader";

const PreloaderContainer = () => {
  const { active } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (active === false) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [active]);

  return <Preloader loading={loading} />;
};
export default PreloaderContainer;
