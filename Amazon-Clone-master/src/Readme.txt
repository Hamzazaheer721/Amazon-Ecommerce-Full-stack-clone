npm install -g firebase tools

npm install @material-ui/core

npm install @material-ui/icons

npm install react-router-dom

npm i react-currency-format

npm i firebase

npm i -g firebase-tools

firebase login
firebase init
npm run build
firebase deploy

https://clone-c4551.web.app


Additional: 

npm i -S react-flip-move
npm i @stripe/stripe-js
npm i @stripe/react-stripe-js
npm i axios
npm install moment

firebase init
choose functions: configure and deploy cloud functions, then choose javascript and press Y afterwards in two options.
This will set up your backend setup now.
We have frontend in src file and functions folder is for backend, Both have their own seperate node_modules folder.
Install following dependencies in functions folder.

npm i express
npm i cors
npm i stripe


To emulate the index.js:
firebase emulators:start
click on the link of localhost/functions 
e.g mine was http://localhost:4000/functions

and
copy this following URL 
+  functions[api]: http function initialized (http://localhost:5001/clone-c4551/us-central1/api).


now deploye it 

firebase deploy --functions 
make sure you are in functions folder 

now goto your src file and do following

npm run build
firebase deploy --only hosting