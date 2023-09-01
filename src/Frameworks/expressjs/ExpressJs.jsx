import React from "react";
import "../../Frameworks/style.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

const ExpressJs = () => {
  let navigate = useNavigate();
  return (
    <div className="body">
      <nav id="navbar">
        <button className="button-28" onClick={() => navigate(-1)}>
          &larr;Back
        </button>
        <header>Express.js Documentation</header>
        <ul>
          <li>
            <a className="nav-link" href="#Introduction">
              Introduction
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Getting_Started">
              Getting Started
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Routing_Expressjs">
              Routing Expressjs
            </a>
          </li>
          <li>
            <a className="nav-link" href="#HTTP_methods">
              HTTP methods Expressjs
            </a>
          </li>
          <li>
            <a className="nav-link" href="#URL_building">
              URL building Expressjs
            </a>
          </li>
          <li>
            <a className="nav-link" href="#middleware">
              Middleware Expressjs
            </a>
          </li>
          <li>
            <a className="nav-link" href="#templating">
              Templating Expressjs
            </a>
          </li>
          <li>
            <a className="nav-link" href="#database">
              Database with Expressjs
            </a>
          </li>
          <li>
            <a className="nav-link" href="#cookies">
              Cookies in Expressjs
            </a>
          </li>
          <li>
            <a className="nav-link" href="#sessions">
              Sessions in Expressjs
            </a>
          </li>
          <li>
            <a className="nav-link" href="#authentication">
              Authentication in Express.js
            </a>
          </li>
          <li>
            <a className="nav-link" href="#restfulApi">
              Restful Apis in Express.js
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Reference">
              Express.js - Reference
            </a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction</header>
          <article>
            <h2>Welcome to the Express.js Documentation!</h2>
            <p>
              Express.js, often referred to as just "Express," is a powerful and
              minimalist web application framework for Node.js. With its
              intuitive design and robust features, Express.js empowers
              developers to create dynamic and responsive web applications with
              ease. Whether you're a seasoned developer or just getting started
              with web development, this documentation will guide you through
              the ins and outs of Express.js, helping you unlock the full
              potential of this versatile framework. Let's dive in and explore
              the world of Express.js together!
            </p>
            <h3>Applications of Express js:</h3>
            <ul>
              <li>
                <b>Web Applications: </b>Express.js is commonly used to build
                server-side rendered web applications. It provides a framework
                for handling routes, views, and templates, making it easier to
                create dynamic web pages.
              </li>
              <li>
                <b>API Development: </b>Express.js is widely used for creating
                RESTful APIs. It simplifies the process of defining routes,
                handling requests, and sending responses, making it a popular
                choice for building backend services for frontend applications.
              </li>
              <li>
                <b>Single-Page Applications (SPAs): </b>Express.js can serve as
                the backend for SPAs, allowing them to communicate with the
                server and database to fetch and manipulate data without the
                need for page reloads.
              </li>
              <li>
                <b>Microservices: </b> Express.js is suitable for building
                microservices, which are small, independent services that work
                together to form a larger application. Its modular structure and
                flexibility make it well-suited for microservices architecture.
              </li>
              <li>
                <b>Real-Time Applications: </b> Using libraries like Socket.io,
                Express.js can be employed to build real-time applications such
                as chat applications, online gaming platforms, and collaborative
                tools.
              </li>
              <li>
                <b>Proxy Servers: </b>Express.js can act as a proxy server to
                handle requests and responses between clients and other servers.
                This can be useful for load balancing, caching, or adding
                security layers.
              </li>
              <li>
                <b>Middleware Integration: </b>Express.js allows you to easily
                integrate middleware for tasks like authentication, logging, and
                error handling. This makes the development process smoother and
                more organized.
              </li>
              <li>
                <b>Content Management Systems (CMS): </b>Express.js can be the
                foundation for building custom content management systems,
                allowing developers to create tailored solutions for managing
                digital content.
              </li>
              <li>
                <b>E-commerce Platforms: </b>Express.js can power the backend of
                e-commerce platforms, handling product listings, shopping carts,
                user accounts, and order processing.
              </li>
              <li>
                <b>Blogging Platforms: </b>It's possible to create blogging
                platforms using Express.js, where users can create, edit, and
                manage blog posts.
              </li>
              <li>
                <b>API Gateways: </b>In microservices architectures, Express.js
                can be used to build API gateways that manage requests,
                authentication, and communication between different services.
              </li>
            </ul>
          </article>
        </section>
        <section className="main-section" id="Getting_Started">
          <header>Getting Started</header>
          <article>
            <p>
              Welcome to the world of Express.js! This section will guide you
              through the process of setting up and getting started with
              Express.js, a powerful web application framework for Node.js.
              Whether you're a beginner or an experienced developer, this guide
              will help you quickly dive into building web applications and APIs
              using Express.js.
            </p>
            <h3>Prerequisites</h3>
            <p>
              Before you start with Express.js, make sure you have the following
              prerequisites:
            </p>
            <ol>
              <li>
                <b>Node.js and npm: </b>Express.js is built on top of Node.js,
                so you'll need to have Node.js and npm (Node Package Manager)
                installed on your machine. You can download them from the
                official <a href="https://nodejs.org/">Node.js website</a>
              </li>
              <li>
                <b>Basic JavaScript Knowledge: </b>Familiarity with JavaScript
                is essential, as Express.js relies heavily on JavaScript
                concepts and syntax.
              </li>
            </ol>
            <h3>Installation</h3>
            <p>
              Once you have Node.js and npm installed, you can create a new
              Express.js project by following these steps:
            </p>
            <ol>
              <li>
                <b>Initialize a new Node.js project: </b>Open your terminal or
                command prompt and navigate to the directory where you want to
                create your project. Run the following command to initialize a
                new Node.js project:
              </li>
              <code>npm init -y</code>
              <li>
                <b>Install Express.js: </b>With your project initialized,
                install Express.js using npm. Run the following command:
              </li>
              <code>npm install express</code>
            </ol>
            <h3>Creating Your First Express App</h3>
            <p>
              With Express.js installed, you're ready to create your first app.
              Here's a simple example of setting up an Express server:
            </p>
            <ol>
              <li>
                <b>Create an app.js file: </b>In your project directory, create
                a new file named app.js.
              </li>
              <li>
                <b>Import Express: </b>Open app.js and import Express by adding
                the following line at the top:
              </li>
              <code>const express = require('express');</code>
              <li>
                <b>Create an Express app: </b>Initialize an Express app by
                calling express() and storing it in a variable:
              </li>
              <li>
                <b>Define a Route: </b>Let's define a simple route that responds
                with "Hello, Express!" when you access the root URL ("/"):
              </li>
              <code>
                app.get('/', (req, res) => curlybracOpen
                <br />
                res.send('Hello, Express!');
                <br />
                curlybracClose);
              </code>
              <li>
                <b>Start the Server: </b>Finally, start the Express server by
                specifying a port number. For example, to run the server on port
                3000:
              </li>
              <code>
                const PORT = 3000;
                <br />
                app.listen(PORT, () => curlybracOpen
                <br />
                console.log(`Server is running on port $(PORT)`);
                <br />
                curlybracClose);
              </code>
            </ol>
            <h3>Running Your Express App</h3>
            <p>
              To run your Express app, open your terminal or command prompt and
              navigate to the directory containing app.js. Then run the
              following command:
            </p>
            <code>node app.js</code>
            <p>
              You should see the message "Server is running on port 3000" in the
              console. Now, open your web browser and visit
              http://localhost:3000. You should see the "Hello, Express!"
              message displayed in your browser.
            </p>
            <p>
              Congratulations, you've successfully set up and created your first
              Express.js application! This is just the beginning. From here, you
              can explore the various features of Express.js to build more
              complex web applications, APIs, and services. Happy coding!
            </p>
          </article>
        </section>
        {/* Add more sections as needed */}
        <section className="main-section" id="Routing_Expressjs">
          <header>Routing in Express.js</header>
          <article>
            <p>
              Routing is a fundamental concept in web development that allows
              you to define how your application responds to different URLs and
              HTTP methods. Express.js provides a powerful and flexible routing
              system that makes it easy to define routes and handle requests. In
              this section, you'll learn how to set up routes in Express.js and
              handle various types of requests.
            </p>
            <h3>Defining Routes</h3>
            <p>
              Express.js allows you to define routes using the HTTP methods (
              <b>GET, POST, PUT, DELETE, etc.</b>) and the URL paths. Here's how
              you can define a simple route:
            </p>
            <code>
              const express = require('express');
              <br />
              const app = express();
              <br />
              <br />
              // Define a GET route for the root URL
              <br />
              app.get('/', (req, res) => curlybracOpen
              <br />
              res.send('Hello, this is the homepage!');
              <br />
              curlybracClose);
            </code>
            <h3>Route Parameters</h3>
            <p>
              You can also define routes with dynamic segments using parameters.
              Parameters are placeholders in the URL path that match any value.
              You can access these values using the req.params object. For
              example:
            </p>
            <code>
              // Define a route with a parameter
              <br />
              app.get('/users/:id', (req, res) => curlybracOpen
              <br />
              const userId = req.params.id;
              <br />
              res.send(`Fetching user with ID
              $curlybracOpen(userId)curlybracClose`);
              <br />
              curlybracClose);
            </code>
            <h3>Handling Multiple Route Handlers</h3>
            <p>
              Express.js allows you to attach multiple route handlers to a
              single route. This is useful for breaking down the handling of
              different aspects of a request. Each handler can call the next()
              function to pass control to the next handler in line. For example:
            </p>
            <code>
              // Handling multiple route handlers
              <br />
              app.get('/example', (req, res, next) => curlybracOpen
              <br />
              console.log('First handler');
              <br />
              next();
              <br />
              curlybracClose, (req, res) => curlybracOpen
              <br />
              console.log('Second handler');
              <br />
              res.send('Multiple handlers example');
              <br />
              curlybracClose);
            </code>
            <h3>Route Middleware</h3>
            <p>
              Middleware functions are functions that have access to the request
              and response objects, and can modify them or perform additional
              operations before passing control to the next middleware function
              or route handler. Middleware can be used for tasks like
              authentication, logging, and more. Here's an example of using
              middleware:
            </p>
            <code>
              // Middleware function const logMiddleware = (req, res, next) =>
              curlybracOpen
              <br />
              console.log('Request received at:', new Date().toLocaleString());
              <br />
              next();
              <br />
              curlybracClose;
              <br />
              <br />
              // Using middleware for a specific route
              <br />
              app.get('/protected', logMiddleware, (req, res) => curlybracOpen
              <br />
              res.send('Protected route');
              <br />
              curlybracClose);
            </code>
            <h3>Route Order and Precedence</h3>
            <p>
              Route order matters in Express.js. Routes are matched in the order
              they are defined. If a request matches multiple routes, the first
              matching route is executed. For this reason, more specific routes
              should be defined before more general ones.
            </p>
            <code>
              // Define a specific route before a general route
              <br />
              app.get('/users/:id', (req, res) => curlybracOpen
              <br />
              // Handle user by ID
              <br />
              curlybracClose);
              <br />
              <br />
              app.get('/users', (req, res) => curlybracOpen
              <br />
              // Handle all users
              <br />
              curlybracClose);
            </code>
            <h3>Route Groups and Modularization</h3>
            <p>
              As your application grows, you can organize routes into separate
              files and use Express's Router to create route modules. This helps
              keep your codebase clean and maintainable. Here's a basic example:
            </p>
            <p>In routes.js:</p>
            <code>
              const express = require('express');
              <br />
              const router = express.Router();
              <br />
              <br />
              router.get('/', (req, res) => curlybracOpen
              <br />
              res.send('Welcome to the routes module!');
              <br />
              curlybracClose);
              <br />
              module.exports = router;
            </code>
            <p>In app.js:</p>
            <code>
              const routes = require('./routes');
              <br />
              app.use('/routes', routes);
            </code>
            <p>
              Routing is a crucial aspect of building web applications and APIs
              with Express.js. With its flexibility and ease of use, Express.js
              makes it simple to define, manage, and handle routes to create
              powerful and dynamic web applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="HTTP_methods">
          <header>HTTP Methods in Express.js</header>
          <article>
            <p>
              HTTP methods, also known as HTTP verbs, play a significant role in
              defining the actions that a server can perform on resources.
              Express.js provides a convenient way to handle different HTTP
              methods and their associated functionalities. In this section,
              we'll explore how to use various HTTP methods in Express.js to
              build robust and interactive web applications.
            </p>
            <h3>GET Method</h3>
            <p>
              The GET method is used to retrieve data from the server. It's
              often used to fetch resources, such as web pages, images, or data.
              In Express.js, you can define a GET route using the app.get()
              function:
            </p>
            <code>
              app.get('/products', (req, res) => curlybracOpen
              <br />
              // Fetch and send a list of products
              <br />
              curlybracClose);
            </code>
            <h3>POST Method</h3>
            <p>
              The POST method is used to submit data to be processed by the
              server. It's commonly used for creating new resources or
              submitting forms. You can handle POST requests in Express.js using
              the app.post() function:
            </p>
            <code>
              app.post('/submit', (req, res) => curlybracOpen
              <br />
              // Process submitted data and respond
              <br />
              curlybracClose);
            </code>
            <h3>PUT Method</h3>
            <p>
              The PUT method is used to update existing resources on the server.
              It's often used to modify data. To handle PUT requests in
              Express.js, you can use the app.put() function:
            </p>
            <code>
              app.put('/update/:id', (req, res) => curlybracOpen
              <br />
              const itemId = req.params.id;
              <br />
              // Update the item with the specified ID
              <br />
              curlybracClose);
            </code>
            <h3>DELETE Method</h3>
            <p>
              The DELETE method is used to request the removal of a resource
              from the server. It's used for deleting data. Express.js allows
              you to handle DELETE requests using the app.delete() function:
            </p>
            <code>
              app.delete('/delete/:id', (req, res) => curlybracOpen
              <br />
              const itemId = req.params.id;
              <br />
              // Delete the item with the specified ID
              <br />
              curlybracClose);
            </code>
            <h3>Other HTTP Methods</h3>
            <p>
              In addition to the standard GET, POST, PUT, and DELETE methods,
              Express.js supports other HTTP methods such as PATCH, OPTIONS,
              HEAD, and more. You can use corresponding functions like
              app.patch(), app.options(), and app.head() to handle these
              methods.
            </p>
            <h3>Handling Multiple Methods</h3>
            <p>
              You can define multiple route handlers for different HTTP methods
              on the same route. This is known as method chaining. Each method
              handler responds to a specific HTTP method:
            </p>
            <code>
              app.route('/item/:id')
              <br />
              .get((req, res) => curlybracOpen
              <br />
              // Retrieve item by ID
              <br />
              curlybracClose)
              <br />
              .put((req, res) => curlybracOpen
              <br />
              // Update item by ID
              <br />
              curlybracClose)
              <br />
              .delete((req, res) => curlybracOpen
              <br />
              // Delete item by ID
              <br />
              curlybracClose);
            </code>
            <h3>Middleware for Methods</h3>
            <p>
              Express.js allows you to attach middleware specifically to certain
              HTTP methods. This enables you to execute specific logic before or
              after a particular HTTP method is processed:
            </p>
            <code>
              app.get('/secure', authMiddleware, (req, res) => curlybracOpen
              <br />
              // Only accessible after authentication
              <br />
              curlybracClose);
            </code>
            <p>
              HTTP methods are the building blocks of RESTful APIs and web
              applications. By effectively utilizing Express.js's routing and
              method-handling capabilities, you can create powerful and
              well-structured applications that respond appropriately to various
              types of client requests.
            </p>
          </article>
        </section>
        <section className="main-section" id="URL_building">
          <header>URL Building in Express.js</header>
          <article>
            <p>
              In Express.js, constructing URLs is an essential part of building
              web applications. Properly generated URLs are not only
              user-friendly but also crucial for maintaining a consistent and
              predictable application structure. Express.js provides tools and
              methods to dynamically generate URLs that correspond to various
              routes and resources. In this section, we'll explore how to build
              URLs effectively using Express.js.
            </p>
            <h1>URL Parameters</h1>
            <p>
              URL parameters are dynamic segments within a URL that allow you to
              pass data to your route handlers. Express.js allows you to define
              routes with placeholders denoted by a colon (:) followed by a
              parameter name. These parameters are then accessible in the
              req.params object in your route handler:
            </p>
            <code>
              app.get('/user/:id', (req, res) => curlybracOpen
              <br />
              const userId = req.params.id;
              <br />
              // Fetch user data based on userId
              <br />
              curlybracClose);
            </code>
            <h3>Query Parameters</h3>
            <p>
              Query parameters are additional parameters passed in the URL after
              a question mark (?). They are typically used to provide optional
              or additional information to a route. In Express.js, you can
              access query parameters through the req.query object:
            </p>
            <code>
              app.get('/search', (req, res) => curlybracOpen
              <br />
              const searchTerm = req.query.q;
              <br />
              // Perform search using searchTerm
              <br />
              curlybracClose);
            </code>
            <h3>Generating URLs</h3>
            <p>
              Express.js provides a mechanism to generate URLs dynamically based
              on route patterns and parameters. This is particularly useful to
              ensure that your application's URLs remain consistent and are not
              hard-coded throughout your codebase. The url() function is
              commonly used for generating URLs:
            </p>
            <code>
              const url = require('url');
              <br />
              <br />
              app.get('/profile/:username', (req, res) => curlybracOpen
              <br />
              const profileUrl = url.format(curlybracOpen
              <br />
              protocol: req.protocol,
              <br />
              host: req.get('host'),
              <br />
              pathname: '/profile/' + req.params.username
              <br />
              curlybracClose);
              <br />
              // Generate a dynamic profile URL
              <br />
              curlybracClose);
            </code>
            <h3>Named Routes</h3>
            <p>
              Named routes are a convenient way to assign names to specific
              routes in your application. This makes it easier to generate URLs
              based on route names rather than hard-coding the paths. Express.js
              supports naming routes using the app.route() function:
            </p>
            <code>
              app.route('/dashboard')
              <br />
              .get((req, res) => curlybracOpen
              <br />
              // Display dashboard
              <br />
              curlybracClose)
              <br />
              .post((req, res) => curlybracOpen
              <br />
              // Update dashboard data
              <br />
              curlybracClose)
              <br />
              .put((req, res) => curlybracOpen
              <br />
              // Replace dashboard content
              <br />
              curlybracClose);
            </code>
            <h3>Query String Building</h3>
            <p>
              When constructing URLs with query parameters, it's crucial to
              properly encode the parameter values to handle special characters
              and spaces. Express.js provides the querystring module for
              building query strings:
            </p>
            <code>
              const querystring = require('querystring');
              <br />
              <br />
              const queryParams = curlybracOpenr
              <br />
              search: 'express.js',
              <br />
              page: 1<br />
              curlybracClose;
              <br />
              <br />
              const queryString = querystring.stringify(queryParams);
              <br />
              // Results in 'search=express.js&page=1'
            </code>
            <p>
              Building URLs in Express.js involves understanding the dynamics of
              route parameters, query parameters, and URL structure. By using
              the provided tools and methods, you can ensure that your
              application's URLs are consistent, user-friendly, and easy to
              maintain, contributing to an enhanced user experience and a
              well-organized codebase.
            </p>
          </article>
        </section>
        <section className="main-section" id="middleware">
          <header>Middleware in Express.js</header>
          <article>
            <p>
              Middleware plays a crucial role in the Express.js framework,
              enabling you to enhance the functionality of your application by
              executing code between the request and response cycle. In simple
              terms, middleware functions are functions that have access to the
              request and response objects, and the ability to modify them or
              execute additional tasks before the final response is sent to the
              client.
            </p>
            <p>
              Express.js middleware functions are executed in the order they are
              defined. They can be used for a wide range of tasks, such as
              logging, authentication, data validation, error handling, and
              more. Middleware functions can be applied globally to the entire
              application or locally to specific routes.
            </p>
            <h3>Creating Middleware</h3>
            <p>
              Middleware functions in Express.js are created using the app.use()
              method or by specifying them directly in route handlers. A
              middleware function takes three parameters: request, response, and
              next. The next parameter is a callback function that signals when
              the middleware has completed its task, allowing the next
              middleware function or route handler to be executed.
            </p>
            <code>
              app.use((req, res, next) => curlybracOpen
              <br />
              // Perform middleware tasks
              <br />
              console.log('Middleware executed');
              <br />
              // Call next to move to the next middleware or route handler
              <br />
              next();
              <br />
              curlybracClose);
            </code>
            <h1>Order of Execution</h1>
            <p>
              As mentioned earlier, the order in which middleware functions are
              defined determines their execution sequence. For instance, if you
              want a specific middleware to run before others, make sure to
              define it before the others in your code.
            </p>
            <h3>Middleware Stacks</h3>
            <p>
              Express.js allows you to create stacks of middleware functions.
              Middleware functions within a stack will be executed in the order
              they are defined. This is particularly useful when you want to
              group related middleware together.
            </p>
            <code>
              const authenticationMiddleware = (req, res, next) => curlybracOpen
              <br />
              // Check if user is authenticated
              <br />
              if (userAuthenticated) curlybracOpen
              <br />
              next(); // Proceed to the next middleware
              <br />
              curlybracClose else curlybracOpen
              <br />
              res.status(401).send('Unauthorized');
              <br />
              curlybracClose
              <br />
              curlybracClose;
              <br />
              <br />
              app.use(authenticationMiddleware);
              <br />
              <br />
              app.get('/dashboard', (req, res) => curlybracOpen
              <br />
              // This route will only be accessible if user is authenticated
              <br />
              res.send('Welcome to the dashboard');
              <br />
              curlybracClose);
            </code>
            <h3>Error Handling Middleware</h3>
            <p>
              Error handling middleware is a specialized type of middleware that
              is executed when an error occurs during the request-response
              cycle. These middleware functions have four parameters (err, req,
              res, and next), and they can be defined after your route handlers.
            </p>
            <code>
              app.get('/profile/:username', (req, res, next) => curlybracOpen
              <br />
              // Fetch user data based on username
              <br />
              if (userDataFound) curlybracOpen
              <br />
              next(); // Proceed to the next middleware or route handle
              <br />
              curlybracClose else curlybracOpen
              <br />
              const error = new Error('User not found');
              <br />
              next(error); // Pass the error to the error handling middleware
              <br />
              curlybracClose
              <br />
              curlybracClose);
              <br />
              <br />
              app.use((err, req, res, next) => curlybracOpen
              <br />
              // Handle and log errors here
              <br />
              res.status(500).send('Internal Server Error');
              <br />
              curlybracClose);
            </code>
            <p>
              Middleware is a powerful feature of Express.js that enables you to
              modularize and enhance your application's functionality in a
              structured manner. By utilizing middleware, you can separate
              concerns, improve code readability, and ensure consistent behavior
              across your routes. Whether it's authentication, validation,
              logging, or custom functionality, middleware empowers you to build
              robust and flexible web applications with Express.js.
            </p>
          </article>
        </section>
        <section className="main-section" id="templating">
          <header>Templating in Express.js</header>
          <article>
            <p>
              Templating engines are a vital component in building dynamic web
              applications using Express.js. They allow you to generate HTML
              pages dynamically by embedding dynamic data within templates.
              Express.js supports a variety of templating engines that
              facilitate the separation of logic and presentation, making your
              code more organized and maintainable.
            </p>
            <br />
            <h3>Popular Templating Engines</h3>
            <br />
            <ol>
              <li>
                <b>EJS (Embedded JavaScript):</b> EJS is a widely used
                templating engine for Express.js. It enables you to embed
                JavaScript code directly within your HTML templates, allowing
                you to generate dynamic content easily. EJS templates are files
                with the .ejs extension and can be used to inject data into
                HTML.
              </li>
              <li>
                <b>Pug (formerly Jade):</b> Pug is another popular templating
                engine that focuses on simplicity and readability. It uses
                indentation to define the structure of HTML elements, which can
                lead to more concise and elegant templates.
              </li>
              <li>
                <b>Handlebars:</b> Handlebars provides a flexible syntax for
                creating templates. It uses placeholders and helpers to
                dynamically replace content in your HTML templates. Handlebars
                templates are especially suited for scenarios where you want to
                reuse templates across different pages.
              </li>
            </ol>
            <br />
            <h3>Using Templating Engines with Express.js</h3>
            <br />
            <p>
              To use a templating engine with Express.js, you need to set up the
              engine as a view engine using the app.set() method. Here's an
              example using the EJS templating engine:
            </p>
            <br />
            <code>
              const express = require('express');
              <br />
              const app = express();
              <br />
              <br />
              // Set EJS as the view engine
              <br />
              app.set('view engine', 'ejs');
              <br />
              <br />
              // Define a route that renders an EJS template
              <br />
              app.get('/', (req, res) => curlybracOpen
              <br />
              const data = curlybracOpen message: 'Hello, Express!'
              curlybracClose; res.render('index', data); // Renders
              views/index.ejs
              <br />
              curlybracClose);
              <br />
              <br />
              app.listen(3000, () => curlybracOpen
              <br />
              console.log('Server started on port 3000');
              <br />
              curlybracClose);
              <br />
            </code>
            <br />
            <p>
              In this example, the res.render() method is used to render an EJS
              template named index.ejs. The data object curlybracOpen message:
              'Hello, Express!' curlybracClose is passed to the template,
              allowing you to inject dynamic content into the template.
            </p>
            <br />
            <h3>Advantages of Templating</h3>
            <ul>
              <li>
                <b>Separation of Concerns: </b>Templating engines encourage a
                clear separation between the presentation layer (HTML) and the
                application logic, making your codebase more organized and
                maintainable.
              </li>
              <li>
                <b>Code Reusability: </b>Templating engines allow you to create
                reusable components and layouts, reducing code duplication and
                promoting consistent design across your application.
              </li>
              <li>
                <b>Dynamic Content: </b>With templating engines, you can easily
                generate dynamic content based on data from the server or user
                input.
              </li>
            </ul>
            <br />
            <p>
              Templating engines are a crucial tool for building dynamic and
              data-driven web applications using Express.js. They simplify the
              process of rendering dynamic HTML and enable you to create
              interactive and responsive user interfaces.
            </p>
          </article>
        </section>
        <section className="main-section" id="database">
          <header>Database Integration in Express.js</header>
          <article>
            <br />
            <p>
              Database integration is a fundamental aspect of web development,
              and Express.js offers various options for seamlessly integrating
              databases into your applications. Databases allow you to store,
              manage, and retrieve data, making your application capable of
              handling user information, content, and more. Express.js supports
              a range of databases, both relational and NoSQL, enabling you to
              choose the best fit for your project's requirements.
            </p>
            <br />
            <h3>Database Options in Express.js</h3>
            <br />
            <ol>
              <li>
                <b>SQL Databases (Relational):</b>
                <ul>
                  <li>
                    <b>MySQL: </b>MySQL is an open-source relational database
                    management system. Express.js can use libraries like mysql2
                    to connect to MySQL databases, allowing you to store and
                    retrieve structured data effectively.
                  </li>
                  <li>
                    <b>PostgreSQL: </b>PostgreSQL is a powerful and extensible
                    open-source relational database system. Express.js can use
                    packages like pg to interact with PostgreSQL databases and
                    handle complex data relationships.
                  </li>
                </ul>
              </li>
              <li>
                <b>NoSQL Databases:</b>
                <ul>
                  <li>
                    <b>MongoDB: </b>
                    MongoDB is a popular NoSQL database that stores data in
                    JSON-like documents. Express.js, in conjunction with
                    libraries like mongoose, provides an elegant way to interact
                    with MongoDB databases, making it suitable for flexible and
                    scalable data storage.
                  </li>
                  <li>
                    <b>Redis: </b>
                    Redis is an in-memory data structure store, often used as a
                    cache or session store. Express.js can work with Redis using
                    packages like redis for efficient caching and managing data
                    that needs to be quickly accessible.
                  </li>
                </ul>
              </li>
            </ol>
            <br />
            <h3>Working with Databases in Express.js</h3>
            <br />
            <ol>
              <li>
                <b>Connecting to Databases:</b>
                Depending on the type of database you choose, you'll need to
                install the relevant Node.js packages. For example, to work with
                MySQL, you would install the mysql2 package using npm:
                <code>npm install mysql2</code>
                Then, you can establish a database connection in your Express.js
                application using the connection configuration and methods
                provided by the package.
              </li>
              <li>
                <b>Creating Models and Schemas:</b>
                When using relational databases like MySQL or PostgreSQL, you'll
                often define models and schemas that represent the structure of
                your data. For NoSQL databases like MongoDB, you would define
                schemas using libraries like Mongoose, which allow you to
                specify the data's structure and validation rules.
              </li>
              <li>
                <b>CRUD Operations:</b>
                Express.js enables you to perform CRUD (Create, Read, Update,
                Delete) operations on your database. Depending on the database
                type, you would use SQL queries, Mongoose methods, or other
                database-specific APIs to manipulate data.
              </li>
              <li>
                <b>Middleware and Authentication:</b>
                Databases are often integrated with authentication and
                authorization mechanisms. Express.js middleware can be used to
                manage user sessions, ensure data security, and handle user
                authentication tokens.
              </li>
              <li>
                <b>Error Handling and Promises:</b>
                Handling errors and using promises is essential when working
                with databases in Express.js. Promises or async/await can be
                employed to manage asynchronous operations and gracefully handle
                errors that might arise during database interactions.
              </li>
            </ol>
            <br />
            <h3>Advantages of Database Integration</h3>
            <br />
            <ul>
              <li>
                <b>Data Persistence: </b> Databases enable your application to
                store data between sessions, allowing users to interact with
                saved content or information.
              </li>
              <li>
                <b>Structured Data: </b> Relational databases provide structured
                data storage with well-defined relationships between tables.
                NoSQL databases offer flexibility for storing unstructured or
                semi-structured data.
              </li>
              <li>
                <b>Scalability: </b>Depending on your choice of database, you
                can scale your application to accommodate growing amounts of
                data and users.
              </li>
              <li>
                <b>Data Integrity: </b> Database systems offer features like
                transactions and constraints that ensure data integrity and
                prevent data corruption.
              </li>
            </ul>
            <br />
            <p>
              Integrating databases into your Express.js application empowers it
              with the ability to store, manage, and retrieve data efficiently,
              making your application more powerful and user-centric. Choose the
              database type that aligns with your project's needs and leverage
              Express.js to seamlessly interact with and manipulate your data.
            </p>
          </article>
        </section>
        <section className="main-section" id="cookies">
          <header>Cookies in Express.js</header>
          <article>
            <p>
              Cookies are small pieces of data that a server sends to a user's
              browser to store information about the user's interaction with a
              website. Express.js provides built-in mechanisms for working with
              cookies, allowing you to manage user sessions, remember user
              preferences, and track user behavior.
            </p>
            <br />
            <h3>Working with Cookies in Express.js</h3>
            <br />
            <ol>
              <li>
                <b>Cookie Installation:</b>
                Express.js doesn't require any additional packages to work with
                cookies, as cookie handling is built into the core framework.
              </li>
              <li>
                <b>Setting Cookies:</b>
                You can set cookies using the res.cookie() method. This method
                takes two or more arguments: the cookie's name and value.
                Additional options, such as expiration time and secure flags,
                can also be passed.
                <code>
                  app.get('/set-cookie', (req, res) => curlybracOpen
                  <br />
                  res.cookie('username', 'john_doe', curlybracOpen maxAge:
                  900000, httpOnly: true curlybracClose);
                  <br />
                  res.send('Cookie set!');
                  <br />
                  curlybracClose);
                </code>
              </li>
              <li>
                <b>Reading Cookies: </b>
                Cookies sent by the client are automatically parsed by
                Express.js and stored in the req.cookies object. You can access
                these cookies using their names as keys.
                <code>
                  app.get('/get-cookie', (req, res) => curlybracOpen
                  <br />
                  const username = req.cookies.username;
                  <br />
                  res.send(`Welcome back,
                  $curlybracOpen(username)curlybracClose!`);
                  <br />
                  curlybracClose);
                </code>
              </li>
              <li>
                <b>Deleting Cookies:</b>
                To remove a cookie, you can use the res.clearCookie() method.
                Provide the cookie's name as the argument.
                <code>
                  app.get('/logout', (req, res) => curlybracOpen
                  <br />
                  res.clearCookie('username');
                  <br />
                  res.send('Logged out successfully!');
                  <br />
                  curlybracClose);
                </code>
              </li>
              <li>
                <b>Session Management:</b>
                Cookies are often used to manage user sessions. You can store a
                unique session identifier in a cookie, and associate it with
                session data stored on the server or in a database.
              </li>
            </ol>
            <br />
            <h3>Advantages of Using Cookies</h3>
            <br />
            <ul>
              <li>
                <b>Session Persistence:</b>
                Cookies allow you to persist user sessions, enabling users to
                stay logged in across multiple requests.
              </li>
              <li>
                <b>Personalization:</b>
                Cookies enable you to remember user preferences, such as
                language settings or theme choices.
              </li>
              <li>
                <b>Tracking and Analytics:</b>
                Cookies can be used to track user behavior and gather analytics
                data about user interactions with your website.
              </li>
              <li>
                <b>State Management:</b>
                Cookies are an essential tool for managing the state of a user's
                interaction with your application.
              </li>
            </ul>
            <br />
            <h3>Security Considerations</h3>
            <ul>
              <li>
                <b>Secure and HttpOnly Flags:</b> Using the secure flag ensures
                that cookies are only transmitted over secure (HTTPS)
                connections. The httpOnly flag prevents JavaScript from
                accessing cookies, enhancing security against cross-site
                scripting (XSS) attacks.
              </li>
              <li>
                <b>Tokenization:</b> In cases where sensitive data needs to be
                stored, you might store a token in a cookie and maintain the
                actual data on the server or in a database.
              </li>
            </ul>
            <br />
            <p>
              Cookies provide a versatile way to maintain user state and
              personalize user experiences. However, it's important to implement
              proper security measures and consider user privacy concerns when
              working with cookies in your Express.js applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="sessions">
          <header>Sessions in Express.js</header>
          <article>
            <p>
              Sessions are a crucial aspect of web applications, allowing you to
              manage user-specific data across multiple requests. In Express.js,
              you can easily implement sessions to maintain user state, store
              temporary data, and provide personalized experiences.
            </p>
            <br />
            <h3>Implementing Sessions in Express.js</h3>
            <b></b>
            <ol>
              <li>
                <b>Session Middleware:</b>
                To work with sessions, you need to use a session middleware. A
                popular choice is express-session, which simplifies session
                management.
                <code>npm install express-session</code>
              </li>
              <li>
                <b>Initializing Session Middleware:</b>
                Include the session middleware in your Express app, configuring
                it with a secret key and other options.
                <code>
                  const session = require('express-session');
                  <br />
                  app.use(session(curlybracOpen
                  <br />
                  secret: 'your-secret-key',
                  <br />
                  resave: false,
                  <br />
                  saveUninitialized: true
                  <br />
                  curlybracClose));
                </code>
              </li>
              <li>
                <b>Storing and Accessing Session Data:</b>
                Once the session middleware is set up, you can store and access
                session-specific data using the req.session object.
                <code>
                  app.get('/set-session', (req, res) => curlybracOpen
                  <br />
                  req.session.username = 'john_doe';
                  <br />
                  res.send('Session data set!');
                  <br />
                  curlybracClose);
                  <br />
                  <br />
                  app.get('/get-session', (req, res) => curlybracOpen
                  <br />
                  const username = req.session.username;
                  <br />
                  res.send(`Hello, $curlybracOpen(username)curlybracClose!`);
                  <br />
                  curlybracClose);
                </code>
              </li>
              <li>
                <b>Destroying Sessions:</b>
                To end a user's session, you can use the req.session.destroy()
                method.
                <code>
                  app.get('/logout', (req, res) => curlybracOpen <br />
                  req.session.destroy(); <br />
                  res.send('Logged out successfully!'); <br />
                  curlybracClose);
                </code>
              </li>
            </ol>
            <h3>Benefits of Using Sessions</h3>
            <br />
            <ul>
              <li>
                <b>State Persistence:</b>
                Sessions allow you to maintain user-specific data across
                multiple requests without the need for cookies or query
                parameters.
              </li>
              <li>
                <b>User Authentication: </b>Sessions are commonly used to manage
                user logins and track authenticated users.
              </li>
              <li>
                <b>Customizable Data Storage: </b>You can store any type of data
                in sessions, making them versatile for managing user
                preferences, shopping carts, and more.
              </li>
              <li>
                <b>Security: </b>Session data is stored on the server, reducing
                the risk of sensitive information exposure compared to storing
                data in cookies.
              </li>
            </ul>
            <br />
            <h3>Session Management Considerations</h3>
            <ul>
              <li>
                <b>Session Expiry: </b>Configure session timeouts to ensure
                sessions expire after a period of inactivity, enhancing
                security.
              </li>
              <li>
                <b>Session Storage: </b>By default, session data is stored in
                memory. For production applications, consider using external
                storage solutions like Redis or databases for improved
                scalability.
              </li>
              <li>
                <b>Session Security: </b>Ensure that session data is encrypted
                and that sensitive data is not stored directly in sessions.
              </li>
            </ul>
            <br />
            <p>
              Sessions are a powerful tool for enhancing user experiences,
              maintaining application state, and providing personalization. When
              using sessions, it's essential to strike a balance between
              functionality and security by implementing best practices.
            </p>
          </article>
        </section>
        <section className="main-section" id="authentication">
          <header>Authentication in Express.js</header>
          <article>
            <p>
              Authentication is a critical aspect of web applications, ensuring
              that users are who they claim to be. In Express.js, you can
              implement various authentication strategies to secure your
              application and protect sensitive user data.
            </p>
            <br />
            <h3>Authentication Strategies in Express.js</h3>
            <br />
            <ol>
              <li>
                <b>Passport.js:</b>
                Passport is a popular authentication middleware for Express.js.
                It supports a wide range of authentication methods, including
                local (username/password), OAuth, and OpenID.
                <code>npm install passport passport-local</code>
                <br />
                Set up Passport and configure authentication strategies:
                <code>
                  const passport = require('passport');
                  <br />
                  const LocalStrategy = require('passport-local').Strategy;
                  <br />
                  <br />
                  passport.use(new LocalStrategy((username, password, done) =>
                  curlybracOpen
                  <br />
                  // Validate user credentials and call done() with success or
                  failure
                  <br />
                  curlybracClose));
                  <br />
                  <br />
                  app.use(passport.initialize());
                  <br />
                  app.use(passport.session());
                </code>
              </li>
              <li>
                <b>JWT (JSON Web Tokens):</b>
                JWT is a stateless authentication method that relies on
                digitally signed tokens. It's suitable for building APIs and
                single-page applications.
                <code>npm install jsonwebtoken</code>
                <br />
                Implement JWT-based authentication:
                <code>
                  const jwt = require('jsonwebtoken');
                  <br />
                  <br />
                  const secretKey = 'your-secret-key';
                  <br />
                  <br />
                  app.post('/login', (req, res) => curlybracOpen
                  <br />
                  // Validate user credentials and generate a JWT token
                  <br />
                  const token = jwt.sign(curlybracOpen username: 'john_doe'
                  curlybracClose, secretKey);
                  <br />
                  res.json(curlybracOpen token curlybracClose);
                  <br />
                  curlybracClose);
                  <br />
                  <br />
                  app.get('/protected', authenticateJWT, (req, res) =>
                  curlybracOpen
                  <br />
                  // Access granted only if the JWT is valid
                  <br />
                  res.send('Protected content');
                  <br />
                  curlybracClose);
                  <br />
                  <br />
                  function authenticateJWT(req, res, next) curlybracOpen
                  <br />
                  const token = req.header('Authorization');
                  <br />
                  if (!token) return res.sendStatus(401);
                  <br />
                  <br />
                  jwt.verify(token, secretKey, (err, user) => curlybracOpen
                  <br />
                  if (err) return res.sendStatus(403);
                  <br />
                  req.user = user;
                  <br />
                  next();
                  <br />
                  curlybracClose);
                  <br />
                  curlybracClose
                </code>
              </li>
            </ol>
            <br />
            <h3>Benefits of Authentication in Express.js</h3>
            <br />
            <ul>
              <li>
                <b>User Identity: </b>Authentication ensures that users are
                identified correctly, preventing unauthorized access.
              </li>
              <li>
                <b>Data Security: </b>Sensitive user data remains protected,
                safeguarding privacy and confidentiality.
              </li>
              <li>
                <b>Authorization: </b>Along with authentication, Express.js
                allows you to implement authorization mechanisms to control user
                access to specific resources.
              </li>
              <li>
                <b>Customizability: </b>Express.js provides flexibility in
                implementing authentication mechanisms tailored to your
                application's needs.
              </li>
            </ul>
            <br />
            <h3>Authentication Best Practices</h3>
            <ul>
              <li>
                <b>Secure Password Storage: </b>Use strong cryptographic hashing
                algorithms to securely store user passwords.
              </li>
              <li>
                <b>Session Management: </b>Implement secure session management
                to prevent session hijacking and fixation attacks.
              </li>
              <li>
                <b>Two-Factor Authentication (2FA): </b> Consider implementing
                2FA to add an extra layer of security.
              </li>
              <li>
                <b>Rate Limiting and Brute Force Protection: </b>Implement rate
                limiting and protection against brute force attacks to prevent
                unauthorized access attempts.
              </li>
              <li>
                <b>HTTPS: </b>Always use HTTPS to encrypt data transmitted
                between the client and server.
              </li>
            </ul>
            <br />
            <p>
              Authentication is a cornerstone of web application security. By
              implementing proper authentication strategies and following best
              practices, you can ensure that your application remains protected
              and trusted by users.
            </p>
          </article>
        </section>
        <section className="main-section" id="restfulApi">
          <header>RESTful API Development with Express.js</header>
          <article>
            <p>
              Representational State Transfer (REST) is an architectural style
              for designing networked applications. In Express.js, you can
              create RESTful APIs that follow REST principles, enabling
              efficient communication between clients and servers.
            </p>
            <br />
            <h3>RESTful API Principles</h3>
            <br />
            <ol>
              <li>
                <b>Resource-Oriented: </b>Design your API around resources,
                which are entities that can be accessed and manipulated using
                HTTP methods.
              </li>
              <li>
                <b>Stateless: </b>Each request from the client to the server
                must contain all the information needed to understand and
                process the request. The server doesn't store any client context
                between requests.
              </li>
              <li>
                <b>HTTP Methods: </b>Use HTTP methods (GET, POST, PUT, DELETE)
                to perform operations on resources. For example:
                <ul>
                  <li>GET: Retrieve a resource</li>
                  <li>POST: Create a new resource</li>
                  <li>PUT: Update an existing resource</li>
                  <li>DELETE: Remove a resource</li>
                </ul>
              </li>
              <li>
                <b>Uniform Interface: </b>Use consistent naming conventions and
                standardized HTTP methods for operations. URLs should be
                predictable and intuitive.
              </li>
            </ol>
            <br />
            <h3>Creating a RESTful API with Express.js</h3>
            <br />
            <ol>
              <li>
                <b>Setup: </b>Install Express.js and set up a basic server.
              </li>
              <code>npm install express</code>
              <br />
              <code>
                const express = require('express');
                <br />
                const app = express();
                <br />
                const port = 3000;
                <br />
                <br />
                app.listen(port, () => curlybracOpen
                <br />
                console.log(`Server listening on port
                $curlybracOpen(port)curlybracClose`);
                <br />
                curlybracClose);
              </code>
              <li>
                <b>Defining Routes: </b>Define routes for different resources
                and their corresponding HTTP methods
              </li>
              <code>
                app.get('/api/products', (req, res) => curlybracOpen
                <br />
                // Retrieve and return a list of products
                <br />
                curlybracClose);
                <br />
                <br />
                app.post('/api/products', (req, res) => curlybracOpen
                <br />
                // Create a new product
                <br />
                curlybracClose);
                <br />
                <br />
                app.put('/api/products/:id', (req, res) => curlybracOpen
                <br />
                // Update a product by ID
                <br />
                curlybracClose);
                <br />
                <br />
                app.delete('/api/products/:id', (req, res) => curlybracOpen
                <br />
                // Delete a product by ID
                <br />
                curlybracClose);
              </code>
              <li>
                <b>Data Storage: </b> Implement data storage, such as a database
                or in-memory data structures, to manage resources.
              </li>
              <li>
                <b>Middleware</b>Use middleware to handle request validation,
                authentication, and authorization.
              </li>
              <li>
                <b>Response Handling: </b>Respond with appropriate status codes
                and JSON data in the response body.
              </li>
            </ol>
            <br />
            <h3>Benefits of RESTful APIs in Express.js</h3>
            <ul>
              <li>
                <b>Scalability: </b>RESTful APIs are well-suited for building
                scalable applications, as they follow a stateless architecture.
              </li>
              <li>
                <b>Interoperability: </b>EST APIs can be consumed by various
                clients, including web browsers, mobile apps, and other servers.
              </li>
              <li>
                <b>Clear Separation of Concerns: </b>The separation of concerns
                in RESTful design makes APIs easy to understand and maintain.
              </li>
              <li>
                <b>Caching: </b>RESTful APIs can leverage HTTP caching
                mechanisms to improve performance.
              </li>
              <li>
                <b>API Documentation: </b>Following RESTful principles often
                leads to clear and self-documenting APIs.
              </li>
            </ul>
            <br />
            <ul>
              <li>
                <b>Use Nouns for Resource Naming: </b>
                Use nouns for resource names in the URL (e.g., /api/products).
              </li>
              <li>
                <b>Use HTTP Status Codes: </b>
                Use appropriate HTTP status codes (e.g., 200 for success, 404
                for not found) to convey the result of the request.{" "}
              </li>
              <li>
                <b>Versioning: </b>
                Consider versioning your API to maintain backward compatibility
                as it evolves. HATEOAS: Implement Hypermedia as the Engine of
                Application State (HATEOAS) to provide links to related
                resources in the API responses.{" "}
              </li>
            </ul>
            <br />
            <p>
              Creating RESTful APIs with Express.js allows you to design
              efficient and standardized communication between clients and
              servers. By following REST principles, you can build scalable and
              interoperable web services that are easy to consume and maintain
            </p>
          </article>
        </section>
        <section className="main-section" id="Reference">
          <header>Reference</header>
          <article>
            <p>To Know more about Expressjs jump to the below  <a href="https://www.tutorialspoint.com/expressjs/index.htm">Website</a></p>
           
          </article>
          </section>
      </main>
    </div>
  );
};

export default ExpressJs;
