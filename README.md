# Launch

1. Clone this repository
2. Open your terminal where the cloned repo is, and enter `ng open --serve`

# Create New Report

1. Click on **Create New Report** in the navbar
2. Fill in **Date** and **Username** (any string will do for Username). These fields are mandatory
   - The **Report Content** field is optional
3. Click on the **Submit Report** button. You will be redirected to `/view-reports` and should see your newly added report

# View Reports

#### There will always be one report by default. This is for convenience only (no need for user to create a new report just to see one)

1. Click on **View Reports** in the navbar
2. Click on **Read More** to read the main content of each report

# Edit Reports

#### Note: Functionality is incomplete as of this submission

1. Click on the **Edit/Approve** button to open up an editor for the chosen report. A modal box should load
2. On the bottom left of the modal, click on the **Allow Edits** button to make the report content editable.
   - The button's text should change to **Disable Edits**
3. Click on the same button to disable edits
4. To exit, click anywhere outside the modal box

# Delete Reports

#### You can only delete all reports, not individual ones.

1. In the same page as `/view-reports`, click the yellow button with the text **Clear All Reports**
2. The page will refresh and all reports will be removed

# NodeAngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
