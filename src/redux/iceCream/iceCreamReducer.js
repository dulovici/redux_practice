import { BUY_ICECREAM } from "./iceCreamTypes";


const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState,{type,payload}) => {
    if(type === BUY_ICECREAM) {
        return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
    }

    return state

}

export default iceCreamReducer;