import { Scene } from "./components/Layot3d/Scene";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Preloader from "./pages/Preloader";
import AboutSushi from "./pages/AboutSushi";
import SushiInfoContainer from "./components/SushiQuickInfo/SushiInfoContainer";
import AddEditSushiContrainer from "./pages/AddEditSushiContrainer";

function App() {
  const [cube, setCube] = useState("");

  return (
    <>
      <Preloader />
      <main className="main">
        <Scene cube={cube} />
        <div className="overlay">
          <SushiInfoContainer />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home setCube={setCube} />} />
              <Route
                path="/addSushi"
                element={<AddEditSushiContrainer setCube={setCube} />}
              />
              <Route
                path="/editSushi/:id"
                element={<AddEditSushiContrainer setCube={setCube} />}
              />
              <Route path="/aboutSushi/:id" element={<AboutSushi />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </>
  );
}

export default App;
