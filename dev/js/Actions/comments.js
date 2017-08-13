export function addComment(comment) {
	let text = comment.text;
	let id = comment.id;
	
	return {
		type: 'ADD_COMMENT',
		text: text,
		id: id
	}
}

