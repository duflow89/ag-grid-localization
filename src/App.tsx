import { Grid } from "./Grid";
import { useState } from "react";
import { LANGUAGE_OPTIONS } from "./Transaltions";

function App() {
  const [language, setLanguage] = useState<string>(LANGUAGE_OPTIONS.EN);
  type StyleType = Record<string, string>;
  const appStyles: StyleType = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  };
  const buttonSpanStyles: StyleType = { margin: "7px" };
  const buttonStyles: StyleType = {
    borderRadius: "6px",
    border: "1px solid #b2b8ad",
    display: "inline-block",
    cursor: "pointer",
    fontFamily: "Arial",
    fontSize: "15px",
    padding: "6px 20px",
    marginRight: "3px"
  };
  return (
    <div className="App" style={appStyles}>
      <span style={buttonSpanStyles}>
        <label style={{ fontFamily: "Arial" }}>Translate to: </label>
        <button
          style={buttonStyles}
          onClick={() => setLanguage(LANGUAGE_OPTIONS.EN)}
        >
          English
        </button>
        <button
          style={buttonStyles}
          onClick={() => setLanguage(LANGUAGE_OPTIONS.ES)}
        >
          Spanish
        </button>
        <button
          style={buttonStyles}
          onClick={() => setLanguage(LANGUAGE_OPTIONS.DE)}
        >
          German
        </button>
      </span>
      <Grid language={language} />
    </div>
  );
}

export { App };
