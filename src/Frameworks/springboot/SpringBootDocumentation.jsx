import React from "react";
import "../../Frameworks/style.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

const SpringBootDocumentation = () => {
  let navigate = useNavigate();
  return (
    <div className="body">
      <nav id="navbar">
        <button className="button-28" onClick={() => navigate(-1)}>
          &larr;Back
        </button>
        <header>Spring Boot Documentation</header>
        <ul>
          <li>
            <a className="nav-link" href="#Introduction">
              Introduction
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Getting_started">
              Getting Started
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Bootstraping">
              Bootstrapping with Spring Boot
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Tomcat_Dev">
              Tomcat Development with Spring Boot
            </a>
          </li>
          <li>
            <a className="nav-link" href="#BuildSystems">
              Build Systems with Spring Boot
            </a>
          </li>
          <li>
            <a className="nav-link" href="#CodeStructure">
              Code Structure of Spring Boot
            </a>
          </li>
          <li>
            <a className="nav-link" href="#SpringBeans">
              Spring Beans and Dependency Injection
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Runners">
              Runners in Spring Boot
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Reference">
              Reference
            </a>
          </li>
          {/* Add more navigation items */}
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction</header>
          <article>
            <h3>Welcome to Spring Boot: Where Simplicity Meets Power</h3>
            <br />
            <p>
              Say hello to Spring Boot, your gateway to streamlined application
              development. With Spring Boot, complexity becomes a thing of the
              past. Whether you're a coding novice or a seasoned pro, Spring
              Boot empowers you to focus on your ideas and features rather than
              wrestling with intricate setups.
            </p>
            <br />
            <p>
              By automating configuration and providing essential tools right
              from the start, Spring Boot lets you hit the ground running. Craft
              robust and modern applications effortlessly, all while enjoying
              the benefits of a vibrant developer community and a wealth of
              resources.
            </p>
            <br />
            <p>
              In this documentation, we'll navigate you through the world of
              Spring Boot, unveiling its capabilities and guiding you on a
              journey to efficient, production-ready applications. Let's embark
              on this adventure and harness the power of Spring Boot together
            </p>
          </article>
        </section>
        <section className="main-section" id="Getting_started">
          <header>Getting Started</header>
          <article>
            <h3>Getting Started with Spring Boot</h3>
            <br />
            <p>
              Welcome to the exciting world of Spring Boot! This section will
              guide you through the initial steps to set up and start building
              your first Spring Boot application. Whether you're a beginner or
              an experienced developer, these steps will help you get up and
              running quickly.
            </p>
            <br />
            <h5>Prerequisites:</h5>
            <p>
              Before we dive in, make sure you have the following prerequisites
              in place:
            </p>
            <br />
            <ul>
              <li>
                <b>Java Development Kit (JDK): </b>Spring Boot applications are
                Java-based, so ensure you have the latest JDK installed on your
                system.
              </li>
              <li>
                <b>Integrated Development Environment (IDE): </b> While not
                mandatory, using an IDE like IntelliJ IDEA or Eclipse with
                Spring Boot support can significantly enhance your development
                experience.
              </li>
            </ul>
            <br />
            <h3>Step 1: Create a New Project:</h3>
            <p>
              Let's begin by creating a new Spring Boot project. There are
              multiple ways to achieve this, but one of the simplest methods is
              by using the Spring Initializr. It's a web-based tool that
              generates the basic structure of your project and sets up
              essential dependencies.
            </p>
            <br />
            <ul>
              <li>
                Open your web browser and navigate to the{" "}
                <a href="https://start.spring.io/">Spring Initializr.</a>
              </li>
              <li>
                Choose your desired options, such as project type, language
                (Java/Kotlin), and Spring Boot version.
              </li>
              <li>
                Specify the project metadata, including group name and artifact
                name.
              </li>
              <li>
                Select any additional dependencies you want to include, such as
                Spring Web, Spring Data JPA, etc.
              </li>
              <li>
                Once you've configured your project, click the "Generate" button
                to download a zip file containing your project skeleton.
              </li>
            </ul>
            <br />
            <h3>Step 2: Unpack and Import the Project:</h3>
            <p>
              After downloading the zip file, extract its contents to your
              desired project location.
            </p>
            <br />
            <ul>
              <li>Open your preferred IDE.</li>
              <li>
                Import the project using the "Import Project" or "Open Project"
                option.
              </li>
              <li>
                Select the directory where you extracted the project files.
              </li>
            </ul>
            <br />
            <h3>Step 3: Create Your First Spring Boot Application:</h3>
            <p>
              With your project imported, it's time to create your first Spring
              Boot application.
            </p>
            <br />
            <ul>
              <li>Navigate to the src/main/java directory in your project.</li>
              <li>Create a new package (e.g., com.example.myapp).</li>
              <li>
                Inside the package, create a new Java class (e.g.,
                MyAppApplication).
              </li>
            </ul>
            <code>
              package com.example.myapp; import
              org.springframework.boot.SpringApplication; import
              org.springframework.boot.autoconfigure.SpringBootApplication;
              @SpringBootApplication public class MyAppApplication curlybracOpen
              public static void main(String[] args) curlybracOpen
              SpringApplication.run(MyAppApplication.class, args);
              curlybracClose curlybracClose
            </code>
            <br />
            <p>
              This simple application class uses the @SpringBootApplication
              annotation to configure and bootstrap your Spring Boot
              application.
            </p>
            <br />
            <h3>Step 4: Run Your Application:</h3>
            <p>It's time to see your application in action!</p>
            <br />
            <ul>
              <li>
                Right-click on the main method in your MyAppApplication class.
              </li>
              <li>
                Select "Run" or "Debug" to start your Spring Boot application.
              </li>
              <li>
                Open your web browser and go to http://localhost:8080. You
                should see a default Spring Boot welcome page.
              </li>
            </ul>
            <br />
            <p>
              Congratulations! You've successfully created and run your first
              Spring Boot application. This is just the beginning of your
              journey with Spring Boot, where you can explore powerful features,
              build RESTful APIs, connect to databases, and much more.
            </p>
            <br />
            <p>
              In the next sections, we'll delve deeper into Spring Boot's
              capabilities and guide you through various aspects of application
              development. Get ready to unleash the full potential of Spring
              Boot!
            </p>
          </article>
        </section>
        <section className="main-section" id="Bootstraping">
          <header>Bootstrapping with Spring Boot</header>
          <article>
            <p>
              In Spring Boot, the process of initializing and configuring your
              application is often referred to as "bootstrapping." Spring Boot
              simplifies this process by providing sensible defaults and
              conventions, allowing you to focus on writing application logic
              rather than spending time on complex setup.
            </p>
            <br />
            <h3>Automatic Configuration:</h3>
            <p>
              One of the core features of Spring Boot is its automatic
              configuration. Spring Boot analyzes your project's classpath and
              intelligently configures various components based on the
              dependencies you've included. This eliminates the need for
              extensive configuration files and allows you to get started
              quickly.
            </p>
            <br />
            <h3>Starter Dependencies:</h3>
            <p>
              Spring Boot introduces the concept of "starter" dependencies.
              These are pre-configured dependencies that provide everything you
              need to work with a specific feature or technology. For example,
              if you want to build a web application, you can simply include the
              spring-boot-starter-web dependency, and Spring Boot will
              automatically set up an embedded web server, Spring MVC, and other
              necessary components.
            </p>
            <br />
            <h3>Application Class:</h3>
            <p>
              In Spring Boot, a central application class plays a crucial role
              in bootstrapping your application. This class is often annotated
              with @SpringBootApplication, which combines several annotations,
              including @Configuration, @EnableAutoConfiguration, and
              @ComponentScan. These annotations work together to configure your
              application, enable automatic configuration, and scan for
              components.
            </p>
            <br />
            <code>
              import org.springframework.boot.SpringApplication; import
              <br />
              org.springframework.boot.autoconfigure.SpringBootApplication;
              <br />
              @SpringBootApplication public class MyAppApplication curlybracOpen
              <br />
              public static void main(String[] args) curlybracOpen
              <br />
              SpringApplication.run(MyAppApplication.class, args);
              <br />
              curlybracClose curlybracClose
              <br />
            </code>
            <br />
            <h3>Configuration Properties:</h3>
            <p>
              Spring Boot allows you to externalize configuration properties and
              manage them easily. You can define properties in various ways,
              including through application.properties or application.yml files,
              environment variables, command-line arguments, and more. Spring
              Boot's "relaxed binding" feature enables you to use different
              formats and naming conventions for configuration properties.
            </p>
            <br />
            <h3>Profile-specific Configuration:</h3>
            <p>
              With Spring Boot, you can define configuration specific to
              different environments or profiles. This is particularly useful
              when you want different settings for development, testing, and
              production environments. By creating separate property files
              (e.g., application-dev.properties, application-prod.properties),
              you can customize your application's behavior for each
              environment.
            </p>
            <br />
            <h3>Custom Configuration:</h3>
            <p>
              While Spring Boot provides sensible defaults, you can always
              customize the configuration to suit your specific requirements.
              You can override auto-configurations, create your own
              configuration beans, and fine-tune various aspects of your
              application. Spring Boot's flexibility ensures that you're not
              locked into its conventions and can adapt the configuration as
              needed.
            </p>
            <br />
            <p>
              In this "Bootstrapping with Spring Boot" section, we've explored
              the fundamental concepts that make Spring Boot so powerful and
              developer-friendly. The automatic configuration, starter
              dependencies, application class, configuration properties, and
              customization options collectively contribute to an efficient and
              streamlined development process. As you delve deeper into Spring
              Boot, you'll discover even more features and tools that simplify
              the way you build robust applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="Tomcat_Dev">
          <header>Tomcat Development with Spring Boot</header>
          <article>
            <p>
              Spring Boot makes it seamless to develop and deploy web
              applications using the Apache Tomcat web server. Tomcat is one of
              the most widely used and well-established servlet containers, and
              integrating it with Spring Boot provides a solid foundation for
              building powerful web applications.
            </p>
            <br />
            <h3>Embedded Tomcat:</h3>
            <p>
              Spring Boot's default behavior is to embed the Tomcat servlet
              container directly into your application. This means you don't
              need to separately install and configure Tomcat; it's included as
              a dependency when you use spring-boot-starter-web. This embedded
              Tomcat instance simplifies deployment and allows you to run your
              application with a simple command.
            </p>
            <br />
            <h3>Servlets and Controllers:</h3>
            <p>
              Spring Boot leverages the Spring MVC framework to handle
              servlet-based web applications. You can create servlets and
              controllers to handle incoming requests, manage HTTP sessions, and
              generate responses. By using annotations such as @Controller and
              @RequestMapping, you can map URLs to specific methods and define
              the behavior of your application.
            </p>
            <br />
            <h3>DispatcherServlet:</h3>
            <p>
              In a Spring Boot web application, the DispatcherServlet acts as
              the front controller that receives incoming requests and
              dispatches them to the appropriate handlers. Spring Boot
              automatically configures the DispatcherServlet based on
              conventions and sensible defaults, reducing the need for extensive
              configuration.
            </p>
            <br />
            <h3>Application Properties for Tomcat:</h3>
            <p>
              Spring Boot provides a variety of configuration properties that
              allow you to fine-tune the behavior of the embedded Tomcat server.
              For example, you can configure the port on which Tomcat listens,
              set up SSL certificates for secure connections, and adjust thread
              pool settings for handling concurrent requests. These properties
              can be defined in the application.properties or application.yml
              file.
            </p>
            <br />
            <h3>External Tomcat Deployment:</h3>
            <p>
              While Spring Boot's embedded Tomcat is convenient for development,
              you can also deploy your application to an external Tomcat
              instance for production environments. Spring Boot provides a "war"
              packaging option that generates a traditional WAR (Web Archive)
              file that can be deployed to any servlet container, including
              Tomcat.
            </p>
            <br />
            <h3>Tomcat Monitoring and Management:</h3>
            <p>
              Spring Boot includes actuator endpoints that allow you to monitor
              and manage your embedded Tomcat instance. By enabling the
              appropriate actuator endpoints, you can access information about
              server health, metrics, and even trigger graceful shutdowns.
            </p>
            <br />
            <p>
              Developing with Tomcat and Spring Boot provides a robust
              environment for building web applications. The integration of
              Tomcat as an embedded container simplifies development, while the
              option to deploy externally allows you to seamlessly transition to
              production environments. Whether you're creating RESTful APIs,
              dynamic web pages, or full-fledged web applications, Spring Boot's
              Tomcat support ensures that your development process remains
              efficient and effective.
            </p>
          </article>
        </section>
        {/* Add more sections */}
        <section className="main-section" id="BuildSystems">
          <header>Build Systems with Spring Boot</header>
          <article>
            <p>
              Spring Boot supports various build systems that streamline the
              process of creating, compiling, and packaging your applications.
              Two popular build systems supported by Spring Boot are Apache
              Maven and Gradle.
            </p>
            <br />
            <h3>Apache Maven:</h3>
            <p>
              Maven is a widely used build automation and project management
              tool. It uses a Project Object Model (POM) to define project
              information, dependencies, and build configuration. With Spring
              Boot and Maven, you can easily manage your application's
              dependencies, build lifecycle, and packaging options.
            </p>
            <br />
            <h3>Gradle:</h3>
            <p>
              Gradle is a modern build automation tool that uses a Groovy-based
              domain-specific language (DSL) for defining build scripts. With
              Spring Boot and Gradle, you can specify dependencies, tasks, and
              configurations in a concise and flexible manner.
            </p>
            <br />
            <p>
              Example build.gradle for a Spring Boot application using Gradle:
            </p>
            <code>
              plugins curlybracOpen
              <br />
              id 'org.springframework.boot' version '2.5.3'
              <br />
              id 'io.spring.dependency-management' version '1.0.11.RELEASE'
              <br />
              id 'java'
              <br />
              curlybracClose
              <br />
              <br />
              group = 'com.example'
              <br />
              version = '1.0.0'
              <br />
              <br />
              repositories curlybracOpen
              <br />
              mavenCentral()
              <br />
              curlybracClose
              <br />
              <br />
              dependencies curlybracOpen
              <br />
              implementation 'org.springframework.boot:spring-boot-starter-web'
              <br />
              curlybracClose
              <br />
              <br />
              java curlybracOpen
              <br />
              sourceCompatibility = JavaVersion.VERSION_11
              <br />
              targetCompatibility = JavaVersion.VERSION_11
              <br />
              curlybracClose
            </code>
            <br />
            <h3>Build and Run:</h3>
            <p>
              Both Maven and Gradle offer commands to build and run Spring Boot
              applications. For Maven, you can use mvn spring-boot:run, and for
              Gradle, you can use ./gradlew bootRun.
            </p>
            <br />
            <h3>Build Profiles and Customization:</h3>
            <p>
              Spring Boot provides support for build profiles that allow you to
              customize the application based on different environments or use
              cases. These profiles can be defined in the build system's
              configuration files and activated during the build process.
            </p>
            <br />
            <h3>Dependency Management:</h3>
            <p>
              Both Maven and Gradle simplify dependency management by
              automatically downloading and managing external libraries. Spring
              Boot's starters further simplify this process by providing
              pre-configured sets of dependencies for common tasks, such as web
              development, data access, and more.
            </p>
            <br />
            <p>
              Choosing between Maven and Gradle depends on your familiarity with
              the build system and your project's requirements. Regardless of
              the build system you choose, Spring Boot's integration ensures a
              smooth and efficient development experience.
            </p>
          </article>
        </section>
        <section className="main-section" id="CodeStructure">
          <header>Code Structure of Spring Boot</header>
          <article>
            <p>
              Spring Boot follows a convention-over-configuration approach,
              providing a well-defined structure for organizing your application
              code. This structure promotes modularity, maintainability, and
              consistency across Spring Boot projects.
            </p>
            <br />
            <p>
              Here's a basic overview of the recommended code structure for a
              Spring Boot application:
            </p>
            <br />
            <code>
              src/
              <br />
              main/
              <br />
              java/
              <br />
              com/
              <br />
              example/
              <br />
              myapplication/
              <br />
              controller/
              <br />
              model/
              <br />
              repository/
              <br />
              service/
              <br />
              resources/
              <br />
              application.properties
              <br />
              test/
              <br />
              java/
              <br />
              com/
              <br />
              example/
              <br />
              myapplication/
              <br />
              // Test classes
              <br />
              resources/
              <br />
              // Test configuration
            </code>
            <br />
            <h3>Explanation:</h3>
            <br />
            <ol>
              <li>
                <b>controller/</b>:This package contains your application's web
                controllers that handle incoming HTTP requests and define your
                RESTful endpoints.
              </li>
              <li>
                <b>model/</b>:Here, you define your data model classes, which
                represent entities, DTOs (Data Transfer Objects), and other
                business objects.
              </li>
              <li>
                <b>repository/</b>:This package contains interfaces or classes
                that interact with databases or other data sources. Spring Data
                JPA interfaces can be used to simplify data access.
              </li>
              <li>
                <b>service/</b>The service package holds your business logic.
                Services provide the actual implementation of your application's
                functionality.
              </li>
              <li>
                <b>resources/</b>:This directory contains configuration files,
                static resources, and templates.
                <br />
                <b>application.properties</b>: This is the main configuration
                file for your application. You can define properties, settings,
                and configuration values here.
              </li>
              <li>
                <b>test/</b>: The test directory mirrors the structure of the
                main directory, containing test classes and resources for unit
                and integration testing.
              </li>
            </ol>
            <br />
            <h3>example:</h3>
            <br />
            <p>
              Let's say you're building a basic Spring Boot REST API for
              managing tasks. Here's how your code structure might look:
            </p>
            <br />
            <code>
              src/
              <br />
              main/
              <br />
              java/
              <br />
              com/
              <br />
              example/
              <br />
              taskmanager/
              <br />
              controller/
              <br />
              TaskController.java
              <br />
              model/
              <br />
              Task.java
              <br />
              repository/
              <br />
              TaskRepository.java
              <br />
              service/
              <br />
              TaskService.java
              <br />
              resources/
              <br />
              application.properties
              <br />
              test/
              <br />
              java/
              <br />
              com/
              <br />
              example/
              <br />
              taskmanager/
              <br />
              controller/
              <br />
              TaskControllerTests.java
              <br />
              service/
              <br />
              TaskServiceTests.java
              <br />
              resources/
              <br />
              // Test configuration
            </code>
            <br />
            <h3>In this example:</h3>
            <br />
            <ul>
              <li>
                TaskController handles incoming HTTP requests related to tasks.
              </li>
              <li>Task is a simple data model class representing a task.</li>
              <li>
                TaskRepository provides database interaction methods using
                Spring Data JPA.
              </li>
              <li>
                TaskService contains business logic for task-related operations.
              </li>
              <li>
                application.properties might include configuration settings for
                the application, database, etc.
              </li>
              <li>
                Test classes are organized similarly under the test directory.
              </li>
            </ul>
            <br />
            <p>
              Following this structured approach enhances code readability,
              maintainability, and collaboration among team members in Spring
              Boot projects.
            </p>
          </article>
        </section>
        <section className="main-section" id="SpringBeans">
          <header>Spring Beans and Dependency Injection</header>
          <article>
            <p>
              In Spring Boot, beans are the fundamental building blocks of an
              application. Beans are managed by the Spring container, which
              handles their creation, initialization, and wiring. Dependency
              Injection (DI) is a core concept in Spring Boot that allows you to
              create loosely coupled and easily testable components.
            </p>
            <br />
            <h3>Creating a Spring Bean:</h3>
            <br />
            <p>
              To create a Spring bean, you can annotate a class with @Component
              or its specialized versions like @Service, @Repository, or
              @Controller. Spring will automatically detect and manage these
              components.
            </p>
            <code>
              import org.springframework.stereotype.Component;
              <br />
              <br />
              @Component
              <br />
              public class MyService{" "}
              {
                <br />
                // Bean logic here<br/>
              }
              <br />
            </code>
            <br />
            <h3>Dependency Injection:</h3>
            <p>
              Dependency Injection enables the inversion of control, where the
              control of creating and managing instances of objects (beans) is
              transferred to the Spring container. Dependencies are provided to
              beans from outside, making the system more flexible and
              maintainable.
            </p>
            <code>
              @Component
              <br />
              public class MyController curlybracOpen
              <br />
              private final MyService myService; <br />
              <br />
              @Autowired
              <br />
              public MyController(MyService myService) curlybracOpen <br />
              this.myService = myService;
              <br />
              curlybracClose
              <br />
              <br />
              // Controller logic using myService curlybracClose
            </code>
            <br />
            <p>
              In the above example, MyController depends on MyService. By using
              @Autowired on the constructor, Spring Boot will inject an instance
              of MyService into MyController.
            </p>
            <br />
            <h3>Constructor vs. Setter Injection:</h3>
            <br />
            <p>
              Constructor injection is generally recommended, as it ensures that
              the required dependencies are provided at the time of object
              creation. This makes your classes more predictable and testable.
              Setter injection, using @Autowired on a setter method, is an
              alternative but less preferred method.
            </p>
            <br />
            <h3>Using Qualifiers:</h3>
            <p>
              If multiple beans of the same type exist, you can use the
              @Qualifier annotation to specify which bean should be injected.
            </p>
            <code>
              @Component
              <br />
              @Qualifier("databaseService")
              <br />
              public class DatabaseService implements MyService curlybracOpen
              <br />
              // Database-specific logic
              <br />
              curlyBraceClose
              <br />
              <br />
              <br />
              @Component
              <br />
              @Qualifier("fileService")
              <br />
              public class FileService implements MyService curlybracOpen
              <br />
              // File-specific logic
              <br />
              curlyBraceClose
              <br />
              <br />
              <br />
              @Component
              <br />
              public class MyController curlybracOpen
              <br />
              private final MyService databaseService;
              <br />
              private final MyService fileService;
              <br />
              <br />
              @Autowired
              <br />
              public MyController(@Qualifier("databaseService") MyService
              databaseService,
              <br />
              @Qualifier("fileService") MyService fileService) curlybracOpen
              <br />
              this.databaseService = databaseService;
              <br />
              this.fileService = fileService;
              <br />
              curlyBraceClose
              <br />
              // Controller logic using databaseService and fileService
              <br />
              curlyBraceClose
              <br />
            </code>
            <br />
            <h3>summary:</h3>
            <p>
              In Spring Boot, beans are managed by the Spring container, and
              Dependency Injection is used to wire beans together. Annotating
              classes with @Component and its specialized annotations creates
              beans. Using @Autowired on constructors or setter methods allows
              Spring to inject dependencies automatically, promoting modular and
              maintainable code.
            </p>
          </article>
        </section>
        <section className="main-section" id="Runners">
          <header>Runners in Spring Boot</header>
          <article>
            <p>
              Runners in Spring Boot are components that perform tasks when the
              Spring application starts up. They provide a way to execute code
              during application initialization and are particularly useful for
              setting up data, performing background tasks, or initializing
              resources.
            </p>
            <br />
            <h3>Creating a Runner:</h3>
            <br />
            <p>
              To create a custom runner, implement the CommandLineRunner or
              ApplicationRunner interface and override the run method.
            </p>
            <code>
              import org.springframework.stereotype.Component;
              <br />
              <br />
              @Component
              <br />
              public class MyRunner implements CommandLineRunner curlybracOpen
              <br />
              <br />
              @Override
              <br />
              public void run(String... args) throws Exception curlybracOpen
              <br />
              // Code to execute on application startup curlybracClose
              <br />
              curlybracClose
              <br />
            </code>
            <h3>Using CommandLineRunner vs ApplicationRunner:</h3>
            <br />
            <p>
              Both CommandLineRunner and ApplicationRunner provide the same
              functionality, but with different input arguments.
              CommandLineRunner accepts the command-line arguments as an array
              of strings, while ApplicationRunner uses the ApplicationArguments
              interface, which provides more flexibility and additional features
              like non-option arguments and option values.
            </p>
            <br />
            <h3>Ordering Runners:</h3>
            <br />
            <p>
              If you have multiple runners, you can control their execution
              order using the @Order annotation. Lower values have higher
              priority.
            </p>
            <code>
              import
              org.springframework.boot.autoconfigure.SpringBootApplication;
              <br />
              import org.springframework.boot.SpringApplication;
              <br />
              import org.springframework.context.annotation.Bean;
              <br />
              import org.springframework.core.annotation.Order;
              <br />
              <br />
              @SpringBootApplication
              <br />
              public class MyApp curlybracOpen
              <br />
              <br />
              public static void main(String[] args) curlybracOpen
              <br />
              SpringApplication.run(MyApp.class, args);
              <br />
              curlybracClose
              <br />
              <br />
              @Bean
              <br />
              @Order(1)
              <br />
              public CommandLineRunner runnerOne() curlybracOpen
              <br />
              return args -> curlybracOpen
              <br />
              // Code for runnerOne curlyBraceClose;
              <br />
              curlyBraceClose
              <br />
              <br />
              @Bean
              <br />
              @Order(2)
              <br />
              public ApplicationRunner runnerTwo() curlybracOpen
              <br />
              return args -> curlybracOpen
              <br />
              // Code for runnerTwo curlyBraceClose;
              <br />
              curlyBraceClose
              <br />
              curlyBraceClose
              <br />
            </code>
            <h3>Example Use Cases:</h3>
            <br />
            <ul>
              <li>
                <b>Data Initialization: </b>Runners are helpful for loading
                initial data into the database when the application starts.
              </li>
              <li>
                <b>Resource Configuration:</b>You can use runners to set up
                external resources, like connecting to a message queue.
              </li>
              <li>
                <b>Scheduled Tasks Setup: </b>If you want to schedule tasks to
                run at application startup, runners can be used to configure and
                start these tasks.
              </li>
            </ul>
            <br />
            <h3>summary:</h3>
            <br />
            <p>
              Runners in Spring Boot allow you to perform specific tasks during
              application startup. By implementing the CommandLineRunner or
              ApplicationRunner interfaces and overriding their run methods, you
              can execute custom code as the application initializes. You can
              also control the execution order of runners using the @Order
              annotation.
            </p>
          </article>
        </section>
        <section className="main-section" id="Reference">
          <header>Reference</header>
          <article>
            <p>To Know moree about Sprint Boot jump to the below  <a href="https://www.tutorialspoint.com/spring_boot/index.htm">Website</a></p>
           
          </article>
          </section>
      </main>
    </div>
  );
};

export default SpringBootDocumentation;
