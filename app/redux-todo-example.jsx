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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'testing...'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'searching...'
});
