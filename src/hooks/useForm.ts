import { useReducer } from "preact/hooks"
import { FormReducer, INITIAL_STATE } from "../components/reducers/form"

export const useForm = () => {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE)
  const changeValue = (payload: { name: string, value: string }) => dispatch({ type: "change_value", payload })
  const clearForm = () => dispatch({ type: "clear" })
  return { formValues: state, changeValue, clearForm }
}