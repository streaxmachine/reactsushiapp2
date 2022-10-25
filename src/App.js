import { Scene } from "./components/Layot3d/Scene";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreloaderContainer from "./components/Preloader/PreloaderContainer";
import AboutSushiContainer from "./pages/AboutPage/AboutSushiContainer";
import SushiInfoContainer from "./components/SushiQuickInfo/SushiInfoContainer";
import AddEditSushiContainer from "./pages/AddEditPage/AddEditSushiContainer";
import HomeContainer from "./pages/HomePage/HomeContainer";

function App() {
  const [cube, setCube] = useState("");

  return (
    <>
      <PreloaderContainer />
      <main className="main">
        <Scene cube={cube} />
        <div className="overlay">
          <SushiInfoContainer />
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={<HomeContainer setCube={setCube} />}
              />
              <Route
                path="/addSushi"
                element={<AddEditSushiContainer setCube={setCube} />}
              />
              <Route
                path="/editSushi/:id"
                element={<AddEditSushiContainer setCube={setCube} />}
              />
              <Route path="/aboutSushi/:id" element={<AboutSushiContainer />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </>
  );
}

export default App;
