# react-grider

> React Grider is a css-grid based micro-library.

[![NPM](https://img.shields.io/npm/v/react-grider.svg)](https://www.npmjs.com/package/react-grider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-grider
```

## Basic Usage

> React Grider is set by default to build a grid with four 25% width columns and a infinite number of rows with automatic height.

```jsx
import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
        <Grider>
            <Grider.Item>
                Test
            </Grider.Item>
            <Grider.Item>
                Test
            </Grider.Item>
            <Grider.Item>
                Test
            </Grider.Item>
            <Grider.Item>
                Test
            </Grider.Item>
        </Grider>
    )
  }
}
```

## Define a custom grid

> You can define your own grid by setting the **cols** and  the **rows** props on the **Grider** component and **colStart**,**colEnd**,**rowStart**,**rowEnd** in the **Grider.Item** component props. I'ts possible to view a wireframe of your items by adding the prop **wireframe** to the **Grider.Item**.

```jsx
import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
        <Grider gap="10px" cols="25% 50% 25%" rows="50vh 50vh">
            <Grider.Item 
                colStart={1}
                colEnd={1}
                rowStart={1} 
                rowEnd={4}
                wireframe={false}>
                Test
            </Grider.Item>
            <Grider.Item 
                colStart={2}
                colEnd={4}
                rowStart={1} 
                rowEnd={4}
                wireframe={false}>
                Test
            </Grider.Item>
        </Grider>
    )
  }
}
```
# What's next?

> I'm working to add a template feature with named areas.

## License

MIT © [VLK-STUDIO](https://github.com/VLK-STUDIO)
