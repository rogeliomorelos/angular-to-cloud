## Complete tutorial in my Blog

If you want to do this lab please visit my Blog [DevOps4Fun - Angular Deployment to AWS using GitHub Actions](https://devops4fun.io/angular-deployment-to-aws-using-github-actions).

This project has two workflows:
- Build, Lint and Test on PR
- Build and Deploy on Merge - The deployment is done with AWS S3 and Cloudfront

The workflows include caching of node_modules to improve efficiency on "npm install" step.


# AngularToCloud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

The goal of this project is to show you a basic CI/CD proces to Deploy an Angular App to AWS S3 with CloudFront using GitHub Actions.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
