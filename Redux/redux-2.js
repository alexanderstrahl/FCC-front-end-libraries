//Redux: Get State from the Redux Store
const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  let currentState = store.getState();