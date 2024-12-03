import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const setAlertFunc = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light" || mode === "success" || mode === "danger") {
      setMode("dark");
      setTheme("dark");
      document.body.style.backgroundColor = "#07072d";
      document.body.style.color = "white";
      setAlertFunc("Dark-Mode Enabled", "Success");
      // setInterval(() => {
      //   document.title = 'Text-Utils : Dark Mode'
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Text-Utils : Virus Alert'
      // }, 700);
    } else {
      setMode("light");
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setAlertFunc("Light-Mode Enabled", "Success");
    }
  };
  const toggleDarkMode = () => {
    setTheme("dark");
    setMode("dark");
    document.body.style.backgroundColor = "#07072d";
    document.body.style.color = "white";
    setAlertFunc("Dark-Mode Enabled", "Success");
  };
  const toggleGreenMode = () => {
    setTheme("success");
    document.body.style.backgroundColor = "#b0cf98";
    document.body.style.color = "white";
    setAlertFunc("Green-Mode Enabled", "Success");
  };
  const togglePinkMode = () => {
    setTheme("danger");
    document.body.style.backgroundColor = "#ff7474";
    document.body.style.color = "white";
    setAlertFunc("Pink-Mode Enabled", "Success");
  };
  const toggleLightMode = () => {
    setTheme("light");
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    setAlertFunc("Light-Mode Enabled", "Success");
  };
  return (
    // <Router>
      <>
        <div className="container">
        {/* <Navbar/> */}
        <Navbar
          title="Text-Utils"
          about="About"
          mode={mode}
          theme={theme}
          toggleMode={toggleMode}
          toggleGreenMode={toggleGreenMode}
          togglePinkMode={togglePinkMode}
          toggleLightMode={toggleLightMode}
          toggleDarkMode={toggleDarkMode}
        />
          <Alert alert={alert} />
          {/* <About title="About Us" mode={mode} theme={theme}/> */}
          <TextForm
                  title="Try Text-Utils"
                  description = "Word Counter | Charcter Counter | Remove Extra Spaces etc..."
                  setAlertFunc={setAlertFunc}
                />
          {/* <Routes> */}
            {/* Define your routes using <Route> */}
            {/* <Route
              exact path="/"
              element={
                <TextForm
                  title="Try Text-Utils"
                  description = "Word Counter | Charcter Counter | Remove Extra Spaces etc..."
                  setAlertFunc={setAlertFunc}
                />
              }
            /> */}
            {/* <Route exact path="/about" element={<About title="About Us" mode={mode} theme={theme}/>} /> */}
            {/* Add more routes as needed */}
          {/* </Routes> */}
        </div>
      </>
    // </Router>
  );
}

export default App;
