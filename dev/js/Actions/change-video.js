export function changeVideo(id) {
	console.log(id)
  return { type: 'CHANGE_VIDEO', payload: id }
}
