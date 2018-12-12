import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
        <Grider gap="10px" cols="25% 50% 25%" rows="50vh 50vh">
            <Grider.Item 
                colStart={1} 
                colEnd={1}
                rowStart={2}
                rowEnd={2}
                wireframe={true}>
                Test
            </Grider.Item>
        </Grider>
    )
  }
}
