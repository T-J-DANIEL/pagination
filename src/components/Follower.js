import { StyledFollower } from "./styled/Follower.styled"

const Follower = ({data}) =>{
const {login,avatar_url,html_url} = data
    return (
      <StyledFollower>
        <img src={avatar_url} alt="" />
        <h2>{login}</h2>
        <a href={html_url}>More Info...</a>
      </StyledFollower>
    )
}

export default Follower