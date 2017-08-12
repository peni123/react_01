export default  function handleComments(state = [], action) {
	console.log("action is called and the action is", action)
 switch (action.type) {
    case 'ADD_COMMENT':
      return [

      ...state, 

       { text: action.text,
         id: action.id
       }

      ];
   case 'ADD_REPLY':
    return [

    ...state, 
    
     { text: action.text,
       id: action.id
     }

    ] 

    default:
      return state
  }
}
