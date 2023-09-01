import React from "react";
import "../../Frameworks/style.css";
import { useNavigate } from "react-router-dom";

const Flask = () => {
  let navigate = useNavigate();
  return (
    <div className="body">
      <nav id="navbar">
        <button className="button-28" onClick={() => navigate(-1)}>
          &larr;Back
        </button>
        <header>Flask Documentation</header>
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
            <a className="nav-link" href="#Environment">
              Flask - Environment
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Application">
              Flask - Application
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Routing">
              Flask - Routing
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Variable_rules">
              Flask - Variable Rules
            </a>
          </li>
          <li>
            <a className="nav-link" href="#URL_Building">
              Flask - URL Building
            </a>
          </li>
          <li>
            <a className="nav-link" href="#HTTP_Methods">
              Flask - HTTP Methods
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Reference">
              Flask - Reference
            </a>
          </li>
          {/* Add more sections as needed */}
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction to Flask</header>
          <article>
            <p>
              Flask is a micro web framework for Python, designed to be simple,
              lightweight, and flexible. It provides the essentials you need to
              build web applications without imposing unnecessary complexity.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Micro:</strong> Flask is minimalistic and focuses on the
                core functionalities required to create web applications.
              </li>
              <li>
                <strong>Flexibility:</strong> Flask doesn't dictate a specific
                way of doing things. You have the freedom to choose components
                and libraries that fit your project's needs.
              </li>
              <li>
                <strong>Extensible:</strong> While Flask's core is lightweight,
                it offers various extensions for features like database
                integration, form handling, and more.
              </li>
              <li>
                <strong>Werkzeug and Jinja2:</strong> Flask is built on the
                Werkzeug WSGI toolkit and uses Jinja2 templating engine,
                ensuring efficient routing and powerful templates.
              </li>
            </ul>
          </article>
        </section>
        <section className="main-section" id="Getting_Started">
          <header>Getting Started with Flask</header>
          <article>
            <p>To get started with Flask, you can install it using pip:</p>
            <pre>
              <code>pip install Flask</code>
            </pre>

            <p>After installation, you can create a simple Flask app:</p>
            <pre>
              <code>
                from flask import Flask
                <br />
                app = Flask(__name__)
                <br />
                <br />
                @app.route('/')
                <br />
                def hello():
                <br />
                return "Hello, Flask!"
                <br />
                <br />
                if __name__ == '__main__':
                <br />
                app.run()
              </code>
            </pre>

            <h2>Further Resources</h2>
            <p>
              This brief introduction provides a glimpse into the world of
              Flask. For more comprehensive information, explore the official
              Flask documentation and tutorials to build dynamic and efficient
              web applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="Environment">
          <header>Flask - Environment</header>
          <article>
            <p>
              Understanding the environment in which your Flask application runs
              is essential for successful development and deployment.
            </p>

            <h2>Virtual Environments</h2>
            <p>
              Using virtual environments is a best practice in Flask
              development. They create isolated Python environments for your
              project, preventing conflicts between packages.
            </p>
            <pre>
              <code>
                # Creating a virtual environment
                <br />
                python -m venv venv
                <br />
                <br />
                # Activating the virtual environment (Windows)
                <br />
                venv\Scripts\activate
                <br />
                <br />
                # Activating the virtual environment (Unix/macOS)
                <br />
                source venv/bin/activate
              </code>
            </pre>

            <h2>Configuration</h2>
            <p>
              Flask uses configuration to manage settings. You can use the{" "}
              <code>app.config</code> object to store and access configuration
              variables.
            </p>
            <pre>
              <code>
                app = Flask(__name__)
                <br />
                app.config['DEBUG'] = True
              </code>
            </pre>

            <h2>Environment Variables</h2>
            <p>
              Sensitive information and configuration details should be stored
              in environment variables rather than hardcoding them in your code.
            </p>
            <pre>
              <code>
                # Setting environment variables (Windows)
                <br />
                set FLASK_APP=app.py
                <br />
                set FLASK_ENV=development
                <br />
                <br />
                # Setting environment variables (Unix/macOS)
                <br />
                export FLASK_APP=app.py
                <br />
                export FLASK_ENV=development
              </code>
            </pre>

            <h2>Deployment</h2>
            <p>
              When deploying a Flask application, ensure that you update the
              environment variables to reflect the production environment.
              Services like Heroku and AWS provide ways to manage these
              variables securely.
            </p>

            <p>
              This succinct overview covers the essential aspects of working
              with the environment in Flask. For further details, consult the
              Flask documentation on application setup and deployment.
            </p>
          </article>
        </section>
        <section className="main-section" id="Application">
          <header> Flask - Application</header>
          <article>
            <h2>Creating a Flask Application</h2>
            <p>
              A Flask application is a Python module that defines a web
              application using the Flask framework. It consists of routes,
              views, templates, and other components.
            </p>

            <h3>Initializing an App</h3>
            <p>
              To create a Flask app, import the Flask class and create an
              instance.
            </p>
            <pre>
              <code>
                from flask import Flask
                <br />
                app = Flask(__name__)
              </code>
            </pre>

            <h2>Defining Routes</h2>
            <p>
              Routes are URL paths that map to specific views or functions in
              your app.
            </p>

            <h3>Basic Route</h3>
            <p>
              Define a route using the <code>@app.route()</code> decorator.
            </p>
            <pre>
              <code>
                @app.route('/')
                <br />
                def home():
                <br />
                return 'Welcome to the Home Page!'
              </code>
            </pre>

            <h3>Dynamic Route</h3>
            <p>Pass parameters in routes for dynamic content.</p>
            <pre>
              <code>
                @app.route('/user/&lt;username&gt;')
                <br />
                def user_profile(username):
                <br />
                return f'Hello, `{"{"}`username `{"}"}`!'
              </code>
            </pre>

            <h2>Templates</h2>
            <p>Templates help you render HTML pages with dynamic data.</p>

            <h3>Rendering a Template</h3>
            <p>
              Use the <code>render_template()</code> function to render HTML
              templates.
            </p>
            <pre>
              <code>
                from flask import render_template
                <br />
                <br />
                @app.route('/profile/')
                <br />
                def profile():
                <br />
                user = `{"{"}`'username': 'John' `{"}"}`<br />
                return render_template('profile.html', user=user)
                <br />
              </code>
            </pre>

            <h2>Running the App</h2>
            <p>
              Run your Flask app using the <code>app.run()</code> method.
            </p>
            <pre>
              <code>
                if __name__ == '__main__':
                <br />
                app.run(debug=True)
              </code>
            </pre>

            <h2>Summary</h2>
            <p>
              Creating a Flask application involves defining routes, handling
              views, using templates, and running the app. Flask's simplicity
              and flexibility make it a great choice for building web
              applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="Routing">
          <header>Flask - Routing</header>
          <article>
            <h2>Defining Routes</h2>
            <p>
              Routing is a fundamental feature in Flask that maps URLs to view
              functions, allowing you to create dynamic and organized web
              applications.
            </p>

            <h3>Defining Routes</h3>
            <p>
              In Flask, you define routes using the <code>@app.route()</code>{" "}
              decorator. This decorator binds a URL pattern to a view function,
              determining what content is displayed when a specific URL is
              accessed.
            </p>
            <pre>
              <code>
                from flask import Flask
                <br />
                <br />
                app = Flask(__name__)
                <br />
                <br />
                @app.route('/')
                <br />
                def home(): return 'Welcome to the home page!'
              </code>
            </pre>

            <h3>Dynamic Routes</h3>
            <p>
              You can capture dynamic parts of URLs using angle brackets{" "}
              <code>&lt; &gt;</code>. These captured values are passed as
              arguments to the view function.
            </p>
            <pre>
              <code>
                @app.route('/user/&lt;username&gt;')
                <br />
                def profile(username):
                <br />
                return f'Hello,  `{"{"}`username `{"}"}`!'
              </code>
            </pre>

            <h3>HTTP Methods</h3>
            <p>
              You can specify the HTTP methods that a route should respond to
              using the <code>methods</code> parameter of the{" "}
              <code>@app.route()</code> decorator.
            </p>
            <pre>
              <code>
                @app.route('/post/', methods=['GET', 'POST'])
                <br />
                def create_post():
                <br />
                if request.method == 'POST':
                <br />
                # Handle post creation
                <br />
                pass
                <br />
                else:
                <br />
                # Display form for creating a post
                <br />
                pass
                <br />
              </code>
            </pre>

            <h3>URL Building</h3>
            <p>
              Flask provides the <code>url_for()</code> function to generate
              URLs based on route names. This is useful for creating links in
              templates and redirecting to specific routes.
            </p>
            <pre>
              <code>
                from flask import url_for
                <br />
                <br />
                @app.route('/about')
                <br />
                def about():
                <br />
                return 'About Us'
                <br />
                <br />
                about_url = url_for('about')
              </code>
            </pre>

            <h3>Route Ordering</h3>
            <p>
              Routes are matched in the order they are defined. The first
              matching route is used to handle the request. Be cautious with
              route ordering to avoid unexpected behavior.
            </p>

            <p>
              This concise section covers the essentials of routing in Flask,
              enabling you to create structured and responsive web applications.
              For more details and advanced routing features, consult the Flask
              documentation on URL Routing.
            </p>
          </article>
        </section>
        <section className="main-section" id="Variable_rules">
          <header>Flask - Variable Rules</header>
          <article>
            <p>
              Flask provides a powerful feature called "Variable Rules" that
              allows you to capture dynamic parts of URLs in your routes. This
              feature enables you to create flexible and dynamic web
              applications.
            </p>

            <h2>Defining Variable Rules</h2>
            <p>
              To define a route with variable rules, use angle brackets{" "}
              <code>&lt;&gt;</code> to mark the dynamic part of the URL. For
              example, <code>&lt;username&gt;</code> captures the username from
              the URL.
            </p>
            <pre>
              <code>
                @app.route('/user/&lt;username&gt;')
                <br />
                def user_profile(username):
                <br />
                return f'Hello, `{"{"}`username `{"}"}`!'
              </code>
            </pre>

            <h2>Accessing Captured Values</h2>
            <p>
              In the route function, you can define parameters that match the
              variable names in the route. Flask automatically captures the
              corresponding parts of the URL and passes them as arguments to the
              function.
            </p>

            <h2>Converter Types</h2>
            <p>
              Flask supports various converter types for variable rules, such as{" "}
              <code>string</code>, <code>int</code>, <code>float</code>, and{" "}
              <code>path</code>. You can specify the desired type in the route
              definition.
            </p>
            <pre>
              <code>
                @app.route('/product/&lt;int:product_id&gt;')
                <br />
                def product_details(product_id):
                <br />
                return f'Details of product `{"{"}`product_id `{"}"}`'
              </code>
            </pre>

            <h2>URL Building</h2>
            <p>
              You can generate URLs with captured values using the{" "}
              <code>url_for()</code> function. Provide the route function name
              and the captured values as arguments to generate the URL.
            </p>
            <pre>
              <code>url = url_for('user_profile', username='john_doe')</code>
            </pre>

            <h2>Benefits of Variable Rules</h2>
            <p>
              Variable Rules make your routes dynamic and adaptable, allowing
              you to create user-friendly and SEO-friendly URLs. This feature is
              particularly useful for building web applications that require
              personalized content and interactions.
            </p>

            <p>
              This concise section introduces the Variable Rules feature in
              Flask, empowering you to create dynamic routes that enhance the
              functionality and user experience of your web applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="URL_Building">
          <header>Flask - URL Building</header>
          <article>
            <h2>Generating URLs</h2>
            <p>
              URL building in Flask is a way to create URLs for different routes
              and views within your application. It's a crucial feature for
              creating dynamic and maintainable web applications.
            </p>

            <h3>
              URL Building using <code>url_for()</code>
            </h3>
            <p>
              The <code>url_for()</code> function is used to generate URLs for a
              specific route in Flask. It takes the name of the view function as
              an argument and can also accept any route parameters required.
            </p>
            <pre>
              <code>
                from flask import Flask, url_for
                <br />
                <br />
                app = Flask(__name__)
                <br />
                <br />
                @app.route('/')
                <br />
                def home():
                <br />
                return 'Welcome to the home page'
                <br />
                <br />
                @app.route('/user/&lt;username&gt;')
                <br />
                def user_profile(username):
                <br />
                return f'Hello, `{"{"}`username `{"}"}`'
                <br />
                <br />
                with app.test_request_context():
                <br />
                url_home = url_for('home')
                <br />
                url_user = url_for('user_profile', username='Alice')
                <br />
              </code>
            </pre>

            <h3>URL Parameters</h3>
            <p>
              If your route requires parameters, like the{" "}
              <code>user_profile()</code> example above, you can pass them as
              keyword arguments to <code>url_for()</code>.
            </p>

            <h3>Static Files</h3>
            <p>
              For static files like images, stylesheets, and JavaScript files,
              Flask also provides the <code>url_for()</code> function to
              generate URLs. Just use the name of the static file as the
              argument.
            </p>

            <h3>URL Building Benefits</h3>
            <p>
              Using <code>url_for()</code> ensures that if you change a URL in
              your app, you don't need to manually update all the places where
              that URL is referenced. It makes your code more maintainable and
              less error-prone.
            </p>

            <h3>Conclusion</h3>
            <p>
              The URL Building feature in Flask simplifies the process of
              generating URLs for different views and static files. It
              contributes to clean, dynamic, and reliable web application
              development.
            </p>
          </article>
        </section>
        <section className="main-section" id="HTTP_Methods">
          <header>Flask - HTTP Methods</header>
          <article>
            <h2>Handling Different HTTP Methods</h2>
            <p>
              Flask allows you to create routes that respond to different HTTP
              methods, such as GET, POST, PUT, and DELETE. This enables you to
              build versatile web applications that handle various types of
              requests.
            </p>

            <h3>Using the @app.route Decorator</h3>
            <p>
              To define routes for different HTTP methods, use the{" "}
              <code>@app.route</code> decorator with the <code>methods</code>{" "}
              parameter.
            </p>
            <pre>
              <code>
                from flask import Flask
                <br />
                <br />
                app = Flask(__name__)
                <br />
                @app.route('/submit', methods=['POST'])
                <br />
                def submit_form():
                <br />
                # Handle form submission logic here
                <br />
                return 'Form submitted successfully'
              </code>
            </pre>

            <h3>Commonly Used HTTP Methods</h3>
            <p>Flask supports commonly used HTTP methods:</p>
            <ul>
              <li>
                <code>GET</code>: Used for retrieving data.
              </li>
              <li>
                <code>POST</code>: Used for submitting data to be processed.
              </li>
              <li>
                <code>PUT</code>: Used for updating existing resources.
              </li>
              <li>
                <code>DELETE</code>: Used for deleting resources.
              </li>
            </ul>

            <h3>Handling Multiple HTTP Methods</h3>
            <p>
              A single route can handle multiple HTTP methods by specifying them
              in the <code>methods</code> parameter.
            </p>
            <pre>
              <code>
                @app.route('/article', methods=['GET', 'POST'])
                <br />
                def article():
                <br />
                if request.method == 'GET':
                <br />
                # Retrieve article details
                <br />
                return 'Article details'
                <br />
                elif request.method == 'POST':
                <br />
                # Handle article submission
                <br />
                return 'Article submitted'
              </code>
            </pre>

            <h3>Using request.method</h3>
            <p>
              Within a route function, you can access the current HTTP method
              using <code>request.method</code>. This allows you to implement
              different logic based on the method.
            </p>

            <h3>Verbs and Idempotence</h3>
            <p>
              It's important to understand the idempotence of HTTP methods. GET
              and PUT are idempotent, meaning that multiple identical requests
              will have the same result as a single request. POST and DELETE are
              not guaranteed to be idempotent.
            </p>

            <p>
              This concise section introduces you to handling different HTTP
              methods in Flask. By leveraging the <code>@app.route</code>{" "}
              decorator and <code>request.method</code>, you can build flexible
              and powerful web applications that respond appropriately to
              various types of requests.
            </p>
          </article>
        </section>
        <section className="main-section" id="Reference">
          <header>Reference</header>
          <article>
            <p>
              To Know more about Flask jump to the below{" "}
              <a href="https://www.tutorialspoint.com/flask/index.htm">
                Website
              </a>
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};
export default Flask;
