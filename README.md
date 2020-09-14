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

Visit : **https://devhints.io/react-router**
