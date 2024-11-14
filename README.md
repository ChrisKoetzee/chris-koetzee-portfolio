# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Installations

    1. npm install 
    2. npm install react-bootstrap bootstrap     and in your index.js -     import 'bootstrap/dist/css/bootstrap.min.css';
    3. npm install mdb-react-ui-kit     and in your index.js file -     import 'mdb-react-ui-kit/dist/css/mdb.min.css';
    4. npm install @emailjs/browser     and in your file where using -     import emailjs from '@emailjs/browser';
    5. npm install dotenv      -     create a .env file in the root and add variables for emailjs
    6. npm install --save-dev prettier    - create a .prettierrc file in the root and insert :
            {
                "semi": true,
                "singleQuote": true,
                "tabWidth": 2,
                "trailingComma": "es5"
            }
    7. npm install -g csslint -      then create a .stylelintrc.json and insert :
            {
                "extends": "stylelint-config-standard",
                "rules": {
                    "indentation": 2,
                    "string-quotes": "single"
                }
            }
            - To check css files run -   csslint src/**/*.css
    8. Add to scripts:
            "scripts": {
                "format": "prettier --write .",
                "lint:css": "stylelint '**/*.css'"
                }
    9. npm install react-toastify - in you index.js or app.js -      npm install react-toastify
                                    use the <ToastContainer/> in the file where you want it applied
                                    where you using the <ToastContainer/> -   import { ToastContainer, toast } from 'react-toastify';
    10. npm install react-multi-carousel -      and in your file where using -      import 'react-multi-carousel/lib/styles.css';
                                                to use the Carousel from react multi carousel library
    11. npm install @fortawesome/fontawesome-free






    

 






