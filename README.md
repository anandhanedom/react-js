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

### React life-cycle methods

1. componentDidMount() - is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Good for setting timers too.
