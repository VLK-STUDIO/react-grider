import React, { Component } from 'react'

import Grider from 'react-grider'
import { Z_BLOCK } from 'zlib';

export default class App extends Component {
  render () {
    return (
        <div style={{
            marginLeft : "auto",
            marginRight : "auto",
            marginTop : "150px",
            display : "block",
            width: "70%"
        }}>
            <Grider 
            height="auto" 
            width="100%" 
            cols="25% 50% 25%" 
            rows="250px 200px">
                <Grider.Item 
                    colStart={1}
                    colEnd={1}
                    rowStart={2} 
                    rowEnd={2}
                    wireframe>
                    Test
                </Grider.Item>
                
            </Grider>
        </div>
    )
  }
}
