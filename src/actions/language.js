import { CHANGE_LANGUAGE }
  from '../constants'

export function changeLanguage(language) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: language
    })
  }
}
