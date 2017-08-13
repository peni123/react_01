export default function handleComments(state = [], action) {

  switch (action.type) {
    case 'ADD_COMMENT':
      return [

        ...state,

        {
          text: action.text,
          id: action.id
        }

      ];

    default:
      return state
  }
}