//function to split data into array chunks per page
//check total[0] length is less than 20 if so push item
//else unshift new array to total
const paginate = (data,itemsPerPage=10) => {
//   const itemsPerPage = 15
  return data.reduce(
    (total, input) => {
      total[0].length < itemsPerPage
        ? total[0].push(input)
        : total.unshift([input])
      return total
    },
    [[]]
  )
}

export { paginate }
