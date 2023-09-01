import React from "react";
import "../../Frameworks/style.css";
import { useNavigate } from "react-router-dom";

const ReactNative = () => {
  let navigate = useNavigate();
  return (
    <div className="body">
      <nav id="navbar">
        <button className="button-28" onClick={() => navigate(-1)}>
          &larr;Back
        </button>
        <header>React Native Documentation</header>
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
            <a className="nav-link" href="#State">
              React Native-State
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Props">
              React Native-Props
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Styling">
              React Native-Styling
            </a>
          </li>
          <li>
            <a className="nav-link" href="#FlexBox">
              React Native-FlexBox
            </a>
          </li>
          <li>
            <a className="nav-link" href="#ListView">
              React Native-ListView
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Text_input">
              React Native-Text input
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Reference">
              React Native- Reference
            </a>
          </li>
          {/* Add more sections as needed */}
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction to React Native</header>
          <article>
            <p>
              React Native is an open-source framework for building native
              mobile applications using JavaScript and React. It allows
              developers to create mobile apps that look and feel like native
              apps while using the same codebase across multiple platforms,
              including iOS and Android.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Cross-Platform:</strong> Write code once and deploy it
                on both iOS and Android platforms.
              </li>
              <li>
                <strong>Native Components:</strong> Use native UI components,
                resulting in a more authentic user experience.
              </li>
              <li>
                <strong>Hot Reloading:</strong> See real-time changes in your
                app as you code without losing state.
              </li>
              <li>
                <strong>Performance:</strong> Deliver high-performance apps by
                leveraging native device capabilities.
              </li>
              <li>
                <strong>Declarative Syntax:</strong> Build UI using a
                declarative syntax, similar to React for web.
              </li>
              <li>
                <strong>Community and Ecosystem:</strong> Benefit from a large
                and active community, along with a rich ecosystem of libraries
                and tools.
              </li>
            </ul>

            <h2>Getting Started</h2>
            <p>
              To begin developing with React Native, you'll need a basic
              understanding of JavaScript and React concepts. You'll also need
              to set up your development environment by installing the required
              tools, such as Node.js and a code editor. Once set up, you can
              create a new React Native project using the command-line
              interface.
            </p>

            <h2>Documentation</h2>
            <p>
              This documentation provides comprehensive guides, tutorials, and
              references to help you build powerful mobile applications using
              React Native. Whether you're a beginner or an experienced
              developer, you'll find valuable resources to create engaging and
              feature-rich apps.
            </p>

            <p>
              Start your journey into mobile app development with React Native
              by exploring the content in this documentation.
            </p>
          </article>
        </section>
        <section className="main-section" id="State">
          <header>React Native-State</header>
          <article>
            <p>
              State is a fundamental concept in React Native that allows
              components to manage and store dynamic data. It represents the
              internal state of a component, which can change over time in
              response to user interactions, data fetching, or other events.
            </p>

            <h2>Understanding State</h2>
            <p>
              State is an object that holds the data that can be used to control
              a component's behavior and appearance. Unlike props, which are
              passed down from parent components, state is managed internally by
              the component itself.
            </p>

            <h2>Declaring State</h2>
            <p>
              To declare state in a React Native component, you use the{" "}
              <code>useState</code> hook provided by the <code>react</code>{" "}
              module. This hook returns a state variable and a function to
              update it.
            </p>
            <pre>
              <code>
                import React, `{"{"}` useState `{"}"}` from 'react';
                <br />
                <br />
                function Counter() `{"{"}` <br />
                const [count, setCount] = useState(0);
                <br />
                <br />
                return (<br />
                <div>
                  <br />
                  <p>
                    Count: `{"{"}` count`{"}"}`
                  </p>
                  <br />
                  <button onClick={() => setCount(count + 1)}>Increment</button>
                  <br />
                </div>
                <br />
                );
                <br />`{"}"}`
              </code>
            </pre>

            <h2>Updating State</h2>
            <p>
              State should not be directly modified; instead, you use the state
              updater function to modify its value. React Native will
              automatically re-render the component when state changes,
              reflecting the updated data in the UI.
            </p>

            <h2>Managing Complex State</h2>
            <p>
              For more complex state management, you might need to use tools
              like Redux or MobX. These libraries provide a centralized way to
              manage state across multiple components and handle more advanced
              scenarios.
            </p>

            <p>
              Remember that excessive use of state can lead to complex component
              interactions and harder debugging. It's a good practice to keep
              state as minimal as possible and rely on props when appropriate.
            </p>

            <p>
              This brief section introduces the concept of state in React
              Native. By understanding how to declare, update, and manage state,
              you can build interactive and dynamic user interfaces in your
              React Native applications.
            </p>
          </article>
        </section>
        <section className="main-section" id="Props">
          <header>React Native-Props</header>
          <article>
            <h2>Understanding Props</h2>
            <p>
              Props (short for properties) are a way to pass data from a parent
              component to a child component in React Native. They allow you to
              customize and configure your components dynamically.
            </p>

            <h3>Passing Props</h3>
            <p>
              When you render a child component within a parent component, you
              can provide attributes to the child component. These attributes
              are called props and are passed as key-value pairs.
            </p>
            <pre>
              <code>
                // Parent Component
                <br />
                &lt;ChildComponent name="John" age=`{"{"}`25`{"}"}` /&gt;
              </code>
            </pre>

            <h3>Accessing Props</h3>
            <p>
              In the child component, you can access props using the{" "}
              <code>this.props</code> object. Props are read-only, meaning they
              cannot be modified within the child component.
            </p>
            <pre>
              <code>
                // Child Component &lt;Text&gt;Hello, `{"{"}`this.props.name`
                {"}"}`! You are `{"{"}`this.props.age`{"}"}` years
                old.&lt;/Text&gt;
                <br />
              </code>
            </pre>

            <h3>Default Props</h3>
            <p>
              You can define default values for props using the{" "}
              <code>defaultProps</code> property in the child component. This
              ensures that props are provided even if not explicitly passed by
              the parent.
            </p>
            <pre>
              <code>
                class ChildComponent extends React.Component `{"{"}`<br />
                static defaultProps = `{"{"}`<br />
                age: 18,
                <br />`{"}"}`;
                <br />
                <br />
                render() `{"{"}`<br />
                return &lt;Text&gt;Age: `{"{"}`this.props.age`{"}"}
                `&lt;/Text&gt;;
                <br />`{"}"}`<br />`{"}"}`
              </code>
            </pre>

            <h3>PropTypes</h3>
            <p>
              React Native provides the <code>PropTypes</code> library to
              validate the types of props. You can specify the expected types
              for each prop to catch potential issues during development.
            </p>
            <pre>
              <code>
                import PropTypes from 'prop-types';
                <br />
                <br />
                class ChildComponent extends React.Component `{"{"}`<br />
                render() `{"{"}`<br />
                return &lt;Text&gt;Age: `{"{"}`this.props.age`{"}"}
                `&lt;/Text&gt;;
                <br />`{"}"}`<br />`{"}"}`<br />
                <br />
                ChildComponent.propTypes = `{"{"}`<br />
                age: PropTypes.number.isRequired,
                <br />`{"}"}`;
              </code>
            </pre>

            <h3>Using Props Effectively</h3>
            <p>
              Props are a fundamental concept in React Native, enabling you to
              create reusable and dynamic components. Understanding how to pass,
              access, and validate props is essential for building robust and
              flexible user interfaces.
            </p>
          </article>
        </section>
        <section className="main-section" id="Styling">
          <header>React Native-Styling</header>
          <article>
            <p>
              Styling in React Native is similar to web styling but utilizes a
              different set of components and properties. React Native provides
              a flexible way to style your components using JavaScript.
            </p>

            <h2>Inline Styles</h2>
            <p>
              You can apply styles directly to components using the{" "}
              <code>style</code> prop. Pass an object with style properties to
              define the component's appearance.
            </p>
            <pre>
              <code>
                import `{"{"}` View, Text, StyleSheet `{"}"}` from
                'react-native';
                <br />
                const App = () =&gt; `{"{"}`<br />
                return (<br />
                &lt;View style=&#123;&#123; backgroundColor: "lightblue",
                padding: 10 &#125;&#125;&gt; &lt;Text style=&#123;&#123;
                fontSize: 18, fontWeight: "bold" &#125;&#125;&gt; Hello, React
                Native! &lt;/Text&gt; &lt;/View&gt;
                <br />
                );
                <br />`{"}"}`;
              </code>
            </pre>

            <h2>Stylesheets</h2>
            <p>
              Stylesheets provide a way to define reusable styles using
              JavaScript objects. You can create a stylesheet using the{" "}
              <code>StyleSheet.create()</code> method and then reference the
              defined styles in your components.
            </p>
            <pre>
              <code>
                const styles = StyleSheet.create(`{"{"}`<br />
                container: `{"{"}`<br />
                backgroundColor: 'lightblue',
                <br />
                padding: 10,
                <br />`{"}"}`,
                <br />
                text: `{"{"}`<br />
                fontSize: 18,
                <br />
                fontWeight: 'bold',
                <br />`{"}"}`,
                <br />`{"}"}`);
                <br />
                <br />
                const App = () =&gt; `{"{"}`<br />
                return (<br />
                &lt;View style=&#123; styles.container &#125;&gt;
                <br />
                &lt;Text style=&#123;styles.text&#125;&gt;Hello, React Native!
                &lt;/Text &gt;
                <br />
                &lt;/View&gt;
                <br />
                );
                <br />`{"}"}`;
                <br />
              </code>
            </pre>

            <h2>Flexbox Layout</h2>
            <p>
              React Native uses flexbox for layout, similar to CSS flexbox. You
              can use properties like <code>flexDirection</code>,{" "}
              <code>justifyContent</code>, and <code>alignItems</code> to create
              responsive layouts.
            </p>
            <pre>
              <code>
                const styles = StyleSheet.create(`{"{"}`<br />
                container: `{"{"}`<br />
                flex: 1,
                <br />
                flexDirection: 'column',
                <br />
                justifyContent: 'center',
                <br />
                alignItems: 'center',
                <br />`{"}"}`,
                <br />`{"}"}`);
              </code>
            </pre>

            <h2>External Libraries</h2>
            <p>
              React Native supports various third-party styling libraries to
              enhance styling capabilities, such as{" "}
              <code>styled-components</code> and <code>react-native-paper</code>
              .
            </p>

            <p>
              This concise section covers the basics of styling in React Native,
              allowing you to create visually appealing and responsive mobile
              UIs. For more in-depth information and advanced styling
              techniques, refer to the React Native documentation on styling.
            </p>
          </article>
        </section>
        <section className="main-section" id="FlexBox">
          <header>React Native-FlexBox</header>
          <article>
            <p>
              Flexbox is a powerful layout system in React Native that helps you
              design responsive and flexible user interfaces.
            </p>

            <h2>Flex Container</h2>
            <p>
              In React Native, a component becomes a flex container when you
              apply the <code>display: 'flex'</code> style. This allows you to
              control the layout and positioning of its child components.
            </p>

            <h2>Flex Direction</h2>
            <p>
              The <code>flexDirection</code> style defines the direction of the
              main axis for the flex container. Values can be <code>'row'</code>{" "}
              (default), <code>'column'</code>, <code>'row-reverse'</code>, or{" "}
              <code>'column-reverse'</code>.
            </p>

            <h2>Flex Child Components</h2>
            <p>
              Children of a flex container are called flex items. They can have
              their own layout properties:
            </p>
            <ul>
              <li>
                <code>flex</code>: Specifies the flex grow factor, flex shrink
                factor, and flex basis.
              </li>
              <li>
                <code>alignSelf</code>: Overrides the alignment defined by the
                parent flex container.
              </li>
              <li>
                <code>order</code>: Specifies the order in which flex items
                appear.
              </li>
            </ul>

            <h2>Flex Justify Content</h2>
            <p>
              The <code>justifyContent</code> style aligns flex items along the
              main axis. Values include <code>'flex-start'</code>,{" "}
              <code>'flex-end'</code>, <code>'center'</code>,{" "}
              <code>'space-between'</code>, and <code>'space-around'</code>.
            </p>

            <h2>Flex Align Items</h2>
            <p>
              The <code>alignItems</code> style aligns flex items along the
              cross axis. Values include <code>'flex-start'</code>,{" "}
              <code>'flex-end'</code>, <code>'center'</code>,{" "}
              <code>'stretch'</code>, and <code>'baseline'</code>.
            </p>

            <h2>Flex Wrap</h2>
            <p>
              The <code>flexWrap</code> style determines whether flex items
              should wrap to multiple lines or stay on a single line. Values are{" "}
              <code>'nowrap'</code> (default) and <code>'wrap'</code>.
            </p>

            <h2>Flexbox in Practice</h2>
            <p>
              Using flexbox in React Native allows you to create responsive
              layouts that adapt to different screen sizes and orientations.
              It's a versatile tool for designing complex UIs with ease.
            </p>

            <p>
              This concise section provides an overview of Flexbox in React
              Native. To dive deeper into its features and usage, refer to the
              official React Native documentation on Flexbox.
            </p>
          </article>
        </section>
        <section className="main-section" id="ListView">
          <header>React Native-ListView</header>
          <article>
            <p>
              <code>ListView</code> is a core component in React Native that
              renders a scrollable list of items. It's commonly used to display
              dynamic content, such as lists of data, in a performant way.
            </p>

            <h2>Creating a ListView</h2>
            <p>
              To create a <code>ListView</code>, you need to import it from the{" "}
              <code>react-native</code> package and render it in your
              component's JSX. You'll also need to provide data and define a
              render function to display each item.
            </p>
            <pre>
              <code>
                import &#123; ListView, Text, View &#125; from 'react-native';
                <br />
                <br />
                const data = ['Item 1', 'Item 2', 'Item 3'];
                <br />
                <br />
                const renderRow = (item) =&lt; (<br />
                &lt;View&gt;
                <br />
                &lt;Text&gt;&#123;item&#125;&lt;/Text&gt;
                <br />
                &lt;/View&gt;
                <br />
                );
                <br />
                <br />
                const MyListView = () = &#123; <br />
                const dataSource = new ListView.DataSource(&#123; rowHasChanged:
                (r1, r2) =&gt; r1 !== r2 &#125;);
                <br />
                <br />
                return (<br />
                &lt;ListView
                <br />
                dataSource=&#123; dataSource.cloneWithRows(data)&#125; <br />
                renderRow=&#123;renderRow &#125; <br />
                /&gt;
                <br />
                );
                <br />
                &#125; ;<br />
              </code>
            </pre>
            <h2>Customizing ListView</h2>
            <p>
              You can customize the appearance and behavior of your{" "}
              <code>ListView</code> by using various props and styles. For
              example, you can specify the height of each row, handle scroll
              events, and implement pull-to-refresh functionality.
            </p>

            <h2>Performance Considerations</h2>
            <p>
              While <code>ListView</code> is a convenient way to display lists,
              React Native has introduced the more efficient{" "}
              <code>FlatList</code> component for handling lists with improved
              performance and memory management. It's recommended to use{" "}
              <code>FlatList</code> for new projects.
            </p>

            <h2>Conclusion</h2>
            <p>
              <code>ListView</code> is a powerful component in React Native that
              allows you to display scrollable lists of data. However, for
              optimal performance and modern features, consider using the{" "}
              <code>FlatList</code> component instead.
            </p>
          </article>
        </section>
        <section className="main-section" id="Text_input">
          <header>React Native-Text input</header>
          <article>
            <p>
              Text Input is a fundamental component in React Native for
              capturing user input. It allows users to enter text, numbers, or
              other input data through a native keyboard.
            </p>

            <h2>Basic Usage</h2>
            <p>
              To create a text input field, use the <code>TextInput</code>{" "}
              component from the <code>react-native</code> package.
            </p>
            <pre>
              <code>
                import &#123; TextInput &#125; from 'react-native';
                <br />
                <br />
                function MyComponent() &#123;
                <br />
                return (<br />
                &lt;TextInput
                <br />
                placeholder="Enter text"
                <br />
                onChangeText=&#123;text =&gt; console.log(text)&#125;
                <br />
                /&gt;
                <br />
                );
                <br />
                &#125;
              </code>
            </pre>

            <h2>Props</h2>
            <p>
              The <code>TextInput</code> component supports various props for
              customization:
            </p>
            <ul>
              <li>
                <code>value</code>: Current value of the input.
              </li>
              <li>
                <code>placeholder</code>: Placeholder text when the input is
                empty.
              </li>
              <li>
                <code>onChangeText</code>: Callback function when text changes.
              </li>
              <li>
                <code>keyboardType</code>: Type of keyboard to display (numeric,
                email, etc.).
              </li>
              <li>
                <code>secureTextEntry</code>: Masks input for sensitive data
                (passwords).
              </li>
            </ul>

            <h2>Controlled Components</h2>
            <p>
              For controlled components, use the <code>value</code> prop to
              manage the input's value. Update it with the{" "}
              <code>onChangeText</code> callback.
            </p>
            <pre>
              <code>
                import &#123; useState &#125; from 'react';
                <br />
                import &#123; TextInput &#125; from 'react-native';
                <br />
                <br />
                function MyComponent() &#123;
                <br />
                const [inputValue, setInputValue] = useState('');
                <br />
                return (<br />
                &lt;TextInput
                <br />
                value=&#123;inputValue&#125;
                <br />
                onChangeText=&#123;text =&gt; setInputValue(text)&#125;
                <br />
                /&gt;
                <br />
                );
                <br />
                &#125;
              </code>
            </pre>

            <h2>Styling</h2>
            <p>
              You can style the <code>TextInput</code> using the{" "}
              <code>style</code> prop to customize appearance, font, and layout.
            </p>

            <h2>Additional Functionality</h2>
            <p>
              Text Input can be enhanced with auto-complete, input validation,
              and other features using libraries like{" "}
              <code>react-native-elements</code> or custom logic.
            </p>

            <p>
              This concise section covers the basics of using the{" "}
              <code>TextInput</code> component in React Native. For more details
              and advanced functionalities, refer to the official React Native
              documentation.
            </p>
          </article>
        </section>
        <section className="main-section" id="Reference">
          <header>Reference</header>
          <article>
            <p>
              To Know moree about React Native jump to the below{" "}
              <a href="https://www.tutorialspoint.com/react_native/index.htm">
                Website
              </a>
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};
export default ReactNative;
