# Humans of Bloomington
This web application features portraits and special interest profiles of individuals living in Bloomington. The app features authentication and access capabilities, changing views depending upon which user is logged in.

## Deployment
Heroku is a cloud platform as a service that was used as my web application deployment model. To view live, visit https://humansofbloomington.herokuapp.com/.

## Built With
- Node.js, Express, MongoDB, HTML, CSS, JavaScript.
- [Atom](https://atom.io/) - Text editor
- [Postman](https://www.getpostman.com/) - Testing software
- [NPM](https://www.npmjs.com/) - Package manager
- [Bootstrap](https://getbootstrap.com/)

## The Approach
Overall, I used the MVC file structure approach of Models, Views and Controllers. I had two models with 7 RESTful routes and full CRUD. I used EJS partials, Bootstrap, and a customized CSS stylesheet. The dependencies I used included Express, Mongoose, Espress-session, Bcrypt, EJS, Method-Override. I built the routes for the index page and a create route to start with some data to help visualize the strategy. After testing with Postman, I then built out all the additional CRUD routes I would need, creating a new EJS file with each route. Once I had the routes functioning, I starting building in authentication code and slightly adjusting the views based on the user session.

## User Stories
As a user who simply wants to browse the app, I can view images on the index page which link to individual show pages where I can see personal stats, view how many stars were given to this profile, and read their story.

As a user who is interesting in having a profile on the app, I can register to use the app by clicking register, then login with that information. If I enter the wrong username or password, it prompts me to retry. Once logged in, I can create a new profile by clicking on that navigation item and adding in the data fields for each form item. Once I create a profile, I am able to browse others' pages as I did before but now I can "star" them if I desire. Also, when viewing my own page, I can edit or delete the profile I created. There is a logout button in the navigation if I want to logout at any time during my session.

## Unsolved Issues/Future To-Dos
Additional features could include a login modal, more work on the default image and resizing images to fit a mold , a second show page to help with scalability as more users are generated for easier viewing, a Google map of all the hometowns.

## Guest Account
If you visit the app live, feel free to use the guest account I created to browse and see functionality and features. The username is guest and password is guest.

## Author
Dana Palazzo [GitHub](https://github.com/dpalazz)

## Other Resources/Acknowledgments
- Hat tip to 2017/18 WDIR classmates

- Images from [Unsplash](https://unsplash.com/)
  - Additional acknowledgements for images:
    - Andrae Ricketts on Unsplash
    - Malvestida Magazine on Unsplash
    - Christiana Rivers on Unsplash
    - Ryan Holloway on Unsplash
    - Chuttersnap on Unsplash

- Inspiration from [Humans of New York](http://www.humansofnewyork.com/) & [The Techies Project](http://www.techiesproject.com/)
