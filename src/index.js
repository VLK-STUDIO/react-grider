import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Grider extends Component {
    
    static propTypes = {
        rows: PropTypes.oneOfType([
            PropTypes.string
        ]),
        cols: PropTypes.oneOfType([
            PropTypes.string
        ]),
        gap: PropTypes.oneOfType([
            PropTypes.string
        ])
    }

    render() {
        const rows = typeof this.props.rows !== 'undefined' ? 
            this.props.rows : '100px 100px 100px 100px';
        const cols = typeof this.props.cols !== 'undefined' ? 
            this.props.cols : '25% 25% 25% 25%';
        const gap = typeof this.props.gap !== 'undefined' ? this.props.gap : 0;

        const style = {
            display: !this.props.inline ? 'grid' : 'inline-grid',
            gridTemplateColumns : cols,
            gridTemplateRows : rows,
            gridGap : gap
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}

class Item extends Component {

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
        wirefrane: PropTypes.oneOfType([
            PropTypes.boolean
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
        const gridArea = typeof this.props.gridArea !== 'undefined' ? this.props.gridArea : null;
        const { wireframe } = this.props;
        const { className } = this.props;
        const style = {
            gridColumnStart : colStart,
            gridColumnEnd : colEnd,
            gridRowStart : rowStart,
            gridRowEnd : rowEnd,
            gridArea : gridArea,
            border : wireframe ? "1px solid green" : "none",
        }
        return(
            <div className={className} style={ style }>{this.props.children}</div>
        )
    }
}

Grider.Item = Item;
