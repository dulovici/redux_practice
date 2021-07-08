import { TEMPERATURE_INCRESED, TEMPERATURE_DECREASED } from "./fridgeTypes";

const initialState = {
    temperature: 3
}

const fridgeReducer = (state = initialState, {type,payload}) => {
    if(type === TEMPERATURE_INCRESED) {
        return {
            ...state,
            temperature: state.temperature + 1
        }
    }
    if(type === TEMPERATURE_DECREASED) {
        return {
            ...state,
            temperature: state.temperature - 1
        }
    }

    return state;

}


export default fridgeReducer;