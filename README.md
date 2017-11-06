# wemovies

1. Install MeteorJS Framework:
curl https://install.meteor.com/ | sh

2. Enter root of project and install node modules:
meteor npm install

3. Setup The MovieDB API Token. Create a token.js file under /imports/api/ with the following content:
export default token = 'YOUR_API_KEY';

4. Start up the project:
meteor

5. Project should appear running by default at localhost port 3000.
