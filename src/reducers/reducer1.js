import menuList from "../components/Data";
//import cartItems from ''
//shoppingCart: []
// actions: adding and removing items 
// switch add and remove 
export const addToCartReducer = (state=menuList, action) => {
    // we are switching between actions
    switch (action.type) {
        case "ADD_TO_CART": 
            return [...state, action.payload];
        default:                
            return state        
    }
}
    // another way to write switch statement
    // if (action.type === "ADD_TO_CART"){
    //     return [...state, action.payload]
    // }else{
    //     return state
    // }


