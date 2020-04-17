1. What problem does the context API help solve?
    Context API helps us share specific forms of data across all levels of the app, and it solves prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions send data to the store
    Reducers are functions that will affect/change the app's state
    The store is the whole state of the app. It is known as a single source of truth in a redux app because it is the single source containing all of the application's state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    The application state is global. The component state is local. A good time to use Application state is when you're creating a large app, so you can managwe all of the state in one place.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    With redux thunk, you can create an action that returns a function instead of an action

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Context API. It is easy to grasp the concept of, and (in my opinion) easier to understand and follow than props. 