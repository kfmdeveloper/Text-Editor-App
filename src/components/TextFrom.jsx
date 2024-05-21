import { React, useState } from "react";

const TextFrom = (props) => {
  var [Text, setText] = useState("");

  const [copytext, setcopytext] = useState("Copy");
  const upercase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.ShowAlert("Converted to Uppercase");
  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.ShowAlert("Text Cleared");
  };
  const handlchange = (event) => {
    setText(event.target.value);
  };
  const handlyExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.ShowAlert("Extra Spaces has been removed from your Text!");
  };
  const CopyText = () => {
    let Text = document.querySelector("textArea");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    document.getSelection().removeAllRanges();
    props.ShowAlert("Copied to Clipboard");
    setcopytext("Copied");
    setTimeout(() => {
      setcopytext("Copy");
    }, 2000);
  };

  return (
    <div className={`container bg-${props.bodyColor}`}>
      <h1
        className={`text-${
          props.mode === "primary" ? "dark" : "primary"
        } col-lg-7 offset-lg-2`}
      >
        {
          Text.split(/\s+/).filter((Element) => {
            return Element.length != 0;
          }).length
        }{" "}
        words {Text.length} Characters
      </h1>
      <div className="actions row  col-lg-7 offset-lg-2">
        <textarea
          placeholder="Enter Text here"
          name=""
          id="textArea"
          onChange={handlchange}
          cols="75"
          rows="5"
          value={Text}
          className="mt-2 border-bottom"
        ></textarea>
      </div>
      <br />
      <br />
      <div className="actions row  col-lg-11 col-sm-12  offset-sm-3 offset-lg-2">
        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            width: "9rem",
            borderRadius: "40px",
            color: "white",
            padding: "5px",
          }}
          onClick={upercase}
          className="m-2 my-1   "
          disabled={Text.length === 0}
        >
          UpperCase
        </button>
        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            width: "9rem",
            borderRadius: "40px",
            color: "white",
            padding: "5px",
          }}
          className="m-2 my-1  "
          onClick={handlyExtraSpaces}
          disabled={Text.length === 0}
        >
          Remove Spaces
        </button>
        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            width: "9rem",
            borderRadius: "40px",
            color: "white",
            padding: "5px",
          }}
          className="m-2 my-1   "
          onClick={clear}
          disabled={Text.length === 0}
        >
          Clear
        </button>
        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            width: "9rem",
            borderRadius: "40px",
            color: "white",
            padding: "5px",
          }}
          className="m-2 my-1  "
          onClick={CopyText}
          disabled={Text.length === 0}
        >
          {copytext}
        </button>
      </div>
    </div>
  );
};

export default TextFrom;
