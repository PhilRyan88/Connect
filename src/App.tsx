import Navbar from "./layout/Navbar/Navbar";
import { ThemeProvider } from "./utils/ThemeProvider";

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Navbar />
      </ThemeProvider>
    </div>
  );
};

export default App;
