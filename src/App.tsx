import { ModeToggle } from "./components/ui/custom/switch-mode/Toggle"
import { ThemeProvider } from "./utils/ThemeProvider"


const App = () => {
  return (
    <div>
       <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      Hellooo
      <ModeToggle/>
      </ThemeProvider>

    </div>
  )
}

export default App
