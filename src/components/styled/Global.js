import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: monospace;
} 
img{
  width: 100%;
  object-fit: cover;
}
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:2em;
}
`

export default GlobalStyles
