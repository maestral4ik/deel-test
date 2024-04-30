# Questions

## What is the difference between Component and PureComponent? Give an example where it might break my app.

Component and PureComponent are both classes in React that can be used to create reusable UI elements. The main difference between them is how they handle updates and re-renders.

Component: When a component's state or props change, it will re-render by default. This can sometimes lead to unnecessary re-renders and performance issues.

PureComponent: PureComponent is a subclass of Component that implements a shouldComponentUpdate method with a shallow prop and state comparison.

Example where it might break your app:
If you are using a PureComponent and your props or state contain complex nested data structures (such as objects or arrays), the shallow comparison may not detect changes if the reference to the object or array remains the same even though its contents have changed.

## Context + ShouldComponentUpdate might be dangerous. Why is that?

Using Context along with ShouldComponentUpdate might be dangerous because Context changes can trigger re-renders of components that don't actually need to be re-rendered. This is because ShouldComponentUpdate compares the previous props and state with the current props and state to determine if a component should re-render. However, if the context changes and triggers a re-render without changing the props or state, ShouldComponentUpdate might not catch this and incorrectly prevent the re-render.

## Describe 3 ways to pass information from a component to its PARENT.

1. Props: One of the most common ways to pass information from a child component to its parent is by using props. The parent component can pass down props to the child component, and the child component can then update these props and trigger a callback function provided by the parent.
    
Parent Component:

```js
const ParentComponent = () => {
  const handleChildData = (data) => {
    console.log(data);
  };

  return <ChildComponent onDataUpdate={handleChildData} />;
}
```

Child Component:

```js
const ChildComponent = ({ onDataUpdate }) => {
  const handleClick = () => {
    onDataUpdate("Data from child component");
  };

  return <button onClick={handleClick}>Send Data</button>;
}
```

2. Context: We can use Context to pass information from a child component to its parent. The child component can update the context, and the parent component can get this updated context value.

Parent Component:

```js
const DataContext = createContext();

const ParentComponent = () => {
  const [data, setData] = useState("");

  return (
    <DataContext.Provider value={{ data, setData }}>
      <ChildComponent />
    </DataContext.Provider>
  );
}
```

Child Component:

```js
const ChildComponent = () => {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    setData("Data from child component");
  }, [setData]);

  return null;
}
```

3. The third option for passing information from a child component to a parent component is to use state managers. If we use Redux, we can dispatch an action in the child component and change the state. And in the parent component we can use a selector to get a new value. 

## Give 2 ways to prevent components from re-rendering.

1. Using React.memo() for Functional Components: React.memo is a higher-order component that can be used with functional components to prevent unnecessary re-renders.
2. Use `useMemo` and `useCallback` hooks
3. Avoid passing unnecessary props. 
4. Correct use of the useState hook. 

## What is a fragment and why do we need it? Give an example where it might break my app.

Fragments are syntax that allow us to add multiple elements to a React component without wrapping them in an extra DOM node.

Fragments do not add nodes to the DOM, just a virtual DOM container. So if styling or manipulation depends on the DOM structure represented by wrapper elements, using fragments can lead to unexpected behavior.

## Give 3 examples of the HOC pattern.

1. Authentication Higher Order Component (HOC): This HOC can be used to restrict access to certain routes or components based on the user's authentication status. It checks if the user is authenticated and redirects them to the login page if not.

2. Logging Higher Order Component (HOC): This HOC can be used to log certain actions or events within a component.

3. Styling Higher Order Component (HOC): This HOC can be used to apply common styles or themes to multiple components. 

## What's the difference in handling exceptions in promises, callbacks and async...await?

In summary, while promises use `.then()` and `.catch()`, callbacks rely on error parameters in the callback functions, and async/await allows for synchronous-style error handling with try/catch blocks. 

## How many arguments does setState take and why is it async.

The `setState` function in React takes two arguments: an update function or object representing the new state, and an optional callback function to be executed after the state is updated. The reason `setState` is asynchronous is to optimize performance and allow batch updating of multiple states for greater efficiency.

When you call `setState`, React schedules the state update and re-renders the component. However, it doesn't update the state immediately or redraw the component synchronously. Instead, React collects multiple `setState` calls together and performs the update in a single rendering cycle. This avoids unnecessary re-rendering and improves the overall performance of the application.

## List the steps needed to migrate a Class to Function Component.

- Remove the `class` keyword and convert the class component into a function component.
- Remove the `render()` method and return the JSX directly from the function component.
- Move any state that the class component is managing to `useState` hooks in the functional component.
- If the class component has lifecycle methods, you can use `useEffect` hook to replicate their behavior.
- Make sure to update how props are accessed within the component. In class components, props are accessed using `this.props`, while in functional components, props are passed as arguments to the component function. 
- Remove any unused code related to the class component, such as lifecycle methods, state declarations, etc.

## List a few ways styles can be used with components.

1. Inline styles
2. CSS Modules
3. Styled-components
4. CSS-in-JS libraries

## How to render an HTML string coming from the server.

To render an HTML string coming from the server in a React component, you can use the `dangerouslySetInnerHTML` attribute provided by React. This attribute allows you to set the inner HTML of a component, but it should be used with caution as it can expose your application to XSS (Cross-Site Scripting) attacks if not handled properly.
