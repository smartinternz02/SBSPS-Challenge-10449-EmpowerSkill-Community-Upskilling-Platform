import React from "react";
import "../../Frameworks/style.css";
import { useNavigate } from "react-router-dom";

const NodeJS = () => {
  let navigate = useNavigate();
  return (
    <div className="body">
      <nav id="navbar">
        <button className="button-28" onClick={() => navigate(-1)}>
          &larr;Back
        </button>
        <header>Node.js Documentation</header>
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
            <a className="nav-link" href="#Modules">
              Modules
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Event_Emitter">
              Event Emitter
            </a>
          </li>
          <li>
            <a className="nav-link" href="#File_System">
              File System
            </a>
          </li>
          <li>
            <a className="nav-link" href="#URL_Module">
              URL Module
            </a>
          </li>
          <li>
            <a className="nav-link" href="#File_Uploads">
              File Uploads
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Nodejs_Email">
              Nodejs Email
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Reference">
              Node js- Reference
            </a>
          </li>
          {/* Add more sections as needed */}
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction to Node.js</header>
          <article>
            <h1>Node.js: Powering Server-Side JavaScript</h1>
            <p>
              Node.js is an open-source, cross-platform JavaScript runtime
              environment that executes JavaScript code outside of a browser. It
              allows developers to build scalable and efficient network
              applications using JavaScript on the server side.
            </p>
            <p>
              Node.js uses an event-driven, non-blocking I/O model that makes it
              lightweight and efficient. It is well-suited for building
              real-time applications, APIs, and microservices.
            </p>
            <ul>
              <li>
                JavaScript Beyond the Browser:
                <li>Node.js is a JavaScript runtime environment.</li>
                <li>Executes JavaScript code on the server side.</li>
              </li>
              <li>
                Event-Driven Architecture:
                <li>Built on an event-driven, non-blocking I/O model.</li>
                <li>Enables efficient handling of asynchronous operations.</li>
              </li>
              <li>
                Lightweight and Efficient:
                <li>Designed for scalability and high performance.</li>
                <li>Ideal for real-time applications and APIs.</li>
              </li>
              <li>
                CommonJS Modules:
                <li>Utilizes CommonJS module system.</li>
                <li>Allows modular code organization and reusability.</li>
              </li>
              <li>
                NPM Ecosystem:
                <li>Integrated with npm (Node Package Manager).</li>
                <li>Offers a vast library of open-source packages.</li>
              </li>
              <li>
                Cross-Platform Compatibility:
                <li>Supports multiple operating systems.</li>
                <li>Facilitates development across platforms.</li>
              </li>
              <li>
                Microservices and APIs:
                <li>Ideal for building microservices architecture.</li>
                <li>Great for developing robust APIs.</li>
              </li>
              <li>
                Growing Community:
                <li>Boasts a large and active developer community.</li>
                <li>Abundant resources, tutorials, and tools available.</li>
              </li>
              <li>
                Versatile Use Cases:
                <li>
                  Used in web servers, IoT applications, chatbots, and more.
                </li>
                <li>Enables full-stack JavaScript development.</li>
              </li>
            </ul>
          </article>
        </section>
        <section className="main-section" id="Getting_Started">
          <header>Getting Started with Node.js</header>
          <article>
            {/* Add content about installing Node.js, creating a basic app */}
            <p>
              Welcome to the world of Node.js! This section will guide you
              through the initial steps of setting up Node.js and creating your
              first application.
            </p>
            <ul>
              <li>
                <b>Installation: </b>
                <ol>
                  <li>
                    <b>Download Node.js: </b>
                    Visit the official Node.js website (https://nodejs.org/) and
                    download the appropriate installer for your operating
                    system.
                  </li>
                  <li>
                    <b>Install Node.js: </b>
                    Run the installer and follow the on-screen instructions to
                    install Node.js on your machine.
                  </li>
                </ol>
              </li>
            </ul>
            <ul>
              <li>
                <b>Creating Your First Application: </b>
                <ol>
                  <li>
                    <b>Create a Folder: </b>
                    Choose a location for your project and create a new folder
                    for your Node.js application.
                  </li>
                  <li>
                    <b>Open Terminal (or Command Prompt): </b>
                    Navigate to the newly created folder using your
                    terminal/command prompt.
                  </li>
                  <li>
                    <b>Initialize Project: </b>
                    In the terminal, run the following command to initialize a
                    new Node.js project:
                    <code>npm init</code>
                    Follow the prompts to configure your project. Press Enter to
                    accept the default values or provide your own.
                  </li>
                  <li>
                    <b>Create a JavaScript File:</b>
                    Inside your project folder, create a new file named app.js
                    (or any name you prefer).
                  </li>
                  <li>
                    <b>Write Your Code:</b>
                    Open app.js in a code editor and start writing your Node.js
                    code. For example:
                    <code>//app.js console.log("Hello, Node.js!");</code>
                  </li>
                  <li>
                    <b>Run Your Application: </b>
                    In the terminal, run your Node.js application using the node
                    command:
                    <code>node app.js</code>
                    You should see the output: "Hello, Node.js!"
                  </li>
                </ol>
              </li>
            </ul>
            <p>
              Congratulations! You've successfully set up Node.js and created
              your first application. This is just the beginning of your journey
              into the world of server-side JavaScript. Explore more features,
              modules, and possibilities that Node.js offers to build powerful
              and scalable applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="Modules">
          <header>Modules in Node.js</header>
          <article>
            {/* Add content about CommonJS modules, npm, creating and using modules */}
            <h1>Node.js Modules: Organize and Extend Your Code</h1>
            <p>
              In Node.js, modules are a fundamental concept that enables you to
              organize your code into reusable units and extend the
              functionality of your applications. Let's explore how to work with
              Node.js modules.
            </p>
            <h3>Built-in Modules:</h3>
            <p>
              Node.js provides a set of core modules that offer essential
              functionalities. These modules are available without requiring any
              additional installation.
            </p>
            <ul>
              <li>Example: Using the fs Module for File Operations:</li>
              <code>
                const fs = require('fs');
                <br />
                fs.readFile('file.txt', 'utf8', (err, data) arrow if (err) throw
                err console.log(data);
                <br />
                );
              </code>
            </ul>
            <h3>Creating Your Own Modules:</h3>
            <p>
              You can create your own custom modules to encapsulate related code
              and promote reusability.
            </p>
            <ul>
              <li>Example: Creating a math.js Module:</li>
              <code>
                // math.js
                <br />
                exports. add = (a, b) arrow a + b; exports. subtract = (a, b)
                arrow a - b;
              </code>
              <li>Using the Custom Module:</li>
              <code>
                const math = require('./math');
                <br />
                console.log(math.add(5, 3)); // Output: 8<br />
                console.log(math.subtract(10, 4)); // Output: 6
              </code>
            </ul>
            <h3>npm Packages:</h3>
            <p>
              The Node Package Manager (npm) allows you to install external
              packages to enhance your application's functionality.
            </p>
            <ul>
              <li>Installing Packages:</li>
              <code>npm install package-name</code>
              <li>Using Installed Packages:</li>
              <code>
                const moment = require('moment');
                <br />
                console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); //
                Output: Current date and time
              </code>
            </ul>
            <h3>Creating and Publishing Your Own npm Packages:</h3>
            <p>
              You can also create your own npm packages and share them with the
              developer community.
            </p>
            <ul>
              <li>Creating a Package:</li>
              <code>npm init</code>
              <li>Publishing a Package:</li>
              <code>npm publish</code>
            </ul>
            <h3>Modules in Different Files:</h3>
            <p>
              As your application grows, you might have modules spread across
              multiple files.
            </p>
            <code>
              // main.js
              <br />
              const userModule = require('./user');
              <br />
              const postModule = require('./post');
              <br />
              // ...
            </code>
            <li>Accessing Exports from Different Files:</li>
            <code>
              // user.js
              <br />
              module.exports = curlybracOpen
              <br />
              getUser: () => {/* ... */}
              <br />
              updateUser: () => {/* ... */}
              <br />
              curlybracClose
            </code>
            <p>
              Node.js modules empower you to create organized, modular, and
              maintainable codebases. Whether you're using built-in modules,
              custom modules, or npm packages, leveraging modules enhances your
              development process and promotes code reusability.
            </p>
          </article>
        </section>
        <section className="main-section" id="Event_Emitter">
          <header>Event Emitter in Node.js</header>
          <article>
            {/* Add content about EventEmitter class, handling events */}
            <h1>Node.js Event Emitter: Handling Events Efficiently</h1>
            <p>
              Node.js provides an Event Emitter class that allows you to work
              with events, enabling effective communication between different
              parts of your application. Let's dive into the world of Node.js
              Event Emitters.
            </p>
            <h3>Basic Usage:</h3>
            <ul>
              <li>Import Event Emitter:</li>
              <code>const EventEmitter = require('events');</code>
              <li>Create an Event Emitter Instance:</li>
              <code>const myEmitter = new EventEmitter();</code>
              <li>Listening to Events:</li>
              <code>
                myEmitter.on('event', () => curlybracOpen
                <br />
                console.log('Event has occurred!');
                <br />
                curlybracClose);
              </code>
              <li>Emitting an Event:</li>
              <code>
                myEmitter.emit('event'); // Output: Event has occurred!
              </code>
            </ul>
            <h3>Passing Data with Events:</h3>
            <p>
              You can also pass data along with events to communicate more
              information.
            </p>
            <ul>
              <li>Example: Passing Data with Events:</li>
              <code>
                myEmitter.on('dataEvent', (data) => curlybracOpen <br />
                console.log(`Received data:
                $curlybracOpen(data)curlybracClose`);
                <br />
                curlybracClose);
                <br />
                myEmitter.emit('dataEvent', 'Hello, Event Emitter!'); // Output:
                Received data: Hello, Event Emitter!
              </code>
            </ul>
            <h3>Handling Events Asynchronously:</h3>
            <p>Node.js Event Emitters support asynchronous event handling.</p>
            <ul>
              <li>Example: Asynchronous Event Handling:</li>
              <code>
                myEmitter.on('asyncEvent', () => curlybracOpen setTimeout(() =>
                <br />
                curlybracOpen console.log('Async event executed.');
                <br />
                curlybracClose, 1000); curlybracClose);
                <br />
                myEmitter.emit('asyncEvent'); // Output (after 1 second): Async
                event executed.
              </code>
            </ul>
            <h3>Once vs. On:</h3>
            <p>
              The once method listens for an event only once, unlike the on
              method that listens every time the event is emitted.
            </p>
            <ul>
              <li>Example: Using once for One-Time Events:</li>
              <code>
                myEmitter.once('oneTimeEvent', () => curlybracOpen
                <br />
                console.log('This will only execute once.');
                <br />
                curlybracClose);
                <br />
                myEmitter.emit('oneTimeEvent'); // Output: This will only
                execute once.
                <br />
                myEmitter.emit('oneTimeEvent'); // No output, as the event is
                already handled.
              </code>
            </ul>
            <h3>Built-in Events:</h3>
            <p>
              Node.js also provides built-in events, such as the 'error' event,
              which is emitted when an error occurs and is not handled by a
              listener.
            </p>
            <ul>
              <li>Example: Handling Error Events:</li>
              <code>
                myEmitter.on('error', (err) => curlybracOpen
                <br />
                console.error('Error occurred:', err);
                <br />
                curlybracClose);
                <br />
                myEmitter.emit('error', new Error('Something went wrong.')); //
                Output: Error occurred: Error: Something went wrong.
              </code>
            </ul>
            <p>
              Node.js Event Emitters allow you to build reactive applications by
              efficiently managing communication between different parts of your
              code. Utilize events to create robust, responsive, and
              well-organized applications that handle various scenarios and user
              interactions.
            </p>
          </article>
        </section>
        <section className="main-section" id="File_System">
          <header>File System in Node.js</header>
          <article>
            {/* Add content about fs module, reading and writing files */}
            <h1>Node.js File System (fs): Interact with Files</h1>
            <p>
              The fs module in Node.js provides a powerful set of functions to
              work with files and directories. Let's explore how you can use the
              fs module to read, write, and manipulate files.
            </p>
            <h3>Reading Files:</h3>
            <ul>
              <li>Import fs Module:</li>
              <code>const fs = require('fs');</code>
              <li>Reading Text Files:</li>
              <code>
                fs.readFile('file.txt', 'utf8', (err, data) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                console.log(data);
                <br />
                curlybracClose);
              </code>
              <li>Reading Binary Files:</li>
              <code>
                fs.readFile('image.jpg', (err, data) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                // Use 'data' (Buffer) for further processing
                <br />
                curlybracClose);
              </code>
            </ul>
            <h3>Writing Files:</h3>
            <ul>
              <li>Writing Text Files:</li>
              <code>
                const content = 'Hello, Node.js!';
                <br />
                fs.writeFile('message.txt', content, (err) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                console.log('File written successfully.');
                <br />
                curlybracClose);
              </code>
              <li>Writing Binary Files:</li>
              <code>
                const imageBuffer = ...; // Binary data as Buffer
                <br />
                fs.writeFile('image.jpg', imageBuffer, (err) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                console.log('Image saved successfully.');
                <br />
                curlybracClose);
              </code>
            </ul>
            <h3>Working with Directories:</h3>
            <ul>
              <li>Creating Directories:</li>
              <code>
                fs.mkdir('newDir', (err) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                console.log('Directory created.');
                <br />
                curlybracClose);
              </code>
              <li>Listing Files in a Directory:</li>
              <code>
                fs.readdir('myDir', (err, files) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                console.log('Files in the directory:', files);
                <br />
                curlybracClose);
              </code>
            </ul>
            <h3>Renaming and Deleting Files/Directories:</h3>
            <ul>
              <li>Renaming Files/Directories:</li>
              <code>
                fs.rename('oldName.txt', 'newName.txt', (err) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                console.log('File renamed.');
                <br />
                curlybracClose);
              </code>
              <li>Deleting Files:</li>
              <code>
                fs.unlink('fileToDelete.txt', (err) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                console.log('File deleted.');
                <br />
                curlybracClose);
              </code>
              <li>Deleting Directories:</li>
              <code>
                fs.rmdir('dirToDelete', (err) => curlybracOpen
                <br />
                if (err) throw err;
                <br />
                console.log('Directory deleted.');
                <br />
                curlybracClose);
              </code>
            </ul>
            <h3>Stream-based File Operations:</h3>
            <ul>
              <li>Streams for Large Files:</li>
              <code>
                const readableStream = fs.createReadStream('largeFile.txt');
                <br />
                const writableStream = fs.createWriteStream('output.txt');
                <br />
                readableStream.pipe(writableStream);
              </code>
            </ul>
            <p>
              Node.js File System (fs) module empowers you to handle various
              file-related tasks efficiently, from reading and writing files to
              manipulating directories. By mastering fs, you can build
              applications that manage data and files seamlessly.
            </p>
          </article>
        </section>
        {/* Add more sections for other topics */}
        <section className="main-section" id="URL_Module">
          <header>URL Module in Node.js</header>
          <article>
            <h1>Node.js URL Module: Working with URLs</h1>
            <p>
              The url module in Node.js provides utilities for parsing and
              formatting URLs. Whether you're dealing with web applications,
              APIs, or data sources, the url module helps you manage URLs
              effectively.
            </p>
            <h3>Basic Usage:</h3>
            <ul>
              <li>Import URL Module:</li>
              <code>const url = require('url');</code>
            </ul>
            <h3>Parsing URLs:</h3>
            <ul>
              <li>Parsing a URL:</li>
              <code>
                const myURL = new
                URL('https://www.example.com/path?query=value');
                <br />
                console.log(myURL);
              </code>
              <li>Accessing Components:</li>
              <code>
                console.log(myURL.protocol); // Output: https:
                <br />
                console.log(myURL.host); // Output: www.example.com
                <br />
                console.log(myURL.pathname); // Output: /path
                <br />
                console.log(myURL.search); // Output: ?query=value
              </code>
            </ul>
            <h3>Formatting URLs:</h3>
            <ul>
              <li>Creating a URL:</li>
              <code>
                const formattedURL = new URL('https://www.example.com');
                <br />
                formattedURL.pathname = '/new-path';
                <br />
                formattedURL.search = 'query=new-value';
                <br />
                console.log(formattedURL.href); // Output:
                https://www.example.com/new-path?query=new-value
              </code>
            </ul>
            <h3>Resolving URLs:</h3>
            <ul>
              <li>Resolving Relative URLs:</li>
              <code>
                const base = 'https://www.example.com/path/';
                <br />
                const relative = '../new-path';
                <br />
                const resolvedURL = new URL(relative, base);
                <br />
                console.log(resolvedURL.href); // Output:
                https://www.example.com/new-path
              </code>
            </ul>
            <h3>Query Parameters:</h3>
            <ul>
              <li>Working with Query Parameters:</li>
              <code>
                const queryURL = new
                URL('https://www.example.com/page?name=John&age=30');
                <br />
                const queryParams = queryURL.searchParams;
                <br />
                console.log(queryParams.get('name')); // Output: John
                <br />
                console.log(queryParams.get('age')); // Output: 30
              </code>
              <li>Modifying Query Parameters:</li>
              <code>
                queryParams.append('country', 'USA');
                <br />
                queryParams.delete('age');
                <br />
                console.log(queryURL.href); // Output:
                https://www.example.com/page?name=John&country=USA
              </code>
            </ul>
            <p>
              Node.js URL module simplifies handling URLs, whether you're
              parsing, formatting, or manipulating them. This is particularly
              useful when working with APIs, building web applications, or
              interacting with external data sources. Utilize the url module to
              manage URLs effectively and enhance your application's
              functionality.
            </p>
          </article>
        </section>
        <section className="main-section" id="File_Uploads">
          <header>File Uploads in Node.js</header>
          <article>
            <h1>Uploading Files in Node.js: Handling File Uploads</h1>
            <p>
              Handling file uploads is a common requirement in web applications.
              Node.js provides various libraries and techniques to efficiently
              manage file uploads. Let's explore how to handle file uploads in
              Node.js.
            </p>
            <h3>Basic HTML Form:</h3>
            <p>
              To enable file uploads, you need an HTML form with the enctype
              attribute set to "multipart/form-data".
            </p>
            <h3>Using Express.js:</h3>
            <p>
              Assuming you're using Express.js, here's how to handle file
              uploads using the <b>express-fileupload</b> middleware.
            </p>
            <ol>
              <li>Install express-fileupload:</li>
              <code>npm install express-fileupload</code>
              <li>Integrate with Express:</li>
              <code>
                const express = require('express');
                <br />
                const fileUpload = require('express-fileupload');
                <br />
                const app = express();
                <br />
                app.use(fileUpload());
              </code>
              <li>Handle Uploads:</li>
              <code>
                app.post('/upload', (req, res) => curlybracOpen if (!req.files
                || Object.keys(req.files).length === 0) curlybracOpen
                <br /> return res.status(400).send('No files were uploaded.');
                <br /> curlybracClose const uploadedFile =
                req.files.fileToUpload;
                <br /> const uploadPath = __dirname + '/uploads/' +
                uploadedFile.name;
                <br />
                uploadedFile.mv(uploadPath, (err) => curlybracOpen
                <br /> if (err) return res.status(500).send(err);
                <br /> res.send('File uploaded!');
                <br />
                curlybracClose);
                <br /> curlybracClose);
                <br /> app.listen(3000, () => curlybracOpen
                <br /> console.log('Server started on port 3000');
                <br />
                curlybracClose);
              </code>
            </ol>
            <h3>Explanation:</h3>
            <ul>
              <li>
                The express-fileupload middleware simplifies file handling by
                exposing uploaded files as req.files.
              </li>
              <li>
                Check if any files were uploaded using req.files and its length.
              </li>
              <li>
                Access the uploaded file using req.files.fileToUpload where
                "fileToUpload" is the name attribute of the input field in the
                form.
              </li>
              <li>
                Specify the upload path and use the mv() method to move the
                uploaded file to the desired location.
              </li>
              <li>Handle errors and send appropriate responses.</li>
            </ul>
            <h3>Additional Considerations:</h3>
            <ul>
              <li>
                <b>File Size and Type Validation:</b>
                You can implement size and type validation to ensure uploaded
                files meet your requirements.
              </li>
              <li>
                <b>Security:</b>
                Be cautious with user uploads to prevent malicious files. Use
                libraries like file-type to validate file types.
              </li>
              <li>
                <b>Storage:</b>
                Consider using cloud storage solutions like Amazon S3 or local
                storage for handling large-scale file uploads.
              </li>
            </ul>
            <p>
              Node.js makes it straightforward to manage file uploads, whether
              you're using native http or a framework like Express.js. Proper
              validation, security measures, and efficient storage solutions are
              essential to creating a robust file upload system.
            </p>
          </article>
        </section>
        <section className="main-section" id="Modules">
          <header>Modules in Node.js</header>
          <article>
            <h1>Sending Emails in Node.js: Navigating Nodemailer</h1>
            <p>
              Sending emails from your Node.js applications can be achieved
              using the popular library called Nodemailer. Learn how to
              integrate Nodemailer to effortlessly manage email communication.
            </p>
            <h3>Installing Nodemailer:</h3>
            <ol>
              <li>Install Nodemailer:</li>
              <code>npm install nodemailer</code>
              <li>Sending Basic Emails:</li>
              <code>
                const nodemailer = require('nodemailer');
                <br />
                <br />
                // Create a transporter using SMTP or other transport methods
                <br />
                const transporter = nodemailer.createTransport(curlybracOpen
                <br />
                service: 'Gmail',
                <br />
                auth: curlybracOpen
                <br />
                user: 'your_email@gmail.com',
                <br />
                pass: 'your_email_password'
                <br />
                curlybracClose
                <br />
                curlybracClose);
                <br />
                <br />
                // Define email options
                <br />
                const mailOptions = curlybracOpen
                <br />
                from: 'your_email@gmail.com',
                <br />
                to: 'recipient@example.com',
                <br />
                subject: 'Hello from Node.js',
                <br />
                text: 'This is a test email sent from Node.js using Nodemailer.'
                <br />
                curlybracClose;
                <br />
                <br />
                // Send the email
                <br />
                transporter.sendMail(mailOptions, (error, info) => curlybracOpen
                <br />
                if (error) <br />
                console.log('Error:', error);
                <br />
                else <br />
                console.log('Email sent:', info.response);
                <br />
                curlybracClose);
                <br />
              </code>
            </ol>
            <h3>Explanation:</h3>
            <ul>
                <li>Import the Nodemailer module.
</li>
                <li>Create a transporter using your email service's SMTP details or other supported transport methods.</li>
                <li>Define the email options, including sender, recipient, subject, and content.
</li>
                <li>Use the sendMail() method to send the email.
</li>
                <li>Handle errors and log responses.
</li>
            </ul>
            <h3>Advanced Usage:</h3>
            <ul>
                <li><b>HTML Emails:</b> You can send HTML-formatted emails by replacing the text property in mailOptions with html.</li>
                <li><b>Attachments:</b> Attachments can be added to emails using the attachments property in mailOptions.</li>
                <li><b>Multiple Recipients:</b> Set multiple recipients using an array in the to field.</li>
                <li><b>OAuth2: </b> Use OAuth2 for secure authentication by configuring the auth object with OAuth2 tokens.</li>
            </ul>
            <h3>Additional Considerations:</h3>
            <ul>
                <li><b>Using Email Services:</b> Nodemailer supports various email services like Gmail, Outlook, and more. Refer to their documentation for detailed configuration options.</li>
                <li><b>Templates:</b>Consider using template engines like Handlebars to generate dynamic email content.</li>
                <li><b>Error Handling: </b> Implement robust error handling to manage failed email sends.</li>
                </ul>
                <p>
                Nodemailer streamlines sending emails from Node.js applications. Whether it's simple text-based messages or complex HTML emails with attachments, Nodemailer offers versatile tools to manage your email communication seamlessly.
                </p>
          </article>
        </section>
        <section className="main-section" id="Reference">
          <header>Reference</header>
          <article>
            <p>To Know more about Nodejs jump to the below  <a href="https://www.tutorialspoint.com/nodejs/index.htm">Website</a></p>
           
          </article>
          </section>
      </main>
    </div>
  );
};
export default NodeJS;
