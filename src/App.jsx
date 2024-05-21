import "./App.css";
import TextFrom from "./components/TextFrom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("primary");
  const [bodyColor, setbodyColor] = useState("white");
  const [alert, setalert] = useState(null);

  const ShowAlert = (message) => {
    setalert({
      msg: message,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggle = () => {
    if (mode === "primary" && bodyColor === "white") {
      setmode("dark");
      document.body.style.backgroundColor = "dark";
      setbodyColor("dark");
      ShowAlert("Dark Mode enabled");
      document.title = "Text Editing-Dark";
    } else {
      setmode("primary");
      setbodyColor("white");
      ShowAlert("Light Mode enabled");
      document.title = "Text Editing-White";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggle} />
      <Alert alert={alert} />
      <br />
      <div className="mb-5">
        <TextFrom ShowAlert={ShowAlert} bodyColor={bodyColor} />
      </div>
    </>
  );
}

export default App;
