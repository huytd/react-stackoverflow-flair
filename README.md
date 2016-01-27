# StackOverflow User Flair with React

This is a React component help you create StackOverflow Flair with your own design.

![](screenshot.png)

Online editable version with **Codepen.io** (use jQuery) here [http://codepen.io/huytd/pen/WrzqgN/](http://codepen.io/huytd/pen/WrzqgN/)

## How to run

First, you need to install all dependencies:

```
npm install
```

If you don't have `Webpack Dev Server`, just install it globally:

```
npm install -g webpack-dev-server
```

Start the server with:

```
npm start
```

The demo will run at address [http://localhost:8080](http://localhost:8080)

## How to customize

### Show your own StackOverflow user

In `main.js`, find this line:

```js
ReactDOM.render(<StackOverflowProfile userId="1567340"/>, document.querySelector('#app'));
```

Replace it to:

```js
ReactDOM.render(<StackOverflowProfile userId="your-stackoverflow-user-id-here"/>, document.querySelector('#app'));
```

**your-stackoverflow-user-id-here** is your StackOverflow user ID

### Change the layout and style

You can change the layout by edit `render()` function of `js/StackOverflowProfile.jsx` file. For the style, just edit `scss/style.scss` file.

## License

This snippet published to Github under **MIT** license.
