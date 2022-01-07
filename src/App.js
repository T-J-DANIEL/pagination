import { useState } from "react"
import useFetch from "./useFetch"
import Follower from "./follower"
function App() {
  const [page, setPage] = useState(0)
  const { loading, data } = useFetch()
  const nextPage = () =>{
    page===data.length-1?setPage(0):setPage(prevPage=>prevPage+1)
  }
  const prevPage = () =>{
    page===0?setPage(data.length-1):setPage(prevPage=>prevPage-1)
  }
  //fetch the data then take data and split into pages then display data
  console.log(data)
  return (
    <main className="App">
      <h1>Pagination</h1>
      <div className="followers-container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data[page].map((item) => <Follower data={item} />)
        )}
      </div>
      <div className="page-buttons">
        <button onClick={prevPage}>Prev</button>
        {loading
          ? "Loading"
          : data.map((_, index) => (
              <button onClick={() => setPage(index)}>{index}</button>
            ))}
        <button className="next" onClick={nextPage}>
          Next
        </button>
        <h3>Page no: {page}</h3>
      </div>
    </main>
  )
}

export default App
