# InfernoJS Babel Plugin

> Plugin for babel 6.x to enable JSX for Inferno

This plugin transforms JSX code in your projects to [Inferno](https://github.com/trueadm/inferno) compatible virtual DOM. 

**Note!* This plugin has been built for use in Babel 6.x environments, and will not work with Babel 5.x ( *deprecated*) or older versions.

## How to install

```js
npm i --save-dev babel-plugin-inferno

```

## How to use

Add the plugin to your `package.json` and update the plugin section in your `.babelrc` file. Or if your Babel settings are located inside the `package.json` - update the plugin section there.

It's important that you also include the `babel-plugin-syntax-jsx`plugin.

Example on a `.babelrc` file that will work with Inferno:


```js
{   
    "presets": [ "es2015" ],
    "plugins": ["inferno"]
}
```

## Examples    

```js

// Render a simple div
InfernoDOM.render(<div></div>, container); 

// Render a div with text
InfernoDOM.render(<div>Hello world</div>, container); 

// Render a div with a boolean attribute
InfernoDOM.render(<div autoFocus='true' />, container);

```
