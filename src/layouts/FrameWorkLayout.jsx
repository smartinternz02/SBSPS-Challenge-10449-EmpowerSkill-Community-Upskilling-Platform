import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import "./FrameWorkLayout.css";
import { Link } from "react-router-dom";
import Reactimg from "../assets/react.webp";
import Djangoimg from "../assets/django.png";
import Rubyimg from "../assets/Ruby-Universe.png";
import SpringBootimg from "../assets/spring-boot-2.jpeg";
import SwiftUiimg from "../assets/swift-uijpeg.jpeg";




export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser); 
  }, []);
  return (
    <>
    <div>
      <Topbar currentUser={currentUser} />
      </div>
      <div id="link" style={{ clear: 'both', zIndex: 999 }}>
      <div className="ddsmoothmenu">
        <ul>
          <li><Link to="/frameworks/java">Java</Link></li>
          <li><Link to="/frameworks/nodejs">Node js</Link></li>
          <li><Link to="/frameworks/expressjs">Express js</Link></li>
          <li><Link to="/frameworks/springboot">Spring Boot</Link></li>
          <li><Link to="/frameworks/reactnative">React Native</Link></li>
          <li><Link to="/frameworks/django">Django</Link></li>
          <li><Link to="/frameworks/flutter">Flutter</Link></li>
          <li><Link to="/frameworks/rubyonrails">Ruby On Rails</Link></li>
          <li><Link to="/frameworks/flask">Flask</Link></li>
          <li><Link to="/frameworks/tenserFlow">TenserFlow</Link></li>
        </ul>
        <br style={{ clear: 'left' }} />
      </div>
    </div>
    <div>
    <h1>Exploring Frameworks: From JavaScript to Python</h1>
    <p>In the world of programming, frameworks play a crucial role in simplifying and speeding up the development process. Let's take a journey through some popular frameworks across different programming languages.</p>
    
    <div className="framework">
        <h2>JavaScript - React</h2>
        <p>React is a JavaScript library developed by Facebook for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of their applications. React's virtual DOM minimizes browser manipulation, resulting in faster performance and a better user experience.</p>
        <p>React's component-based architecture encourages modular design and reusability. It has a vibrant ecosystem with tools like Redux for state management and React Router for handling navigation. Its popularity has led to its adoption in both web and mobile app development.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/N3AkSS5hXMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div className="framework">
        <h2>Python - Django</h2>
        <p>Django is a high-level Python framework known for its "batteries-included" approach. It provides tools and libraries for quickly building robust web applications. Django follows the Model-View-Controller (MVC) architectural pattern and emphasizes clean, reusable code. It simplifies tasks like database management, URL routing, and form handling.</p>
        <p>Django's Object-Relational Mapping (ORM) enables developers to work with databases using Python objects. It offers an admin panel for managing application data, making it ideal for content management systems and data-driven applications.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rIWJWy3_njo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div className="framework">
        <h2>Ruby - Ruby on Rails</h2>
        <p>Ruby on Rails, often referred to as Rails, is a web application framework written in Ruby. Rails follows the convention over configuration (CoC) and don't repeat yourself (DRY) principles. It automates many common development tasks, allowing developers to focus on implementing features rather than writing boilerplate code.</p>
        <p>Rails emphasizes RESTful architecture, making it easy to build APIs and web services. It includes tools like ActiveRecord for database interactions and ActionCable for real-time communication. Rails' strong community and vast collection of gems (libraries) contribute to its popularity.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1k-ZtjbU6gI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
    
    <div className="framework">
        <h2>Java - Spring Boot</h2>
        <p>Spring Boot is an extension of the Spring framework for building stand-alone, production-grade applications. It simplifies the setup and configuration of Spring-based applications by providing defaults for many common tasks. Spring Boot promotes rapid development while maintaining a high level of flexibility and scalability.</p>
        <p>Spring Boot embraces microservices architecture and provides features like Spring Data for database access and Spring Security for authentication and authorization. Its auto-configuration feature minimizes boilerplate code and enables developers to focus on business logic.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ch163VfHtvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div className="framework">
        <h2>Swift - SwiftUI</h2>
        <p>SwiftUI is Apple's modern framework for building user interfaces across its platforms. With SwiftUI, developers can use a declarative syntax to describe the UI's structure and behavior. This approach simplifies UI development and enables real-time previews, making it easier to create visually appealing and responsive applications.</p>
        <p>SwiftUI integrates with Swift code seamlessly, allowing developers to build interactive and dynamic UIs. It supports features like animations, gestures, and adaptive layouts. SwiftUI's cross-platform compatibility makes it a go-to choice for iOS, macOS, watchOS, and tvOS app development.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K_OaH4nUI_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <p>Frameworks empower developers to create powerful applications efficiently, regardless of the programming language they choose. Each framework has its strengths, catering to specific development needs and paradigms. As technology evolves, frameworks continue to evolve, offering new possibilities and opportunities for innovation.</p>
    
    <p>So, whether you're building a web app in JavaScript or a mobile app in Swift, exploring and mastering the right framework can make your development journey smoother and more enjoyable.</p>
    </div>
    </>
  );
}
