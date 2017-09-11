# my-resume-react
See running at [My Resume](https://very-new.firebaseapp.com/)

Initial data load may take over 5 seconds.  (But glitch.me is free)  


Tools used:
* react
    * react-router v4.1
    * redux
    * redux-thunk
* material-ui
* enzyme
* node
    * express
    
### Deployment

React App static files are hosted at firebase cdn.  
At startup, the app fetches data from https://flower-nation.glitch.me/.   
Node app running at glitch.me.  Server code is in file: server.js
 

### Notes about the react app
The controls contain no logic and the jsx contain no logic or loops.  This makes reading and testing much easier. 

The heaving lifting in the app is in \src\ducks\select-employment-history.js.  This is also where the bulk of the testing was done.  "getAllIds" is responsible for sorting and filtering the list.

longest non-test file: 70 lines.  Local state, bind, and constructors are never used.  Keywords: function, if, var, and let are never used.

### Other things used:
* create-reat-app
* combineReducers
* functional programming
* immutability 
* es6 spread operator
* es6 destructuring  with default values
* es6 destructuring  renaming variables
* minimal code complexity
* tdd
* closure
