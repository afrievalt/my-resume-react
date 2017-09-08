


export const getAllIds = ({employmentHistory_byId, sortBy, filter}) => {
  const sortByKeyFunction = (key1, key2) => 
      (employmentHistory_byId[key1][sortBy] < employmentHistory_byId[key2][sortBy]) 
        ? 1 
        : -1 //note, this sort assumes no equal values
  
  const regEx = new RegExp(`(${filter})`, 'gi')
  const nameTitleFilterFunction = key => 
    !filter //true if no filter 
    || employmentHistory_byId[key].name.match(regEx)
    || employmentHistory_byId[key].title.match(regEx)
    || employmentHistory_byId[key].skills.match(regEx)
  
  const acceding = sortBy !== 'endDate' 
  const keys = Object.keys(employmentHistory_byId)

  const result = keys
    .filter(nameTitleFilterFunction)
    .sort(sortByKeyFunction)
  return acceding ? result.reverse() : result
}

export const getEmploymentHistoryList = state => {
  const {employmentHistory_byId} = state
  const mapRow = rowId => {
    const {dates: secondaryText, title, name, img} = employmentHistory_byId[rowId]
    const primaryText = `${name} - ${title}`
    return {
      key: rowId,
      primaryText,
      secondaryText,
      img  
    }
  }
  return getAllIds(state).map(mapRow)
}
