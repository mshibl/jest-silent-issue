**What is the current behavior?**
when running `jest --silent --verbose` console output is printed
however, when running `jest --silent` only console output is supressed

**Jest Issue**
https://github.com/facebook/jest/issues/4458

**What is the expected behavior?**
Prevent tests from printing messages through the console when using `jest --silent --verbose`

**Please provide your exact Jest configuration and mention your Jest, node, yarn/npm version and operating system.**
```
jest: 21.0.2
yarn: 0.17.9
node: 8.4.0
```