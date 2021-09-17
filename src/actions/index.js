//import axios from 'axios'
// export const GET_URL_START = 'GET_URL_START'
// export const GET_URL_SUCCESS = 'GET_URL_SUCCESS'
// export const GET_URL_FAIL = 'GET_URL_FAIL'

//import ShoppingCart from "../pages/ShoppingCart"


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



export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
//we are creating an action creator here so it will connect to "connect" in MenuItems.js
// dispatch is a method object 
// export const shoppingCartActions = () => {
//     return (dispatch) => {

//     }
// }

export const addToCart = (item) => (dispatch) => {  // item - parameter===object that will pass when I click btn
    return dispatch({
        type: ADD_TO_CART,
        payload: item
    })
}
export const removeFromCart = (item) => (dispatch) => {
    return dispatch({
        type: REMOVE_FROM_CART,
        payload: item
    })
}






//export default fetchGIF