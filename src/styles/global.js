import { createGlobalStyle } from "styled-components";
import { RobotoFont } from "./Fonts";

export default createGlobalStyle`
  ${RobotoFont}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, input, button, textarea {
    font-family: "Roboto Slab", sans-serif;
  }
`;