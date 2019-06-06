# heroku-deploy-template

This template is useful when we want to deploy our angular based application on the Heroku for free.

#### How to Use

```
Step 1: Downlaod the template from the mentioned git path
```

```
Step 2: Create the production build of your application. and copy the contents of dist folder.
```

```
Step 3: Paste the dist folder content into the public folder of 'heroku-deploy-template'
```
```
Step 4: Login into heroku or create new account in heroku.
```

```
Step 5: Navigate to https://dashboard.heroku.com/apps and click on the 'New' and 'Create New App' option on the top of the page.
```

```
Step 6: Provide App name as per your choice 'app-name' and click on the create app.
```
```
Step 7: We have three options (Heroku Cli / Git / Container Registry) available to host your app onto heroku. In this we will talk about git only.
        Step 7.1: Commit your upadted template with the upadted build on git.
        Step 7.2: Click on the second option available on heroku 'Connect to github'
        Step 7.3: it will connect to heroku and will list all of your projects (public and private). Select the         project you want to host.
        Step 4: After connect to the project you want to deploy, user can Enable/disable automatic deploys from GitHub.
        Step 5: Deploy a GitHub branch (By default Master) or you can choose, which branch you want to deploy.
        Step 6: Thats it !!! Now you can check the application path from clicking on 'open App' available from top of the application.
```
### License
MIT
