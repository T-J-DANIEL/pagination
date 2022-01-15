import { StyledButtonContainer } from "./styled/Buttons.styled"
const Buttons = ({prev,next,children}) =>{
    return (
      <StyledButtonContainer>
        <button onClick={prev}>Prev</button>
        <div>{children}</div>
        <button onClick={next}>Next</button>
      </StyledButtonContainer>
    )
}

export default Buttons