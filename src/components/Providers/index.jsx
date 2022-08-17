import TechProvider from "../../contexts/TechContext";
import UserProvider from "../../contexts/UserContext";

const Providers = ({ children }) => {
  return (
    <TechProvider>
      <UserProvider>{children}</UserProvider>
    </TechProvider>
  );
};

export default Providers;
