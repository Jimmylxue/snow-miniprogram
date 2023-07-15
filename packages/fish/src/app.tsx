import "./app.scss";
import "windi.css";
import { queryConfig } from "@snow-miniprogram/config";

export default function App(props) {
  const { QueryClientProvider, queryClient } = queryConfig();
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
