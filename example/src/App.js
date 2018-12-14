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
                gap="10px"
                height="300px" 
                width="100%" 
                cols={4} 
                rows={4}>
                <Grider.Item wireframe>
                    Item 1
                </Grider.Item>
                <Grider.Item wireframe>
                    Item 2
                </Grider.Item>
                <Grider.Item wireframe>
                    Item 3
                </Grider.Item>
                <Grider.Item wireframe>
                    Item 4
                </Grider.Item>
                <Grider.Item wireframe>
                    Item 5
                </Grider.Item>
                <Grider.Item 
                    colStart={2} 
                    colEnd={5} 
                    wireframe>
                    Item 6
                </Grider.Item>
            </Grider>
        </div>
    )
  }
}
