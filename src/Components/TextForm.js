import React, { useState } from "react";

export default function TextForm(props) {
  // =========converting to Uppercase=======
  const upperCaseFunc = () => {
    setCount(count + 1);
    let tempText = text;
    setText(tempText.toUpperCase());
    props.setAlertFunc("Converted to UpperCase", "Success");
  };

  // =========converting to lowercase=======
  const lowerCaseFunc = () => {
    let tempText = text;
    setText(tempText.toLowerCase());
    props.setAlertFunc("Converted to LowerCase", "Success");
  };

  // =========converting to sentenceCaseFunc=======
  const sentenceCaseFunc = () => {
    let tempText = text;
    let tempTextArr = tempText.split(/\.(?:\s*)?/g);
    let newTempText = "";
    for (const itr of tempTextArr) {
      let char1 = itr.charAt(0).toUpperCase();
      let char2 = itr.slice(1);
      let char3 = char1 + char2 + ". ";
      newTempText += char3;
    }
    const regex = /(\.\s)+/g; // Matches two or more consecutive periods+single space
    newTempText = newTempText.replace(regex, '. ').trimEnd();
    setText(newTempText);
    props.setAlertFunc("Converted to SentenceCase", "Success");
  };

  // =========copyFunc=======
  const copyFunc = () => {
    navigator.clipboard.writeText(text);
    props.setAlertFunc("Copied to Clipboard", "Success");
  };

  // =========clearSpacesFunc=======
  const clearSpacesFunc = () => {
    let tempText2 = text;
    let tempText = tempText2.trim().split(/[ ]+/);
    setText(tempText.join(" "));
    props.setAlertFunc("Extra Spaces Cleared", "Success");
  };

  // =========clearFunc=======
  const clearFunc = () => {
    setText("");
    setOriginalText("");
    setCount(0);
    props.setAlertFunc("Cleared", "Success");
  };

  // =========resetFunc=======
  const resetFunc = () => {
    setText(originalText);
    props.setAlertFunc("Text Reseted to Original State", "Success");
  };

  // ========onChange============
  const onChangeHandle = (event) => {
    // console.log("onChangeHandle Function fired...");
    setText(event.target.value);
    if (originalText === "" || count === 0) {
      setOriginalText(event.target.value);
      // console.log(event.target.value);
    }
  };

  // ========using useState=========
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [originalText, setOriginalText] = useState("");

  //=========variables============
  const wordLength = text.trim().split(/[ \n]+/).length;
  const charLength = text.trim().split(/[ \n]+/).join("").length;
  
  return (
    <>
      <div className="container">
        <h2>{props.title}</h2>
        <h6>{props.description}</h6>
        <div className="my-3">
          <textarea
            className="form-control"
            id="input-box"
            rows="8"
            value={text}
            onChange={onChangeHandle}
            placeholder="write here..."
          ></textarea>
        </div>

        <button disabled={charLength===0} className="btn btn-primary mx-1 my-1" onClick={upperCaseFunc}>
          UpperCase
        </button>
        <button disabled={charLength===0} className="btn btn-primary mx-1 my-1" onClick={lowerCaseFunc}>
          lowerCase
        </button>
        <button disabled={charLength===0}
          className="btn btn-primary mx-1 my-1"
          onClick={sentenceCaseFunc}
        >
          SentenceCase
        </button>
        <button disabled={charLength===0} className="btn btn-success mx-1 my-1" onClick={copyFunc}>
          Copy To ClipBoard
        </button>
        <button disabled={charLength===0} className="btn btn-success mx-1 my-1" onClick={clearSpacesFunc}>
          Clear Extra Spaces
        </button>
        <button disabled={charLength===0} className="btn btn-secondary mx-1 my-1" onClick={clearFunc}>
          Clear
        </button>
        <button disabled={charLength===0} className="btn btn-secondary mx-1 my-1" onClick={resetFunc}>
          Reset Text
        </button>
      </div>

      <div className="container my-3">
        <h3>Yout Text Summary</h3>
        <p>
          {text !== "" && charLength!==0 ? wordLength : 0} words, {charLength} character, {text.length-charLength} spaces, total length {text.length}
        </p>

        <p>
          {0.008 * (text !== "" && charLength!==0 ? wordLength : 0)} Minutes, will take to read
          this
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Write something to preview...'}</p>
      </div>
    </>
  );
}
