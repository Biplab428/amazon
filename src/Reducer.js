import { AccordionActions } from "@material-ui/core";

export const initialState = {
    basket:[],
    user:null,
    
}
function reducer(state , action){
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return { ...state,
                     basket:[...state.basket, action.item] 
                     
            };
            case "REMOVE_FROM_BASKET" :
                let newBasket = [...state.basket];
                const index = state.basket.findIndex((e)=>(e.id === action.id));
                if(index>=0){
                    newBasket.splice(index,1)
                }
                return {
                    ...state,
                    basket:newBasket,
                }
        default : return state;
    }
}
export default reducer;