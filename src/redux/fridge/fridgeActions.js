import { TEMPERATURE_INCRESED, TEMPERATURE_DECREASED } from "./fridgeTypes";

export const increseTemp = () => {
    return {
        type: TEMPERATURE_INCRESED
    }

}

export const decreseTemp = () => {
    return {
        type: TEMPERATURE_DECREASED
    }

}