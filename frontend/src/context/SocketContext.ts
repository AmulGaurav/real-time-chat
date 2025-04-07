import { createContext, useContext } from "react";

export const SocketContext = createContext<WebSocket | null>(null);

export const useSocket = () => {
  return useContext(SocketContext);
};
