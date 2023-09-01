import React from "react";
import "../../Frameworks/style.css";
import { useNavigate } from "react-router-dom";

const Ruby = () => {
  let navigate = useNavigate();
  return (
    <div className="body">
      <nav id="navbar">
        <button className="button-28" onClick={() => navigate(-1)}>
          &larr;Back
        </button>
        <header>Ruby On Rails Documentation</header>
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
            <a className="nav-link" href="#Framework">
              Ruby on Rails - Framework
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Direc_Struc">
              Ruby on Rails - Directory Structure
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Examples">
              Ruby on Rails - Examples
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Database_Setup">
              Ruby on Rails - Database Setup
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Active_Records">
              Ruby on Rails - Active Records
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Migration">
              Ruby on Rails - Migration
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Reference">
              Ruby on Rails - Reference
            </a>
          </li>
          {/* Add more sections as needed */}
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction to Ruby On Rails</header>
          <article>
            <p>
              Ruby on Rails, often referred to as Rails, is a powerful and
              elegant web framework written in the Ruby programming language.
              It's designed to simplify the development of web applications by
              providing a robust set of tools and conventions that promote rapid
              development and maintainability.
            </p>

            <h2>Key Features</h2>
            <p>
              Ruby on Rails is built on the principles of Convention over
              Configuration and Don't Repeat Yourself, enabling developers to
              focus on writing code rather than configuration. Some key features
              of Rails include:
            </p>
            <ul>
              <li>
                Model-View-Controller (MVC) Architecture: Separates application
                components for better organization and maintainability.
              </li>
              <li>
                Active Record: A powerful ORM (Object-Relational Mapping) system
                for working with databases.
              </li>
              <li>
                Action Pack: Handles routing, controllers, and views, allowing
                for clean and RESTful web applications.
              </li>
              <li>
                Scaffolding: Automatic generation of basic code to jumpstart
                application development.
              </li>
              <li>
                Gems: Extend functionality through libraries available in the
                RubyGems package manager.
              </li>
              <li>
                Testing Frameworks: Built-in support for testing using tools
                like MiniTest and RSpec.
              </li>
            </ul>

            <h2>Getting Started</h2>
            <p>
              If you're new to Ruby on Rails, the official documentation
              provides a comprehensive guide to getting started. You'll learn
              how to set up your development environment, create a new Rails
              application, and explore the basics of MVC development.
            </p>

            <h2>Community and Resources</h2>
            <p>
              Ruby on Rails has a vibrant and supportive community. You can find
              answers, tutorials, and discussions on forums, blogs, and social
              media platforms. The official Ruby on Rails website and
              documentation serve as valuable resources for all skill levels.
            </p>

            <p>
              Whether you're building a simple web app or a complex enterprise
              solution, Ruby on Rails empowers developers to create dynamic,
              scalable, and maintainable applications with ease.
            </p>
          </article>
        </section>
        <section className="main-section" id="Getting_Started">
          <header>Getting Started with Ruby On Rails</header>
          <article>
            <h2>Introduction</h2>
            <p>
              Ruby on Rails, often simply called Rails, is a powerful web
              application framework written in the Ruby programming language.
              It's designed to make building web applications faster and easier
              by following the convention over configuration (CoC) and don't
              repeat yourself (DRY) principles.
            </p>

            <h2>Installation</h2>
            <p>
              To start using Ruby on Rails, you need to have Ruby and its
              package manager, RubyGems, installed on your system. Then, you can
              install Rails using the following command:
            </p>
            <pre>
              <code>gem install rails</code>
            </pre>

            <h2>Creating a New Application</h2>
            <p>
              Once Rails is installed, you can create a new application using
              the <code>rails new</code> command. Replace "myapp" with your
              desired application name:
            </p>
            <pre>
              <code>rails new myapp</code>
            </pre>

            <h2>Running the Server</h2>
            <p>
              Navigate into your application directory and start the development
              server using the <code>rails server</code> or <code>rails s</code>{" "}
              command:
            </p>
            <pre>
              <code>cd myapp rails server</code>
            </pre>
            <p>
              Your application will be accessible at{" "}
              <code>http://localhost:3000</code>.
            </p>

            <h2>Creating Your First Controller and View</h2>
            <p>
              Rails follows the MVC (Model-View-Controller) architecture. Create
              your first controller and view using the following commands:
            </p>
            <pre>
              <code>rails generate controller Welcome index</code>
            </pre>
            <p>
              This creates a controller named "Welcome" with an action "index".
              You can then edit the generated view file at{" "}
              <code>app/views/welcome/index.html.erb</code>.
            </p>

            <h2>Routes</h2>
            <p>
              Routes in Rails define how URLs map to controller actions. You can
              configure routes in the <code>config/routes.rb</code> file.
            </p>
            <pre>
              <code>
                Rails.application.routes.draw do
                <br />
                get 'welcome/index'
                <br />
                root 'welcome#index'
                <br />
                end
              </code>
            </pre>

            <h2>Conclusion</h2>
            <p>
              This quick overview gives you a taste of Ruby on Rails and its
              basic concepts. From here, you can explore the comprehensive Rails
              documentation to delve deeper into building feature-rich web
              applications with ease.
            </p>
          </article>
        </section>
        <section className="main-section" id="Framework">
          <header>Ruby on Rails - Framework</header>
          <article>
            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Convention over Configuration (CoC):</strong> Rails
                encourages sensible defaults, reducing the need for repetitive
                configuration. This allows developers to focus on coding rather
                than setting up project details.
              </li>
              <li>
                <strong>Don't Repeat Yourself (DRY):</strong> Rails promotes the
                DRY principle by providing tools to eliminate redundancy in
                code, such as generators for common tasks.
              </li>
              <li>
                <strong>Active Record:</strong> Rails includes the Active Record
                ORM (Object-Relational Mapping) that simplifies database
                interaction. It provides an intuitive way to work with databases
                using Ruby classes and objects.
              </li>
              <li>
                <strong>Action Pack:</strong> The Action Pack component handles
                requests and responses, including routing, controllers, and view
                rendering. It supports RESTful architecture for building APIs.
              </li>
              <li>
                <strong>Scaffolding:</strong> Rails offers scaffolding, a quick
                way to generate code for CRUD (Create, Read, Update, Delete)
                operations, helping developers jump-start their projects.
              </li>
              <li>
                <strong>Testing:</strong> Rails includes built-in testing tools
                like RSpec and Test::Unit for automated testing, ensuring the
                stability and quality of your application.
              </li>
              <li>
                <strong>Security:</strong> Rails incorporates security measures
                by default, protecting against common web vulnerabilities like
                SQL injection and Cross-Site Scripting (XSS).
              </li>
            </ul>
          </article>
        </section>
        <section className="main-section" id="Direc_Struc">
          <header>Ruby on Rails - Directory Structure</header>
          <article>
            <p>
              Ruby on Rails follows a convention-over-configuration approach,
              which includes a well-defined directory structure for organizing
              your application's code and assets.
            </p>

            <h2>App Directory</h2>
            <p>
              The <code>app</code> directory contains the core of your
              application:
            </p>
            <ul>
              <li>
                <code>controllers</code>: Contains controller classes to handle
                HTTP requests.
              </li>
              <li>
                <code>models</code>: Holds model classes representing database
                tables and business logic.
              </li>
              <li>
                <code>views</code>: Contains view templates for rendering HTML
                and other formats.
              </li>
            </ul>

            <h2>Config Directory</h2>
            <p>
              The <code>config</code> directory stores application
              configuration:
            </p>
            <ul>
              <li>
                <code>routes.rb</code>: Defines URL routing and maps URLs to
                controller actions.
              </li>
              <li>
                <code>database.yml</code>: Configures database connection
                settings.
              </li>
              <li>
                <code>application.rb</code>: General application configuration.
              </li>
            </ul>

            <h2>Public Directory</h2>
            <p>
              The <code>public</code> directory contains static files:
            </p>
            <ul>
              <li>
                <code>assets</code>: Stores images, stylesheets, and JavaScript
                files for the frontend.
              </li>
            </ul>

            <h2>Lib Directory</h2>
            <p>
              The <code>lib</code> directory holds custom libraries and modules:
            </p>
            <ul>
              <li>
                <code>tasks</code>: Stores Rake tasks.
              </li>
            </ul>

            <h2>Test Directory</h2>
            <p>
              The <code>test</code> directory includes test suites:
            </p>
            <ul>
              <li>
                <code>controllers</code>: Contains functional tests for
                controllers.
              </li>
              <li>
                <code>models</code>: Holds unit tests for models.
              </li>
              <li>
                <code>helpers</code>: Stores helper tests for view helpers.
              </li>
            </ul>

            <h2>Other Directories</h2>
            <p>
              Other important directories include <code>tmp</code> (temporary
              files), <code>log</code> (application logs), and{" "}
              <code>vendor</code> (third-party code).
            </p>

            <p>
              This concise overview of the directory structure in Ruby on Rails
              gives you an understanding of how to organize your codebase. For
              more detailed information, refer to the official Ruby on Rails
              documentation.
            </p>
          </article>
        </section>
        <section className="main-section" id="Examples">
          <header>Ruby on Rails - Examples</header>
          <article>
            <h2>Active Record Example</h2>
            <p>
              Active Record is Ruby on Rails' Object-Relational Mapping (ORM)
              framework, allowing you to interact with databases. Here's an
              example:
            </p>
            <pre>
              <code>
                # Define a model class
                <br />
                class Product &lt; ApplicationRecord
                <br />
                end
                <br />
                <br />
                # Create a new product
                <br />
                product = Product.new(name: 'Widget', price: 10.99)
                <br />
                product.save
              </code>
            </pre>

            <h2>Routing Example</h2>
            <p>
              Ruby on Rails provides a powerful routing system to define how
              URLs map to controllers and actions. Here's a simple routing
              example:
            </p>
            <pre>
              <code>
                # Define a route
                <br />
                get '/products/:id', to: 'products#show'
                <br />
                <br />
                # Create a corresponding controller action
                <br />
                def show
                <br />
                @product = Product.find(params[:id])
                <br />
                end
              </code>
            </pre>

            <h2>View Example</h2>
            <p>
              Ruby on Rails uses ERB (Embedded Ruby) templates for views. Here's
              a basic example:
            </p>
            <pre>
              <code>
                &lt;!-- app/views/products/show.html.erb --&gt;
                <br />
                &lt;h1&gt;&lt;%= @product.name %&gt;&lt;/h1&gt;
                <br />
                &lt;p&gt;Price: &lt;%= @product.price %&gt;&lt;/p&gt;
                <br />
              </code>
            </pre>

            <h2>Controller Example</h2>
            <p>
              Controllers handle user requests and interact with models and
              views. Here's a simple controller action:
            </p>
            <pre>
              <code>
                # app/controllers/products_controller.rb
                <br />
                class ProductsController &lt; ApplicationController
                <br />
                def index
                <br />
                @products = Product.all
                <br />
                end
                <br />
                end
              </code>
            </pre>

            <h2>Migration Example</h2>
            <p>
              Migrations are used to manage database schema changes over time.
              Here's an example:
            </p>
            <pre>
              <code>
                # Generate a migration
                <br />
                rails generate migration AddDescriptionToProducts
                description:string
                <br />
                <br />
                # Run the migration
                <br />
                rake db:migrate
              </code>
            </pre>

            <p>
              These examples provide a glimpse into different aspects of Ruby on
              Rails, showcasing how to work with Active Record, routing, views,
              controllers, and migrations. For more comprehensive details and
              advanced techniques, refer to the official Ruby on Rails
              documentation.
            </p>
          </article>
        </section>
        <section className="main-section" id="Database_Setup">
          <header>Ruby on Rails - Database_Setup</header>
          <article>
            <h2>Configuring the Database</h2>
            <p>
              Ruby on Rails makes database setup seamless and flexible. It uses
              the <code>config/database.yml</code> file to define database
              connections for different environments.
            </p>

            <h3>Database Configuration</h3>
            <p>
              Open <code>config/database.yml</code> and specify the database
              adapter, database name, username, and password for each
              environment (development, test, production).
            </p>
            <pre>
              <code>
                development:
                <br />
                adapter: postgresql
                <br />
                database: myapp_development
                <br />
                username: myapp_user
                <br />
                password: secret
                <br />
                <br />
                test:
                <br />
                adapter: sqlite3
                <br />
                database: db/test.sqlite3
                <br />
                production:
                <br />
                adapter: mysql2
                <br />
                database: <br />
                username: myapp_user
                <br />
                password: &lt;%= ENV['MYAPP_DATABASE_PASSWORD'] %&gt;
              </code>
            </pre>

            <h3>Creating the Database</h3>
            <p>
              Run <code>rails db:create</code> to create the specified
              databases. For the development environment, this command creates
              the <code>myapp_development</code> database.
            </p>

            <h3>Running Migrations</h3>
            <p>
              Use <code>rails db:migrate</code> to apply pending migrations and
              set up the database schema. This command creates necessary tables
              and columns.
            </p>

            <h3>Seeding Data</h3>
            <p>
              If you want to populate your database with initial data, create a{" "}
              <code>seeds.rb</code> file in the <code>db/</code> directory. Run{" "}
              <code>rails db:seed</code> to populate the database with the
              defined data.
            </p>

            <h2>Database Adapters</h2>
            <p>
              Rails supports multiple database adapters such as PostgreSQL,
              MySQL, SQLite, and more. Choose an adapter that suits your
              project's requirements.
            </p>

            <h3>Switching Adapters</h3>
            <p>
              You can switch adapters by updating the <code>adapter</code> field
              in <code>database.yml</code>. However, ensure compatibility with
              the new adapter's syntax and features.
            </p>

            <p>
              This concise section covers the essential steps to set up and
              configure your database in Ruby on Rails. For more detailed
              information and advanced database configurations, refer to the
              official Ruby on Rails documentation on databases.
            </p>
          </article>
        </section>
        <section className="main-section" id="Active_Records">
          <header>Ruby on Rails - Active Records</header>
          <article>
            <h2>Introduction to Active Records</h2>
            <p>
              Active Record is the heart of data handling in Ruby on Rails. It
              provides an Object-Relational Mapping (ORM) framework that enables
              you to work with databases using Ruby objects.
            </p>

            <h3>Model-View-Controller (MVC)</h3>
            <p>
              Active Record is an integral part of the MVC architecture in
              Rails. Models represent the data structures and business logic of
              your application. Active Record facilitates the interaction
              between models and databases.
            </p>

            <h2>Creating Models</h2>
            <p>
              Creating a model in Rails is simple and follows conventions. Use
              the <code>rails generate model</code> command to generate a new
              model:
            </p>
            <pre>
              <code>rails generate model User name:string email:string</code>
            </pre>

            <h2>CRUD Operations</h2>
            <p>
              Active Record provides a set of methods to perform CRUD (Create,
              Read, Update, Delete) operations on your models:
            </p>
            <pre>
              <code>
                # Create user = User.new(name: 'John', email:
                'john@example.com') user.save # Read user = User.find_by(name:
                'John') # Update user.update(name: 'Johnny') # Delete
                user.destroy
              </code>
            </pre>

            <h2>Validations</h2>
            <p>
              Active Record includes built-in validation methods to ensure data
              integrity:
            </p>
            <pre>
              <code>
                class User &lt; ApplicationRecord
                <br />
                validates :name, presence: true
                <br />
                validates :email, uniqueness: true
                <br />
                end
                <br />
              </code>
            </pre>

            <h2>Associations</h2>
            <p>
              Active Record simplifies managing relationships between models:
            </p>
            <pre>
              <code>
                class User &lt; ApplicationRecord
                <br />
                has_many :posts
                <br />
                end
                <br />
                <br />
                class Post &lt; ApplicationRecord
                <br />
                belongs_to :user
                <br />
                end
              </code>
            </pre>

            <h2>Query Interface</h2>
            <p>
              Active Record provides a powerful query interface to retrieve and
              manipulate data:
            </p>
            <pre>
              <code>
                users = User.where("created_at &gt; ?", 1.day.ago)
                <br />
                <br />
                johns_posts = User.find_by(name: 'John').posts
              </code>
            </pre>

            <h2>Migrations</h2>
            <p>Migrations in Rails allow you to modify your database schema:</p>
            <pre>
              <code>
                rails generate migration AddLastNameToUsers last_name:string
              </code>
            </pre>

            <h2>Summary</h2>
            <p>
              Active Record is a core component of Rails that streamlines
              database interaction, making it easier to manage models,
              relationships, validations, and more. By following Rails
              conventions, you can quickly build robust and maintainable
              applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="Migration">
          <header>Ruby on Rails - Migration</header>
          <article>
            <h2>Database Migrations</h2>
            <p>
              Database migrations in Ruby on Rails are a way to manage changes
              to your database schema over time. They provide a version control
              system for your database structure.
            </p>

            <h3>Creating Migrations</h3>
            <p>
              To create a new migration, you use the{" "}
              <code>rails generate migration</code> command. Migrations are
              stored in the <code>db/migrate</code> directory.
            </p>
            <pre>
              <code>
                rails generate migration AddTitleToArticles title:string
              </code>
            </pre>

            <h3>Running Migrations</h3>
            <p>
              Use the <code>rails db:migrate</code> command to apply pending
              migrations and update the database schema.
            </p>
            <pre>
              <code>rails db:migrate</code>
            </pre>

            <h3>Rolling Back Migrations</h3>
            <p>
              If you need to undo a migration, you can use the{" "}
              <code>rails db:rollback</code> command. This reverts the last
              migration.
            </p>
            <pre>
              <code>rails db:rollback</code>
            </pre>

            <h3>Schema Files</h3>
            <p>
              Migrations generate schema files in the <code>db/schema.rb</code>{" "}
              or <code>db/structure.sql</code> file. These files define the
              current state of your database.
            </p>

            <h3>Managing Columns</h3>
            <p>
              Migrations allow you to add, modify, or remove columns from your
              database tables.
            </p>

            <h3>Model and Database Consistency</h3>
            <p>
              It's important to keep your models and database schema in sync.
              Migrations help maintain this consistency by updating both the
              database structure and the corresponding model classes.
            </p>

            <p>
              Database migrations are a fundamental tool in Ruby on Rails for
              managing your database schema changes. They ensure a structured
              approach to evolving your application's data model.
            </p>
          </article>
        </section>
        <section className="main-section" id="Reference">
          <header>Reference</header>
          <article>
            <p>
              To Know more about Ruby On Rails jump to the below{" "}
              <a href="https://www.tutorialspoint.com/ruby-on-rails/index.htm">
                Website
              </a>
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};
export default Ruby;
