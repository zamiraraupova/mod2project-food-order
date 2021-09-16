//import axios from 'axios'
// export const GET_URL_START = 'GET_URL_START'
// export const GET_URL_SUCCESS = 'GET_URL_SUCCESS'
// export const GET_URL_FAIL = 'GET_URL_FAIL'


// this is just syntax for dispatch
//const fetchGIF = () => dispatch => {

 // dispatch({ type: GET_URL_START })
// another way to write dispatch
// const fetchGIF = () => {
//     return (dispatch) => {
//       dispatch({ type: GET_URL_START })

//   axios.get('https://api.giphy.com/v1/gifs/random?api_key=I0ChPSCl9u7jYsGOiANpvQKpuwMISyNP')
//     .then(response => dispatch({
//       payload: response.data.data.fixed_height_downsampled_url,
//       type: GET_URL_SUCCESS
//     }))
//     .catch(error => dispatch({
//       payload: error.message,
//       type: GET_URL_FAIL
//     }))
// }

// const [menuData, setMenuData] = useState(menuList)
// const [cartItems, setCartItems] = useState([])
//console.log(cartItems,"this is our cartItems array")




//we are creating an action creator here so it will connect to "connect" in MenuItems.js
export const addToCart = () => {
    return {
        type: "ADD_TO_CART",
        payload: "CLICK"
    }
}
export const removeFromCart = () => {
    return {
        type: "REMOVE_FROM_CART",
        payload: "CLICK"
    }
}






//export default fetchGIF