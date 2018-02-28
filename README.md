## Cyber4All Coding Challenge
Welcome to the Cyber4All Code Challenges project page. Code challenges are an important part of our hiring process.

The code challenge is designed to give candidates the ability to showcase their skills in a low stress, extended time model rather than part of a technical interview. This challenge is designed to take no more than 5 hours.

Most importantly we do the challenge for you. Anyone submitting a code challenge, owns their own code, whether they put it on GitHub or another site. Our theory is that you are putting time into the interview process. We want you to get something out of the effort. What better than something to add to your portfolio?

Please do not reference Cyber4All on your project as we do not want to introduce the possibility of someone plagiarizing your work

#### Full Stack Web Application (UI, Service Layer, and Data Layer Required)

As part of this project, we would like for you to build a simple, yet elegant application that allows a user to input a `LearningObject` and view a list of all created `LearningObjects`. We ask that your UI contains at least:

* A form to input and save a new `LearningObject`.
* List view to display all `LearningObjects` in your Datastore.
* Ability to sort by `LearningObjects` alphabetically.
* Filter `LearningObjects` by `published` property. (Show or hide publised/unpublished `LearningObjects`)

The UI should be clean and written in the Angular framwork. (Angular 2 and above)
Your serivce layer must be built using Node.Js and Express.

You are free to use any Datastore you like for this project, but for ease of implementation we recommend using one from the list below.
* [Loki](https://github.com/techfort/LokiJS/)  (In-Memory Datastore)
* [Firebase](https://github.com/firebase/firebase-js-sdk) (NoSQL Document Database)
* [MongoDB](https://www.mongodb.com/) (NoSQL Document Database)

#### `LearningObject` Schema

`LearningObject` : a shareable, self-contained piece of curriculum that has clearly identified learning outcomes, assessment strategies, and instructional strategies

| Property Name | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the `LearningObject` |
| levels | `string[]` | List of `AcademicLevels`. <br/> Valid `AcademicLevels` : 'K-12', 'Undergraduate', 'Graduate'  |
| published | `boolean` | Flag indicating whether or not the `LearningObject` should be displayed. |


#### Challenge Submission
Your project containing the source code for client and service layer applications must be published to your GitHub account and openly accessible for review. Your submission should also include links to the hosted client and service layer applications.

#### Angular Resources
 * [Angular Docs](https://angular.io/docs)
#### Express Resources
* [Express Getting Started](https://expressjs.com/en/starter/installing.html)
#### Deployment Tips

For deployment we recommend using one or a combination of these free services
* [Heroku](https://www.heroku.com/) (Client & Service Layer Hosting)

* [Firebase](https://firebase.google.com/) (Client Hosting & Datastore)

#### Deployment to Heroku
* [Deploying Node.Js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
* [Deploying Angular 2 & Express](https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147)

#### Deployment to Firebase
* [Angular 2 Applications on Firebase](https://codingthesmartway.com/hosting-angular-2-applications-on-firebase/)
