# react-grider

> React Grider is a css-grid based micro-library.

[![NPM](https://img.shields.io/npm/v/react-grider.svg)](https://www.npmjs.com/package/react-grider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

> npm install --save react-grider

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

> You can define your own grid by setting the `cols`,`rows`,`gap`,`height` and `width` props on the `Grider` component and `colStart`,`colEnd`,`rowStart`,`rowEnd` in the `Grider.Item` component props. I'ts possible to view a wireframe of your items by adding the prop `wireframe` to the `Grider.Item`.

```jsx
import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
        <Grider 
            height="auto" 
            width="100%" 
            gap="10px" 
            cols="25% 50% 25%" 
            rows="50vh 50vh">
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

> `cols` and `rows` could be an **integer** also. If you use an **integer** to define them, the grid will be divided in `n` equal columns and rows in relation to the sizes of the the `Grider` component's.

```jsx
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
```

## Define Item Area using `gridArea`

> It's possible to add custom css class to your items by using the prop `className`

```jsx
<Grider.Item gridArea="2/2/2/2" wireframe>
    Test
</Grider.Item>
```

## Custom className

> It's possible to add custom css class to your items by using the prop `className`

```jsx
<Grider.Item className="customClass" wireframe>
    Test
</Grider.Item>
```

## What's next?

> I'm working to add a template feature with named areas.

## License

MIT © [VLK-STUDIO](https://github.com/VLK-STUDIO)
