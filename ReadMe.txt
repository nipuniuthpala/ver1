Git Repo-https://git.rakuten-it.com/projects/AIP/repos/ai-dashboard-js-qa/browse?at=refs%2Fheads%2Fsprint22



Project setup

npm init -Give information about the project
Install dependencies
npm install jest puppeteer jest-puppeteer
npm install @babel/core @babel/preset-env babel-jest
npm install chai
package.json will have all the dev dependencies.
    3. Put all the config files needed. babel.config.js /jest-puppeteer.config.js/jest.config

    4. Have separate folders for the pages and for the tests.

    5. How to run tests use the command -npm run test

    6. How to run Regression only testcases use npm run regression