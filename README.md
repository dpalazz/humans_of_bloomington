# Humans of Bloomington
This web application features portraits and special interest profiles of individuals living in Bloomington. The app features authentication and access capabilities, changing views depending upon which user is logged in.

## Deployment
Heroku is a cloud platform as a service that was used as my web application deployment model. To deploy this on a live system, visit https://humansofbloomington.herokuapp.com/.

## Built With
Node.js, Express, MongoDB, HTML, CSS, JavaScript.
[Atom](https://atom.io/) - Text editor
[Postman] (https://www.getpostman.com/) - Testing software

## The Approach
I started with installing the dependencies I needed to run the app, including Express, Mongoose, Espress-session, Bcrypt, EJS. I built the routes for the index page and a create route to start with some data to help visualize the strategy. After testing with Postman, I then built out all the additional CRUD routes I would need, creating a new EJS file with each route. Once I had the routes functioning, I starting building in authentication code and slightly adjusting the views based on the user session.

## Guest Account
If you visit the app live, please feel free to use the guest account to browse and see functionality and features. The username is guest and password is guest.

## Author
Dana Palazzo [GitHub] (https://github.com/dpalazz)

## Other Resources/Acknowledgments
Hat tip to 2017/18 WDIR classmates
Images from [Unsplash] (https://unsplash.com/)
  - Additional acknowledgements for images:
    - Andrae Ricketts on Unsplash
    - Malvestida Magazine on Unsplash
    - Christiana Rivers on Unsplash
    - Ryan Holloway on Unsplash
    - Chuttersnap on Unsplash
Inspiration from [Humans of New York](http://www.humansofnewyork.com/) & [The Techies Project] (http://www.techiesproject.com/)
