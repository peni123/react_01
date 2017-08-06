
export default  function handleVisibility(state = {visibility: false}, action) {
	console.log("action is called and the action is", action)
 switch (action.type) {
    case 'OPEN_PLAYER':
      return Object.assign({}, state, {
        visibility: true
      })
	case 'CLOSE_PLAYER':
      return Object.assign({}, state, {
        visibility: false
      })
    default:
      return state
  }
}

