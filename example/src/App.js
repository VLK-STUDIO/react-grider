import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
        <Grider width="100%" gap="1px" cols="25% 50% 25%" rows="50vh 50vh">
            <Grider.Item 
                colStart={1}
                colEnd={1}
                rowStart={1} 
                rowEnd={4}
                wireframe>
                Test
            </Grider.Item>
            <Grider.Item 
                colStart={2}
                colEnd={4}
                rowStart={1} 
                rowEnd={4}
                wireframe>
                Test
            </Grider.Item>
        </Grider>
    )
  }
}
