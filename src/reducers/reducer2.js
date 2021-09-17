
export const removeFromCartReducer = (state=[], action) => {
    switch (action.type){
        case 'REMOVE_FROM_CART':
            return state.filter((food) => { 
              return food.name !== item.name
            })
    }

}

    