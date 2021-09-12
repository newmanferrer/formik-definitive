# DEFINITIVE FORM HANDLING.

## (REACT - FORMIK - YUP)

Practica relacionada a ganar experiencia y perfeccionar las habilidades relacionadas al manejo de formularios con react. En esta oportunidad utilizando la biblioteca “FORMIK”, recomendada ampliamente por el propio equipo de react. De igual manera se utilizó el constructor de esquemas de JavaScript “YUP” para validar los datos de entrada enviados por el usuario.

Espero les resulte de ayuda a quienes quieran avanzar en el manejo y validaciones de formularios.

Formik: https://formik.org/
Yup: https://github.com/jquense/yup

## Descripción del proyecto.

Para este nuevo proyecto, se utilizaron los elementos, inputs o controles que podemos encontrar más frecuentemente en formularios, sin embargo, trate de agregar los más interesantes y un poco diferentes de tratar para poder entender con claridad la mejor manera de capturar y validar cada uno de los mismos.

Una de las prioridades o retos que me propuse fue el manejar todos los elementos del formulario desde un solo componente, ósea desde un solo componente manejar todos los tipos de inputs, select normales, select multiple, textarea, etc., así como los mensajes de error mostrados al usuario y por último que el diseño o estilos también fueran parte de ese mismo y único componente, este componente tiene el nombre de “FormInput”. Con esto desde este único componente manejaremos todos los inputs que necesitemos agregar, mostrar y validar del formulario antes de enviar.

Los únicos tipos de inputs que preferí manejar como componentes independientes sobre todo por temas de diseño y estilos más personalizados fueron los inputs de tipo “radio” y “checkbox”, ambos tipos de inputs los manejé mediante el componente llamado “FormInputRadChe”, sin embargo, si el diseño o personalización de los inputs radio o checkbox no son tan importantes se pueden manejar también desde un único componente.

En cuanto a las validaciones de la información que introduce el usuario, las mismas como mencione son manejadas mediante el uso de esquemas de “YUP”, así como con algunas expresiones regulares que vengo utilizando desde hace algún tiempo.

Pueden encontrar en este proyecto dos tipos de formularios con sus esquemas de validación, uno es el “FormLogin” y otro el “FormSingIn”, como entenderán solo está contemplado el manejo de los formularios desde el cliente, óseas validaciones desde el HTML y YUP.

A continuación, algunas de sus características y funcionalidades:

1.- Manejo de cualquier tipo de controles o entradas utilizadas en formularios.
2.- validación de la información introducida por el usuario.
3.- Mensajes al usuario de errores de formatos no validos en los campos.
4.- Diseño adaptable a varios dispositivos.

## Tecnologías utilizadas.

1.- REACT.
2.- FORMIK.
3.- YUP.
4.- HTML.
5.- STYLED COMPONENTS.
6.- EXPRESIONES REGULARES.

# DEFINITIVE FORM HANDLING.

Practice related to gaining experience and perfecting skills related to the handling of forms with react. This time using the "FORMIK" library, widely recommended by the test team itself. In the same way, the JavaScript schema constructor "YUP" was used to validate the input data sent by the user.

I hope it will be helpful to those who want to advance in the handling and validation of forms.

Formik: https://formik.org/
Yup: https://github.com/jquense/yup

## Project description.

For this new project, the elements, inputs or controls that we can find most frequently in forms were used, however, try to add the most interesting and a little different to try to be able to clearly understand the best way to capture and validate each one. thereof.

One of the priorities or challenges that I proposed was to handle all the elements of the form from a single component, that is, from a single component to handle all types of inputs, normal select, multiple select, textarea, etc., as well as the messages of error shown to the user and finally that the design or styles were also part of that same and only component, this component has the name of "FormInput". With this, from this single component we will handle all the inputs that we need to add, show and validate the form before submitting.

The only types of inputs that I preferred to handle as independent components, especially for design issues and more personalized styles, were the inputs of type "radio" and "checkbox", both types of inputs I managed through the component called "FormInputRadChe", however If the design or customization of the radio or checkbox inputs are not so important, they can also be managed from a single component.

As for the validations of the information entered by the user, as mentioned, they are handled through the use of "YUP" schemes, as well as with some regular expressions that I have been using for some time.

You can find in this project two types of forms with their validation schemes, one is the "FormLogin" and the other is the "FormSingIn", as you will understand, only the handling of forms from the client is contemplated, bone validations from HTML and YUP.

Here are some of its features and functionalities:

1.- Handling of any type of controls or inputs used in forms.
2.- validation of the information entered by the user.
3.- Messages to the user of errors of invalid formats in the fields.
4.- Design adaptable to various devices.

## Used technology.

1.- REACT.
2.- FORMIK.
3.- YUP.
4.- HTML.
5.- STYLED COMPONENTS.
6.- REGULAR EXPRESSIONS.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
