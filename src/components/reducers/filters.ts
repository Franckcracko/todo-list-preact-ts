export type statesTodo = "ALL" | "COMPLETED" | "UNCOMPLETED"

export const initialState = "ALL"

type ACTIONTYPE =
  | { type: "change_state", payload: statesTodo }
  | { type: "clear" }

export function FiltersReducer(_: statesTodo, action: ACTIONTYPE) {
  switch (action.type) {
    case "change_state":
      return action.payload
    case "clear":
      return initialState
  }
}