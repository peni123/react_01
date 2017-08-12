
/*let id = function() {
    let counter = 0;
    return function() { return counter++; };
}();*/

export function addComment(comment) {
	console.log(comment)
	let text = comment.text;
	let commentId = comments.id;
		
	console.log(commentId)
  return { type: 'ADD_COMMENT', text: text, id: commentId}
}

export function addReply(reply) {
  return { type: 'ADD_REPLY', reply}
}