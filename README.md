# OnOffAsssignment
Home Assignment

Local package containing all end-to-end application tests. The package has its own package.json and it can be installed and run independently from the application.

Integration and end-to-end tests of this application is done by simulation the user behaviour and automatically clicking through the GUI. Tests make sure that all the features work as expected together with the micro-services at the backend. The integration tests are written using Cypress as test framework.

Install
From the place where the package.json is available run following npm command 

Usage
Run end-to-end tests by opening the default browser. This will open a Cypress browser and from there you can click on the specs (test files) that you want to run or can run all integration tests. npx cypress open 'npx cypress run'
