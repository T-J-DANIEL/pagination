import { useState, useEffect } from "react"
import { paginate } from "./utils"
const url = "https://api.github.com/users/john-smilga/followers?per_page=100"

const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // get data then paginate it
    setData(paginate(data))
    setLoading(false)
    // console.log(loading?loading:data)
  }

  useEffect(() => {
    getData()
  }, [])

  return { loading, data }
}
export default useFetch