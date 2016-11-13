// A reducer takes in two things:

// 1. The Action (info about what happened)
// 2. The copy of the curtrent state

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;
