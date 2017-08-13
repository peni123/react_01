export default function handleVisibility(state = {
	videoId: 'IR6smI_YJDE'
}, action) {

	switch (action.type) {
		case 'CHANGE_VIDEO':
			return Object.assign({}, state, {
				videoId: action.payload
			})

		default:
			return state
	}
}