export const FILTER_CHANGE = 'resume/FILTER_CHANGE'

export const handleChangeFilter = (payload) => ({
    type: FILTER_CHANGE,
    payload
})

const reducer = (prev = {}, action) => {
  const {type, payload} = action
  switch(type) {
    case FILTER_CHANGE: {
      return payload      
    }
    default:
      return prev
  }
}

export default reducer