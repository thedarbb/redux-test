var redux = require('redux');

var defaultState = {searchText: '', showCompleted: false, todos: []};

var reducer = (state = defaultState, action) => {

  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
    return {
      ...state,
      searchText: action.searchText
    };
    default:
    return state;
  }
};

var store = redux.createStore(reducer);
var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'test'
});

console.log("searchText should be test", store.getState());
