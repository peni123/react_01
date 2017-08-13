export default function handleVisibility(state = {
  visibility: false
}, action) {

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