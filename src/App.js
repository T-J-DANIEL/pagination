import { useState } from "react"
import useFetch from "./useFetch"
import Follower from "./components/Follower"
import { Container } from "./components/styled/Container.styled"
import GlobalStyles from "./components/styled/Global"
import Buttons from "./components/Buttons"
function App() {
  const [page, setPage] = useState(0)
  const { loading, data } = useFetch()
  const nextPage = () => {
    page === data.length - 1 ? setPage(0) : setPage((prevPage) => prevPage + 1)
  }
  const prevPage = () => {
    page === 0 ? setPage(data.length - 1) : setPage((prevPage) => prevPage - 1)
  }
  //fetch the data then take data and split into pages then display data
  console.log(data)
  return (
    <main>
      <GlobalStyles />
      <h1>Pagination</h1>
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data[page].map((item) => <Follower data={item} />)
        )}
          </Container>
        <Buttons prev={prevPage} next={nextPage}>
          {loading
            ? "Loading"
            : data.map((_, index) => (
              <button onClick={() => setPage(index)}>{index}</button>
              ))}
          
        </Buttons>
              <h3>Page no: {page}</h3>
    </main>
  )
}

export default App
