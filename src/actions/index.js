import axios from 'axios'
export const GET_URL_START = 'GET_URL_START'
export const GET_URL_SUCCESS = 'GET_URL_SUCCESS'
export const GET_URL_FAIL = 'GET_URL_FAIL'


// this is just syntax for dispatch
const fetchGIF = () => dispatch => {

  dispatch({ type: GET_URL_START })
// another way to write dispatch
// const fetchGIF = () => {
//     return (dispatch) => {
//       dispatch({ type: GET_URL_START })


  // ajax call
  // you can only use await inside async functions
  // axios syntax with http request
  // in axios you no longer have to use json() to make the response readable because it does that for us under the hood - thank you axios

  // await is replacing .then() aka our thenables
  axios.get('https://api.giphy.com/v1/gifs/random?api_key=I0ChPSCl9u7jYsGOiANpvQKpuwMISyNP')
    .then(response => dispatch({
      payload: response.data.data.fixed_height_downsampled_url,
      type: GET_URL_SUCCESS
    }))
    .catch(error => dispatch({
      payload: error.message,
      type: GET_URL_FAIL
    }))
}
export default fetchGIF