# React.js

### React Concepts

1. Don't touch the DOM. I'll do it.
2. Build websites like lego blocks.
3. Unidirectional data flow.
4. UI, the rest is up to you.

### Thinking in React

1. Decide on components.
2. Decide the state and where it lives.
3. What changes when state changes?

### package.json

1. react-script: Takes care of webpack and babel. Calls scripts the below.
2. scripts:
   1. start: starts the project
   2. build: converts src into public which browser understands.
   3. test: runs the test code.
   4. eject: takes out all the hidden config files(babel and webpack) for managing ourselves.

### Directory

1. src: All the react code we write (the workspace).
2. public: Code which browser understands. \*
3. build: Code which browser understands(optimised).Used for deploying applications.

### Array methods you might wanna use

1. includes()
2. map()
3. filter()
4. reduce()
5. find()

### How React renders

![react](/img/render.png)

### Calling setState()

- this.setState({apples:1}) - this one's okay (since the current state is not used to update state).
- this.setState({apples:this.state.apples + 1}) - **is not the right way of updating state**.
- Instead **use this:**
  ` this.setState((prevState,prevProps)=>{ return {apples:prevState.apples + 1} })`

### React life-cycle methods

![lifecycle](/img/life1.png)
![lifecycle](/img/life2.png)

1. componentDidMount() - is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Good for setting timers too.

2. componentDidUpdate() - similar to above. But invoked immediately after updating.

3. componentWillUnmount() - componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

4. shouldComponentUpdate(nextProps,nextState) - selectively hijack and avoid re-render.

5. forceUpdate() - should be avoided since its bad practice.

### React Router & Routing

Visit : **https://reactrouter.com/web/api/match**

- **Use withRouter()**

* **match**:
  A match object contains information about how a <Route path> matched the URL. match objects contain the following properties:

1. params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path. Eg. /topics/:topicId - Here, params: {topicId: "13"}
2. isExact - (boolean) true if the entire URL was matched (no trailing characters)
3. path - (string) The path pattern used to match. Useful for building nested <Route>s
4. url - (string) The matched portion of the URL. Useful for building nested <Link>s

- **history**:

1. push(path, [state]) - (function) Pushes a new entry onto the history stack
2. location - (object) The current location. May have the following properties:
   1. pathname - (string) The path of the URL.
   2. search - (string) The URL query string
   3. hash - (string) The URL hash fragment
   4. state - (object) location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. Only available in browser and memory history.

- **location**:

1. pathname : full path name where we are currently

### Firebase

1. Query asks for a document or collection. [.doc(), .collection()]
2. We get back a refObj
3. queryRef provides details and querySnapshots. It represents the current place in the db that we are querying.  
   Doesn't have the actual data. It has properties that tell us details about the data or method to get snapShot obj(which will give data).
4. docRef obj to perform CRUD operations. [.set(),.get(),.update(),.delete()]
5. collectionRef obj to add couemtns [.add()]
6. snapObj from refObj
7. docRef - docSnapShot
8. collectionRef - querySnapShot

### Why Redux

1. Good for managing large state.
2. Useful for sharing data between components.
3. Predictable state management using 3 principles:
   1. Single source of truth: one single big object for the entire state of the app.
   2. State is read only.
   3. Changes using pure functions.

### With vs without Redux

![withredux](/img/withredux)
![withoutredux](/img/withoutredux)

### Redux flow

![reduxflow](/img/reduxflow.png)

### Sample reducer

![sampleReducer](/img/sampleReducer.png)

### connect() - mapDispatchToProps & mapStateToProps

- https://react-redux.js.org/api/connect

### Importing SVGs

- import { ReactComponent as Logo } from '../../assets/crown.svg';
