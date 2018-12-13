import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Components/Item/Item'

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
        ]),
        width: PropTypes.oneOfType([
            PropTypes.string
        ])
    }

    render() {

        const rows = typeof this.props.rows !== 'undefined' ? 
            this.props.rows : 'auto';

        const cols = typeof this.props.cols !== 'undefined' ? 
            this.props.cols : '25% 25% 25% 25%';

        const gap = typeof this.props.gap !== 'undefined' ? this.props.gap : 0;

        const width = typeof this.props.width !== 'undefined' ? this.props.width : '100%';

        const style = {
            display: !this.props.inline ? 'grid' : 'inline-grid',
            gridTemplateColumns : cols,
            gridTemplateRows : rows,
            gridGap : gap,
            width: width
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}

Grider.Item = Item;
