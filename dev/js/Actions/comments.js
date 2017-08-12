
export function addComment(comment) {
	console.log(comment)
	let text = comment.text;
	let id = comment.id;
		console.log(text, id)

  return { type: 'ADD_COMMENT', text: text, id: id}
}

export function addReply(reply) {
  return { type: 'ADD_REPLY', reply}
}