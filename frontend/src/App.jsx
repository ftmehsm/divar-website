
import { BrowserRouter } from "react-router-dom";
import Router from "@/router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import  defaultOptions  from "./configs/reactQuery";
import Layout from "./layout/Layout";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: defaultOptions
    }
  });
  
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Layout>
    <Router/>
    </Layout>
    </BrowserRouter>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App;
