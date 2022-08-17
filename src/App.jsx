import "./App.css";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./contexts/UserContext";
import Providers from "./components/Providers";

function App() {
  return (
    <Providers>
      <div className="App">
        <GlobalStyle />
        <RoutesApp />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{ backgroundColor: "black" }}
        />
      </div>
    </Providers>
  );
}

export default App;
