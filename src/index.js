import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Components/Item/Item'

export default class Grider extends Component {
    
    static propTypes = {
        rows: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        cols: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        gap: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    getRowsTemplate = (rows) => {
        let rowsWidth = (100 / rows) + '%';
        let template = '';
        for (let i = 0; i < rows; i++){
            template += rowsWidth + ' '
        }
        return template
    }

    getColsTemplate = (cols) => {
        let colsWidth = (100 / cols) + '%'
        let template = '';
        for (let i = 0; i < cols; i++){
            template += colsWidth + ' '
        }
        return template
    }

    render() {

        let rows = typeof this.props.rows !== 'undefined' ? 
            this.props.rows : 'auto';

        let cols = typeof this.props.cols !== 'undefined' ? 
            this.props.cols : '25% 25% 25% 25%';

        const gap = typeof this.props.gap !== 'undefined' ? 
            this.props.gap : 0;

        const width = typeof this.props.width !== 'undefined' ? 
            this.props.width : '100%';

        const height = typeof this.props.height !== 'undefined' ? 
            this.props.height : 'auto';

        rows = typeof rows === 'number' ? 
            this.getRowsTemplate(rows) : rows;
        
        cols = typeof cols === 'number' ? 
            this.getColsTemplate(cols) : cols;

        const style = {
            display: !this.props.inline ? 'grid' : 'inline-grid',
            gridTemplateColumns : cols,
            gridTemplateRows : rows,
            gridGap : gap,
            width: width,
            height: height
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}

Grider.Item = Item;
