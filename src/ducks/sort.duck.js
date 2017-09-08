export const SORT_CHANGE = 'resume/SORT_CHANGE'

export const handleChangeSort = (payload) => ({
    type: SORT_CHANGE,
    payload
})

const reducer = (prev = {}, action) => {
  const {type, payload} = action
  switch(type) {
    case SORT_CHANGE: {
      return payload      
    }
    default:
      return prev
  }
}

export default reducer