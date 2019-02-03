# [RNDM](https://www.rndm.com) Render Plugin: Compare Versions

## About

This plugin provides version comparison functionality for the [RNDM Render package](https://www.rndm.com/docs/rndm-render).

It is a RNDM Wrapper around the commonly used library [Compare Versions](https://github.com/omichelsen/compare-versions#readme).

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://www.rndm.com/docs/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-compare-versions
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-compare-versions';
```

## Usage

The Compare Version Plugin transforms the compare-versions package into a serialisable function.

### Compare

The usage of Compare versions is very simple. It takes two version strings and provides feedback to the user as to the ordering of those versions. i.e.

v1 = "1.2.3"
v2 = "3.2.1"
Result = -1

**Example** 

```json
{
    "type": "react-native.TouchableOpacity",
    "props": {
        "onPress": {
            "isFunc": true,
            "type": "compare-versions.compare",
            "args": ["1.2.3", "3.2.1"]
        },
        "children": {
            "type": "react-native.Text",
            "props": {
                "children": "Touch Me"
            }
        }
    }
}
```
For a more complete example checkout the included json in the example folders, which makes use of the [Redux](https://github.com/rndm-render-plugin-redux) plugin.

Check out the [Playground](https://www.rndm.com/playground) page to see how these features work.
