export const getAllIds = ({employmentHistory_byId, sortBy, filter}) => {
	const keys = Object.keys(employmentHistory_byId)

	return keys
		.filter(nameTitleFilterFunction(employmentHistory_byId, filter))
		.sort(sortByKeyFunction(employmentHistory_byId, sortBy))
}

const nameTitleFilterFunction = (employmentHistory_byId, filter) =>
{
	const regEx = new RegExp(`(${filter})`, "gi")
  
	return key => 
		!filter //true if no filter 
				|| employmentHistory_byId[key].name.match(regEx)
				|| employmentHistory_byId[key].title.match(regEx)
				|| employmentHistory_byId[key].skills.match(regEx)
}
const sortByKeyFunction = (employmentHistory_byId, sortBy) =>
	(key1, key2) => {
		const value1 = employmentHistory_byId[key1][sortBy]
		const value2 = employmentHistory_byId[key2][sortBy]
		const accedingResult = value1 > value2 ? 1 : -1 
		const isDescending = sortBy === "endDate" 
		return isDescending ? accedingResult * -1 : accedingResult
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
