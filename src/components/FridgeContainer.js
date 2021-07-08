import React from 'react'
import { connect } from 'react-redux'
import { increseTemp,decreseTemp } from '../redux'

const FridgeContainer = (props) => {

    return (
        <div>
            <h2>Current temperature of fridge: {props.temperature}</h2>
            <button onClick={props.decreseTemp}>-1</button>
            <button onClick={props.increseTemp}>+1</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        temperature: state.fridge.temperature
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increseTemp: () => dispatch(increseTemp()),
        decreseTemp: () => dispatch(decreseTemp())

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FridgeContainer);