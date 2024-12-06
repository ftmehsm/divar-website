
import { BrowserRouter } from "react-router-dom";
import Router from "@/router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import  defaultOptions  from "./configs/reactQuery";
import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import CityProvider from "@/context/CityContext.jsx";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: defaultOptions
    }
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <CityProvider>
    <BrowserRouter>
    <Layout>
    <Router/>
    <ToastContainer/>
    </Layout>
    </BrowserRouter>
      </CityProvider>
    </QueryClientProvider>
  )
}

export default App;
