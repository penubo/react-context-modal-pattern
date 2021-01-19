# Modal pattern in react

Modal, Dialog and Toast like components always need internal states to render properly like `open`, `setOpen`
However, What we actually needs for control modal is `openModal` and `closeModal` method.
We can abstract Modal like component using context API and custom hook.
By doing this, We can make our page component much clear and easy to understand

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
