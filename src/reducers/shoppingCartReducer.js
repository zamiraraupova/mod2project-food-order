import menuList from "../components/Data";
//import cartItems from ''
//shoppingCart: []
// actions: adding and removing items 
// switch add and remove 
const initialState = {
    shoppingCart: menuList
}

export const shoppingCartReducer = (state = initialState, action) => {
    // we are switching between actions
    switch (action.type) {
        case "ADD_TO_CART": 
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return [...state, ]
            state.filter((food) => { 
                return food.name !== item.name
            })
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

    // export const removeFromCartReducer = (state=[], action) => {
    //     switch (action.type){
    //         case 'REMOVE_FROM_CART':
    //             return state.filter((food) => { 
    //               return food.name !== item.name
    //             })
    //     }
    
    // }
    
