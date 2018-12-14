import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
        <Grider width="100%" height="100vh" cols={2} rows={2}>
            <Grider.Item wireframe>
                Test
            </Grider.Item>
            <Grider.Item wireframe>
                Test
            </Grider.Item>
            <Grider.Item wireframe>
                Test
            </Grider.Item>
            <Grider.Item wireframe>
                Test
            </Grider.Item>
        </Grider>
    )
  }
}
