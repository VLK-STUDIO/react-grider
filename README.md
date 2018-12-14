# react-grider

> React Grider is a css-grid based micro-library.

[![NPM](https://img.shields.io/npm/v/react-grider.svg)](https://www.npmjs.com/package/react-grider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

> npm install --save react-grider

## Basic Usage

> React Grider is set by default to build a grid with four 25% width columns and a infinite number of rows with automatic height.

![basic usage](https://www.vlkstudio.com/images/basic.png)

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

![custom grid](https://www.vlkstudio.com/images/custom.png)

```jsx
import React, {
  Component
} from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render() {
    return ( 
        <Grider 
            gap="10px"
            height="auto" 
            width="100%" 
            cols="25% 50% 25%" 
            rows="250px 200px">
            <Grider.Item 
                colStart={1}
                colEnd={1}
                rowStart={1} 
                rowEnd={3}
                wireframe>
                    Item 1
            </Grider.Item>
            <Grider.Item 
                colStart={2}
                colEnd={2}
                rowStart={1} 
                rowEnd={2}
                wireframe>
                    Item 2
            </Grider.Item>
            <Grider.Item 
                colStart={2}
                colEnd={4}
                rowStart={2} 
                rowEnd={2}
                wireframe>
                    Item 3
            </Grider.Item>
            <Grider.Item 
                colStart={3}
                colEnd={3}
                rowStart={1} 
                rowEnd={1}
                wireframe>
                    Item 4
            </Grider.Item>
        </Grider>              
    )
  }
}
```

> `cols` and `rows` could be an **integer** also. If you use an **integer** to define them, the grid will be divided in `n` equal columns and rows in relation to the sizes of the the `Grider` component's.

![custom grid with integer](https://www.vlkstudio.com/images/integer.png)

```jsx
import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
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
    )
  }
}
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
