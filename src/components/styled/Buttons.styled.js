import styled from "styled-components"

const StyledButtonContainer = styled.div`

    width:100%;
    max-width:700px;
    display:flex;
    margin:2em 0 1em;
    justify-content:space-around;
    *{
        text-align:center;
    }

    button{
        padding:.4em .2em;
    }
    div{
        
        width:60%;
        display:flex;
        justify-content:space-around;
    }
    div button{
        padding:.4em 1em;
        margin:0 .1em;
    }
`

export { StyledButtonContainer }