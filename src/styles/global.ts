import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  --webkit-smoothing: antialiased;
  

  body {
    background: ${(props) => props.theme["white-background"]};
  }

  button, input {
    border: 0;
    outline: none;
  } 

}
`