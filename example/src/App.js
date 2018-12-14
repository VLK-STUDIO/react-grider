import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
        <Grider width="100%" cols="25% 50% 25%" rows="50vh 50vh">
            <Grider.Item
                wireframe
                >
                Test
            </Grider.Item>
        </Grider>
    )
  }
}
