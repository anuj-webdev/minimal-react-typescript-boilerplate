# A truly minimal React 18, Typescript boilerplate
A truly minimal most updated React 18, typescript boilerplate using webpack 5. Best suited for the projects where you want minimum bundle size and more control on webpack, typescript, eslint configurations, so that react project can be started with custom configurations without any much efforts from day one.

This template covers all aspects of react application development without any efforts.
- Development - React 18, Typescript
- Package bundling - Webpack 5
- Code quality - Eslint

![Minimal React TypeScript boilerplate](https://gifyu.com/image/Sshvw)

## Installation
Clone repository
```
// Using SSH
git clone git@github.com:anuj-webdev/minimal-react-typescript-boilerplate.git

// Using HTTPS
git clone https://github.com/anuj-webdev/minimal-react-typescript-boilerplate.git
```
run npm install.
```
cd minimal-react-typescript-boilerplate
npm install
```

## Usage
### **Development server**
Run development webpack server, using npm start
```
npm start
```
Development webpack server starts on port `3000`. To  change port, update port number in `webpack.dev.js` config file.

### **Production build**
To generate production build, run
```
npm run build
```

### **Linting**
To check linting issues in project, run
```
npm run lint
```

To fix the lint issues in project, run
```
npm run lint:fix
```

### **Code styling**
To check formatting issue in project, run
```
npm run pretty
```

To fix the formatting issues in project, run
```
npm run pretty:fix
```

## Features
- [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [Webpack 5](https://webpack.js.org/concepts/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://github.com/eslint/eslint)

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

### **Linting**
- [eslint](https://github.com/eslint/eslint) - Find and fix problems in your JavaScript code using eslint.
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) - Provide tooling which enables eslint to support typescript.
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint) - An ESLint parser which enables ESLint to lint TypeScript source code.

### **Prettier**
- [Prettier](https://github.com/prettier/prettier) - An opinionated code formatter
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - To turns off all rules that are unnecessary/conflicting with Prettier.

### **Jest & Babel**
- [Jest](https://github.com/facebook/jest) - JavaScript testing framework to run tests.
- [@types/jest](https://github.com/DefinitelyTyped/DefinitelyTyped) - Type definition support for jest.
- [@babel/core](https://github.com/babel/babel) - Babel compiler core
- [@babel/preset-env](https://github.com/babel/babel) - To support latest JavaScript features.
- [@babel/preset-typescript](https://github.com/babel/babel) - Jest plugin to use babel for typescript transformation.
- [babel-jest](https://github.com/facebook/jest) - Jest plugin to use babel for transformation.

## Author
- Anuj Sharma

## License
- This project is open source and available under the MIT License.
