// A reducer takes in two things:

// 1. The Action (info about what happened)
// 2. The copy of the curtrent state

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state, // Take the current state
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}


function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, {
        user:action.author,
        text: action.comment
      }];
    case "REMOVE_COMMENT":
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one
        ...state.slice(action.i+1)
      ]
    default:
      return state;
    }
  return state;
}

export default comments;
