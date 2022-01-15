import styled from "styled-components"

const StyledFollower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40vw;
  max-width: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2em;
  & img {
    width: 40%;
  }
  & * {
    margin-bottom: 1em;
  }
`
export {StyledFollower}