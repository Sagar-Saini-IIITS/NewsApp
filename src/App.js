import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [fcolor, setFcolor] = useState("black");
  const [bcolor, setBcolor] = useState("white");

  return (
    <div
      style={{
        color: `${fcolor}`,
        backgroundColor: `${bcolor}`,
        minHeight: "100vh",
      }}
    >
      <Router>
        <Navbar
          mode={mode}
          setMode={setMode}
          fcolor={fcolor}
          setBcolor={setBcolor}
          setFcolor={setFcolor}
        />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
                mode={mode}
                setMode={setMode}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
                mode={mode}
                setMode={setMode}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
                mode={mode}
                setMode={setMode}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
                mode={mode}
                setMode={setMode}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                category="health"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
                mode={mode}
                setMode={setMode}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
                mode={mode}
                setMode={setMode}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
                mode={mode}
                setMode={setMode}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/category/:cat"
            element={
              <News
                setProgress={setProgress}
                fcolor={fcolor}
                bcolor={bcolor}
                mode={mode}
                setMode={setMode}
                apiKey={apiKey}
                key="cat"
                pageSize={pageSize}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
  // }
};
export default App;
