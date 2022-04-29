# A minimal React 18 boilerplate
A minimal React 18 boilerplate using TypeScript and webpack 5.\
Best suited for the projects where you want minimum bundle size and more control on webpack & typescript configurations.

## Installation
Clone this repository and run npm install.
```
npm install
```

## Usage
### **Development server**
Run webpack server, using npm start
```
npm start
```
This starts webpack server on port `3000`. To  change port, update port number in `webpack.dev.js` config file.

### **Production build**
To generate production build, run
```
npm run build
```

## Features
- [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [Webpack 5](https://webpack.js.org/concepts/)
- [TypeScript](https://www.typescriptlang.org/)

## Dependencies
### **TypeScript**
- [typescript](https://github.com/microsoft/TypeScript) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped) - Type definitions for React
- [@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped) - Type definitions for React-DOM

### **Webpack**
- [webpack](https://github.com/webpack/webpack) - Module and asset bundler.
- [webpack-cli](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [webpack-merge](https://github.com/survivejs/webpack-merge) - Merge development/production configuration to common configuration.

### **Webpack pugins**
- [css-loader](https://github.com/webpack-contrib/css-loader) - Resolve CSS imports
- [ts-loader](https://github.com/TypeStrong/ts-loader) - TypeScript loader for webpack, Resolve TypeScript
- [url-loader](https://github.com/webpack-contrib/url-loader) - Loader for webpack which transforms files into base64 URIs.

## Author
- Anuj Sharma

## License
- This project is open source and available under the MIT License.
