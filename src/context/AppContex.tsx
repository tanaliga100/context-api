/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer } from "react";

const AppContext = createContext({});

const appState = {
  name: "jordan",
  count: 0
};
type ActionPayload = string | any;
const appReducer = (state: any, action: ActionPayload) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, appState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};
