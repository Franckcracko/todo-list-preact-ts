const INITIAL_DATE = new Date().toISOString().split('T')[0]

export const INITIAL_STATE = {
  description: '',
  importance: "normal" ,
  date: INITIAL_DATE,
  done: false,
}

type ACTIONTYPE =
  | { type: "change_value", payload: { name: string, value: string } }
  | { type: "clear" }

export function FormReducer(state: typeof INITIAL_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case "change_value":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    case "clear":
      return {
        description: '',
        importance: "normal" ,
        date: INITIAL_DATE,
        done: false,
      }
  }
}