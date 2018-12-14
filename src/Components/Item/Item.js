import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {

    static propTypes = {
        colStart: PropTypes.oneOfType([
            PropTypes.number
        ]),
        colEnd: PropTypes.oneOfType([
            PropTypes.number
        ]),
        rowStart: PropTypes.oneOfType([
            PropTypes.number
        ]),
        rowEnd: PropTypes.oneOfType([
            PropTypes.number
        ]),
        gridArea: PropTypes.oneOfType([
            PropTypes.string
        ]),
        wireframe: PropTypes.oneOfType([
            PropTypes.bool
        ]),
        className: PropTypes.oneOfType([
            PropTypes.string
        ])
    }

    render(){
        const { colStart } = this.props;
        const { colEnd } = this.props;
        const { rowStart } = this.props;
        const { rowEnd } = this.props;
        const { wireframe } = this.props;
        const { className } = this.props;
        const style = {
            gridColumnStart : colStart,
            gridColumnEnd : colEnd,
            gridRowStart : rowStart,
            gridRowEnd : rowEnd,
            border : wireframe ? "1px solid green" : "none",
        }
        return(
            <div className={className} style={ style }>{this.props.children}</div>
        )
    }
}
