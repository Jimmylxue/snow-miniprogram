import "./app.scss";
import "windi.css";
// import { queryConfig } from "@snow-miniprogram/config";
import { queryConfig } from "@/api/react-query";

export default function App(props) {
  const { QueryClientProvider, queryClient } = queryConfig();
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      {props.children}
    </QueryClientProvider>
  );
}
