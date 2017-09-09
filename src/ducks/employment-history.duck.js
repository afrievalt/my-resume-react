export const EMPLOYMENT_HISTORY_REQUEST = 'resume/EMPLOYMENT_HISTORY_REQUEST'
export const EMPLOYMENT_HISTORY_SUCCESS = 'resume/EMPLOYMENT_HISTORY_SUCCESS'
export const EMPLOYMENT_HISTORY_FAIL = 'resume/EMPLOYMENT_HISTORY_FAIL'

const url = 'https://flower-nation.glitch.me/'

export const handleLoadEmploymentHistory = () => dispatch => {
  dispatch({type: EMPLOYMENT_HISTORY_REQUEST})
  fetch(url)
    .then((response) => response.json())
    .then(result => dispatch(handleLoadEmploymentHistorySuccess(result)))
    .catch(() => dispatch(handleLoadEmploymentHistoryFail()))   
}

const handleLoadEmploymentHistorySuccess = payload => ({type: EMPLOYMENT_HISTORY_SUCCESS, payload})
const handleLoadEmploymentHistoryFail = () => ({type: EMPLOYMENT_HISTORY_FAIL})

const reducer = (prev = {}, action) => {
  const {type, payload} = action
  switch (type) {
    case EMPLOYMENT_HISTORY_REQUEST:
      {
        return {}
      }
    case EMPLOYMENT_HISTORY_FAIL:
      {
        return {}
      }
    case EMPLOYMENT_HISTORY_SUCCESS:
      {
        return payload
      }
    default:
      return prev
  }
}

export default reducer