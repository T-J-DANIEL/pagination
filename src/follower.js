const Follower = ({data}) =>{
const {login,avatar_url,html_url} = data
    return (
      <div className="card">
        <img src={avatar_url} alt="" />
        <h2>{login}</h2>
        <a href={html_url}>More Info...</a>
      </div>
    )
}

export default Follower