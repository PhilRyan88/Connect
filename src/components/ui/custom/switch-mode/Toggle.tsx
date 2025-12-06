import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../../utils/ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {theme === "dark" ? (
        <Sun
          className="absolute h-[1.2rem] w-[1.2rem] transition-all cursor-pointer"
          onClick={toggleTheme}
        />
      ) : (
        <Moon
          className="absolute h-[1.2rem] w-[1.2rem] transition-all cursor-pointer"
          onClick={toggleTheme}
        />
      )}
    </>
  );
}
