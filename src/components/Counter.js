import React, { Component, PropTypes } from 'react';

import Value from './Value';
import Control from './Control';

import * as actions from '../actions';

import {connect, bindAcyionCreators} from 'react-redux';
const propTypes = {
};
const defaultProps = {
};
class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    setRandomColor() {
      const color = [
          Math.floor((Math.random()*55)+200),
          Math.floor((Math.random()*55)+200),
          Math.floor((Math.random()*55)+200)
      ];
      this.props.handleSetColor(color);
    }
    render() {
        const color = this.props.color;
        const style = {
            background : `rgb(${color[0]},${color[1]},${color[2]})`
        }
        return(
            <div style={style}>
              <Value number={this.props.number}/>
              <Control
                  onPlus={this.props.handleIncrement}
                  onSubtract={this.props.handleDecrement}
                  onRandomizeColor={this.setRandomColor}
              />

            </div>
        );
    }
}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStatesToProps = (state) => {
    return {
        number : state.counter.number,
        color : state.ui.color
    }
}

const mapDispatchToProps = (dispatch) => {
    // return bindAcyionCreators(actions, dispatch);
    return {
        handleIncrement : () => {
          dispatch(actions.increment());
        },
        handleDecrement : () => {
          dispatch(actions.decrement())
        },
        handleSetColor : (color) => {
          dispatch(actions.setColor(color))
        }
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Counter);
