
//shoppingCart: []
// actions: adding and removing items 
// switch add and remove 
const initialState = {
    shoppingCart: []   // empty cart
}

export const shoppingCartReducer = (state = initialState, action) => {
    // we are switching between actions
    switch (action.type) {
        case "ADD_TO_CART": 
            return {...state, shoppingCart:[...state.shoppingCart,action.payload]}; // action.paylod === object
        case 'REMOVE_FROM_CART':            // ^^ grabbing state , ^^ adding new thing
            const newMenu = state.shoppingCart.filter((food) => { 
                return food.name !== action.payload.name
            })
            return {...state, shoppingCart:newMenu}
            
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
    
