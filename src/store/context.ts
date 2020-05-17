import AppStore from "./app.store";
import { createContext } from "react";

export interface CorgialContextStores {
  app: AppStore;
}
const CorgialContext = createContext({} as CorgialContextStores);
export const CorgialProvider = CorgialContext.Provider;
export const CorgialConsumer = CorgialContext.Consumer;

export default CorgialContext;
