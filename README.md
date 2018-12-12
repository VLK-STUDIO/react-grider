# react-grider

> The css grid react library.

[![NPM](https://img.shields.io/npm/v/react-grider.svg)](https://www.npmjs.com/package/react-grider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-grider
```

## Usage

```jsx
import React, { Component } from 'react'

import Grider from 'react-grider'

export default class App extends Component {
  render () {
    return (
        <Grider cols="25% 50% 25%" rows="50vh 50vh"> //Setup Template
            <Grider.Item 
                colStart={2}
                colEnd={3}
                rowStart={2} 
                rowEnd={3}
                wireframe={false}>
                Test
            </Grider.Item>
        </Grider>
    )
  }
}
```

## License

MIT © [VLK-STUDIO](https://github.com/VLK-STUDIO)
