import React from "react";
import "../../Frameworks/style.css";
import { useNavigate } from "react-router-dom";

const Django = () => {
  let navigate = useNavigate();
  return (
    <div className="body">
      <nav id="navbar">
        <button className="button-28" onClick={() => navigate(-1)}>
          &larr;Back
        </button>
        <header>Django Documentation</header>
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
              Django - Environment
            </a>
          </li>
          <li>
            <a className="nav-link" href="#CreatingProj">
              Django - Creating a Project
            </a>
          </li>
          <li>
            <a className="nav-link" href="#AppsLifeCycle">
              Django - Apps Life Cycle
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Admin_Interface">
              Django - Admin Interface
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Creating_Views">
              Django - Creating_Views
            </a>
          </li>
          <li>
            <a className="nav-link" href="#URL_Mapping">
              Django - URL_Mapping
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Reference">
              Django - Reference
            </a>
          </li>
          {/* Add more sections as needed */}
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction to Django</header>
          <article>
            <p>
              Welcome to the official documentation for Django, a high-level
              Python web framework designed to make web development fast,
              secure, and scalable. Django enables you to build web applications
              quickly by providing a robust foundation for everything from
              simple websites to complex, data-driven platforms.
            </p>
            <br />
            <h3>Key Features of Django:</h3>
            <ol>
              <li>
                <b>Versatility:</b>Django supports a wide range of web
                applications, from content management systems to e-commerce
                sites and beyond.
              </li>
              <li>
                <b>batteries-included:</b>Django comes with a rich set of tools
                and libraries for common web development tasks, reducing the
                need for external dependencies.
              </li>
              <li>
                <b>Security:</b> Django helps you build secure applications by
                handling common security issues such as SQL injection and
                cross-site scripting (XSS) automatically.
              </li>
              <li>
                <b>Scalability:</b>Django applications can scale smoothly as
                your traffic grows, thanks to a flexible architecture and
                extensive performance optimization options.
              </li>
              <li>
                <b>Community:</b>With a vibrant and active community, Django
                offers a wealth of resources, including packages, plugins, and
                community-driven support.
              </li>
            </ol>
            <br />
            <p>
              Whether you're a seasoned developer or just starting with web
              development, Django's well-structured documentation will guide you
              through the process of creating powerful web applications. Dive in
              and discover how Django can streamline your web development
              journey.
            </p>
          </article>
        </section>
        <section className="main-section" id="Getting_Started">
          <header>Getting Started with Django</header>
          <article>
            <p>
              Django is a powerful Python web framework that enables quick and
              secure web development. Follow these initial steps to begin
              working with Django:
            </p>
            <br />
            <ol>
              <li>
                <b>Install Python :</b>Ensure that you have Python installed on
                your computer. You can download Python from the official Python
                website.
              </li>
              <li>
                <b>Install Django :</b>Use the command pip install django to
                install Django. This command should be run in your command-line
                interface or terminal.
              </li>
              <li>
                <b>Create a Project :</b>Navigate to the directory where you
                want to create your Django project. Use the command django-admin
                startproject projectname to set up a new project. Replace
                "projectname" with your desired project name.
              </li>
              <li>
                <b>Run the Development Server :</b>Move into your project
                directory using the cd projectname command. Start the
                development server by running python manage.py runserver in the
                terminal. This server will host your Django application locally
                for testing and development.
              </li>
              <li>
                <b>Access the Admin Interface :</b>Django provides a built-in
                admin interface for managing your application's data. To access
                it, create a superuser account using python manage.py
                createsuperuser and then visit http://localhost:8000/admin/ in
                your web browser
              </li>
            </ol>
            <br />
            <p>
              These are the initial steps to kickstart your Django journey.
              Refer to the official Django documentation for comprehensive
              guides and tutorials that will help you build sophisticated web
              applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="Environment">
          <header>Django - Environment</header>
          <article>
            <p>
              Django is a high-level Python web framework that encourages rapid
              development and clean, pragmatic design. To effectively work with
              Django, it's important to set up the appropriate environment. Here
              are the key components you'll need:
            </p>

            <ol>
              <li>
                <strong>Python</strong>: Django is built on top of Python, so
                you'll need to have a compatible Python interpreter installed.
                Django supports Python 3.6 and later versions.
              </li>
              <li>
                <strong>Virtual Environment</strong>: It's recommended to create
                a virtual environment for your Django projects. This isolates
                your project's dependencies from the system-wide Python
                environment, ensuring better consistency and management.
              </li>
              <li>
                <strong>Django Installation</strong>: Once your virtual
                environment is active, install Django using pip, the Python
                package manager. Run the following command to install the latest
                version of Django:
                <code>pip install django</code>
              </li>
              <li>
                <strong>Text Editor or IDE</strong>: Choose a code editor or
                integrated development environment (IDE) of your preference.
                Popular choices include Visual Studio Code, PyCharm, Sublime
                Text, and Atom.
              </li>
              <li>
                <strong>Database System</strong>: Django supports multiple
                database systems, including PostgreSQL, MySQL, SQLite, and
                Oracle. Choose and set up a database system that best suits your
                project's needs.
              </li>
              <li>
                <strong>Version Control</strong>: Using version control tools
                like Git is essential for collaborative development and code
                management. It helps track changes and allows multiple
                developers to work on the same project efficiently.
              </li>
              <li>
                <strong>Web Browser</strong>: For testing and viewing your
                Django applications, you'll need a modern web browser. Chrome,
                Firefox, Edge, and Safari are commonly used browsers.
              </li>
              <li>
                <strong>Command-Line Tools</strong>: Familiarize yourself with
                command-line tools to navigate directories, run Python scripts,
                and manage Django projects. This is crucial for running
                migrations, managing superusers, and more.
              </li>
            </ol>

            <p>
              Setting up your Django environment correctly ensures a smooth
              development process and enables you to leverage the framework's
              powerful features effectively.
            </p>
          </article>
        </section>
        <section className="main-section" id="CreatingProj">
          <header>Django - Creating a Project</header>
          <article>
            <p>
              When you're ready to begin a new web application using Django,
              you'll need to create a project to organize your work. Follow
              these steps to create a new Django project:
            </p>

            <ol>
              <li>
                <strong>Open the Terminal:</strong> Start by opening your
                command-line terminal. Depending on your operating system, you
                might use the Command Prompt, Terminal, or a similar
                application.
              </li>
              <li>
                <strong>Navigate to Your Workspace:</strong> Use the{" "}
                <code>cd</code>
                command to navigate to the directory where you want to create
                your Django project. This could be your development workspace or
                any other location of your choice.
              </li>
              <li>
                <strong>Run the Command:</strong> In the terminal, use the{" "}
                <code>django-admin</code> command-line utility to create a new
                project. The basic syntax is:
                <pre>
                  <code>django-admin startproject projectname</code>
                </pre>
                Replace <code>projectname</code> with the name you want to give
                your project. This command will create a new directory with the
                same name as your project and set up the initial files and
                configurations.
                <br />
                <br />
                For example, if you want to create a project named "mywebapp,"
                you would use:
                <pre>
                  <code>django-admin startproject mywebapp</code>
                </pre>
              </li>
              <li>
                <strong>Verify the Structure:</strong> After running the
                command, you'll find a new directory with the same name as your
                project (in this case, "mywebapp"). Inside this directory,
                you'll see several files and folders that Django has created to
                set up your project's basic structure.
              </li>
              <li>
                <strong>Navigate into the Project Directory:</strong> Use the{" "}
                <code>cd</code> command again to navigate into the project
                directory that was just created. This is where you'll start
                building your Django application.
              </li>
              <li>
                <strong>Project Configuration:</strong> Inside the project
                directory, you'll find a file named <code>settings.py</code>.
                This file contains various configurations for your Django
                project, such as database settings, installed apps, and more.
                You'll often need to modify this file as your project develops.
              </li>
            </ol>

            <p>
              With these steps completed, you've successfully created a new
              Django project. From here, you can start building your application
              by creating Django apps, defining models, writing views, and
              setting up URL routing.
            </p>

            <p>
              Remember that the name you choose for your project (
              <code>projectname</code>
              in the command) should be descriptive and reflect the purpose of
              your application. Additionally, the Django project directory will
              serve as the main container for your application and will house
              various settings and configurations.
            </p>

            <p>
              Now you're ready to dive into Django development and turn your
              project idea into a reality!
            </p>
          </article>
        </section>
        <section className="main-section" id="AppsLifeCycle">
          <header>Django - Apps Life Cycle</header>
          <article>
            <p>
              The Django web framework follows a structured lifecycle that
              guides the behavior of web applications built with it. This
              lifecycle consists of various stages that help manage the
              request-response flow and the interaction with the database.
              Here's a concise overview of the key stages in Django's
              application lifecycle:
            </p>
            <ol>
              <li>
                <strong>Request Handling:</strong> When a user interacts with a
                Django web application by visiting a URL, a request is sent to
                the server. Django's URL dispatcher then maps the URL to a
                specific view function, which is responsible for processing the
                request.
              </li>
              <li>
                <strong>View Processing:</strong> The view function processes
                the incoming request. It can perform various tasks such as
                querying the database, processing data, and preparing the
                response. Views are the main components where business logic is
                implemented.
              </li>
              <li>
                <strong>Model Interaction:</strong> In the view processing
                stage, the application may interact with the database through
                Django's Object-Relational Mapping (ORM) system. Models
                represent the application's data structure and provide a
                high-level abstraction for working with the database.
              </li>
              <li>
                <strong>Template Rendering:</strong> Once the view has processed
                the data, it typically renders a template. Templates are HTML
                files with placeholders for dynamic data. The template engine
                replaces these placeholders with actual values, generating the
                final HTML response.
              </li>
              <li>
                <strong>Response Generation:</strong> After rendering the
                template, the view generates an HTTP response. This response
                includes the rendered HTML content along with any necessary HTTP
                headers, status codes, and cookies.
              </li>
              <li>
                <strong>Middleware Processing:</strong> Before the response is
                sent to the client, it passes through a series of middleware
                components. Middleware can add functionality to the request or
                response processing, such as authentication, security checks,
                and more.
              </li>
              <li>
                <strong>Sending the Response:</strong> Once the response is
                fully processed and middleware components have done their tasks,
                the final response is sent to the client's web browser.
              </li>
              <li>
                <strong>View Finishing:</strong> After sending the response,
                Django performs any cleanup operations required by the view.
                This could include releasing resources or handling any remaining
                tasks.
              </li>
              <li>
                <strong>Request-Response Cycle Completion:</strong> The
                request-response cycle is complete, and the application is ready
                to handle new incoming requests.
              </li>
              <li>
                <strong>Session Management:</strong> Throughout the lifecycle,
                Django manages user sessions, allowing applications to store and
                retrieve user-specific data across requests.
              </li>
              <li>
                <strong>Error Handling:</strong> Django provides mechanisms for
                handling errors and exceptions that may occur during various
                stages of the application lifecycle. Custom error pages can be
                defined to improve user experience.
              </li>
            </ol>
          </article>
        </section>
        <section className="main-section" id="Admin_Interface">
          <header>Django - Admin Interface</header>
          <article>
            <h2>Accessing the Admin Interface</h2>
            <p>
              To access the admin interface, simply add "/admin/" to the end of
              your application's URL. For example, if your application is
              running locally at "http://localhost:8000/", you can access the
              admin interface at "http://localhost:8000/admin/".
            </p>

            <h2>Customizing the Admin Interface</h2>
            <p>
              While the default admin interface is functional, you can easily
              customize it to match your application's branding and
              requirements. You can define admin classes for your models, which
              allow you to control the display of fields, filters, search
              capabilities, and more.
            </p>
            <pre>
              <code>
                from django.contrib <br />
                import admin from .models <br />
                import Article
                <br />
                class ArticleAdmin(admin.ModelAdmin): <br />
                list_display = ('title','author', 'publish_date',
                'is_published') list_filter = ('is_published',) <br />
                search_fields = ('title', 'author__username')
                <br />
                admin.site.register(Article, ArticleAdmin)
              </code>
            </pre>

            <h2>Adding Actions and Inline Editing</h2>
            <p>
              The admin interface also supports custom actions that can be
              performed on selected items. You can define actions in your admin
              classes to perform bulk actions on selected items, such as marking
              articles as published or unpublished.
            </p>
            <p>
              Additionally, you can use inline editing to manage related objects
              directly from the parent object's edit page. This is particularly
              useful for models with ForeignKey or ManyToManyField
              relationships.
            </p>

            <h2>Security Considerations</h2>
            <p>
              While the admin interface is a powerful tool, it's important to
              restrict access to authorized users. Django provides built-in
              authentication and permission systems, allowing you to control who
              can access the admin interface and perform specific actions.
            </p>
            <p>To ensure the security of your admin interface, be sure to:</p>
            <ul>
              <li>
                Limit access to authorized users by setting appropriate
                permissions.
              </li>
              <li>Use strong and unique passwords for admin users.</li>
              <li>
                Keep your Django version and packages up to date to receive
                security updates.
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Django's admin interface streamlines the process of managing your
              application's data and offers flexibility in customization. By
              understanding its features and applying security best practices,
              you can create a robust admin interface that meets your
              application's needs.
            </p>
          </article>
        </section>
        <section className="main-section" id="Creating_Views">
          <header>Django - Creating Views</header>
          <article>
            <p>
              Views in Django are responsible for handling HTTP requests and
              returning appropriate responses. A view is typically a Python
              function that takes an HTTP request as input and returns an HTTP
              response.
            </p>

            <h2>1. Define the View Function:</h2>
            <p>
              Create a Python function in your Django app's{" "}
              <code>views.py</code> file. This function will handle the logic
              for your view.
            </p>
            <pre>
              <code>
                from django.http import HttpResponse
                <br />
                <br />
                def my_view(request):
                <br />
                # Your view logic here
                <br />
                return HttpResponse("Hello, World!")
              </code>
            </pre>

            <h2>2. Map URLs to Views:</h2>
            <p>
              Associate your view with a URL pattern in your app's{" "}
              <code>urls.py</code> file using Django's URL routing system.
            </p>
            <pre>
              <code>
                from django.urls import path
                <br />
                from . import views
                <br />
                <br />
                urlpatterns = [<br />
                path('my-url/', views.my_view, name='my-view'),
                <br />]
              </code>
            </pre>

            <h2>3. Rendering Templates (Optional):</h2>
            <p>
              If your view needs to render an HTML template, use the{" "}
              <code>render</code> function to combine a template with a context
              and return an <code>HttpResponse</code>.
            </p>
            <pre>
              <code>
                from django.shortcuts import render
                <br />
                <br />
                def my_template_view(request):
                <br />
                context = curlybracOpen'message': 'Hello, World!'curlybracClose
                <br />
                return render(request, 'my_template.html', context)
                <br />
              </code>
            </pre>

            <h2>4. Accessing Request Data:</h2>
            <p>
              You can access data from the request, such as GET or POST
              parameters, using the <code>request</code> object.
            </p>
            <pre>
              <code>
                def my_param_view(request):
                <br />
                param_value = request.GET.get('param_name')
                <br /># Your logic using param_value
              </code>
            </pre>

            <h2>5. Returning Responses:</h2>
            <p>
              Views can return various types of responses, such as HTML content,
              JSON data, or redirects.
            </p>
            <pre>
              <code>
                from django.http import JsonResponse, HttpResponseRedirect
                <br />
                <br />
                def json_view(request):
                <br />
                data = curlybracOpen'message': 'Hello, JSON!'curlybracClose
                <br />
                return JsonResponse(data)
                <br />
                <br />
                def redirect_view(request):
                <br />
                return HttpResponseRedirect('/new-url/')
              </code>
            </pre>

            <p>
              By following these steps, you can create views that handle
              different types of requests and return appropriate responses in
              your Django application. Make sure to map your views to URLs using
              the URL routing system to make them accessible through the web.
            </p>
          </article>
        </section>
        <section className="main-section" id="URL_Mapping">
          {" "}
          <header>Django - URL Mapping</header>
          <article>
            <h2>Defining URL Patterns</h2>
            <p>
              URL mapping is a crucial aspect of Django web applications. It
              defines how URLs are matched to views, allowing you to create
              clean and meaningful URLs for your project.
            </p>

            <h3>Defining URL Patterns</h3>
            <p>
              In Django, URL patterns are defined in the <code>urls.py</code>{" "}
              file of your app. You use the <code>path()</code> or{" "}
              <code>re_path()</code> function from the <code>django.urls</code>{" "}
              module to define URL patterns.
            </p>
            <pre>
              <code>
                from django.urls import path
                <br />
                from . import views
                <br />
                <br />
                urlpatterns = [<br />
                path('home/', views.home, name='home'),
                <br />
                path('articles/&lt;int:article_id/', views.article_detail,
                name='article_detail'),
                <br />]
              </code>
            </pre>

            <h3>Capturing URL Parameters</h3>
            <p>
              You can capture dynamic parts of URLs using angle brackets{" "}
              <code>&lt; &gt;</code>. For example,{" "}
              <code>&lt;int:article_id&gt;</code> captures an integer and passes
              it as a parameter to the view function.
            </p>

            <h3>Naming URL Patterns</h3>
            <p>
              Naming URL patterns with the <code>name</code> parameter is a good
              practice. It allows you to reference URLs in templates and views
              using a human-readable name rather than hardcoding URLs.
            </p>

            <h3>URL Reverse</h3>
            <p>
              To generate URLs in your views and templates, use the{" "}
              <code>reverse()</code> function. It takes the name of the URL
              pattern as an argument and returns the corresponding URL.
            </p>
            <pre>
              <code>
                from django.urls import reverse
                <br />
                <br />
                url = reverse('article_detail', args=[1])
                <br />
              </code>
            </pre>

            <h3>Including URLs from Other Apps</h3>
            <p>
              You can include URL patterns from other apps into your project's{" "}
              <code>urls.py</code> using the <code>include()</code> function.
            </p>
            <pre>
              <code>
                from django.urls import include, path
                <br />
                <br />
                urlpatterns = [<br />
                path('blog/', include('blog.urls')),
                <br />]
              </code>
            </pre>

            <h3>Regular Expressions</h3>
            <p>
              For complex URL matching, you can use regular expressions with{" "}
              <code>re_path()</code>. Be cautious with regex patterns, as they
              can make your code less readable.
            </p>

            <p>
              This concise section covers the essentials of URL mapping in
              Django, helping you create well-structured and dynamic URLs for
              your web applications. For more in-depth information, refer to the
              Django documentation on URL dispatching.
            </p>
          </article>
        </section>
        <section className="main-section" id="Reference">
          <header>Reference</header>
          <article>
            <p>
              To Know more about Django jump to the below{" "}
              <a href="https://www.tutorialspoint.com/django/index.htm">
                Website
              </a>
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};
export default Django;
