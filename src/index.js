import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import { GlobalStyles } from "./components/GlobalStyles";
import reportWebVitals from "./reportWebVitals";

render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
