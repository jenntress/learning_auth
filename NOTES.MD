# auth_project

TO START
1. start mongod
2. connect to mongo
3. cd into \code\learning-auth\auth_project `nodemon ./bin/www`
4. cd into \code\learning-auth\auth_project\client `npm run start` (should open localhost 3000 in browser)

HOMEWORK
- try to write your own front end using React - index.js in client/src/index.js has framework.
- (FIX) Do an easier command for node server startup

POSTMAN
- POST: http://localhost:3001/api/signup
  - use Body: "raw" toggle, change Text dropdown to json
  - paste into form area {"email": "tesiruf948fhflwt@gmail.com", "password": "password"}
  - OR key = email and password
