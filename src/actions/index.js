
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
//we are creating an action creator here so it will connect to "connect" in MenuItems.js
// dispatch is a method object 

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