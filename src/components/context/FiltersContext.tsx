import { JSX, createContext } from "preact";
import { useReducer } from "preact/hooks";
import { FiltersReducer, initialState, statesTodo } from "../reducers/filters";


type FiltersContextType = {
  filters: statesTodo
  changeFilters: (filter: statesTodo) => void
  clearFilters: () => void
}

export const FiltersContext = createContext<FiltersContextType>({
  filters: "ALL",
  changeFilters: () => { },
  clearFilters: () => { }
})

export const FiltersProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer(FiltersReducer, initialState)

  const clearFilters = () => dispatch({ type: "clear" })

  const changeFilters = (state: statesTodo) => dispatch({ type: "change_state", payload: state })

  return <FiltersContext.Provider value={{
    filters:state,
    clearFilters,
    changeFilters
  }}> {children} </FiltersContext.Provider>
}

