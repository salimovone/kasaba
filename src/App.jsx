import { useEffect, useRef, useState } from "react";
import useLocalStorage from "use-local-storage";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "system");
  const [isDark, setIsDark] = useLocalStorage("isDark", "light");
  const select = useRef();

  useEffect(() => {
    switch (theme) {
      case "system":
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setIsDark("dark");
        } else {
          setIsDark("light");
        }
        break;
      case "dark":
        setIsDark("dark");
        break;
      case "light":
        setIsDark("light");
        break;
      default:
        break;
    }
  }, [theme]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <div
      className="bg-foreground w-full h-screen relative overflow-y-scroll"
      data-theme={isDark === "dark" && "dark"}
    >
      <div className="w-screen bg-header h-72"></div>
      <div className="absolute w-screen h-screen top-0 left-0 bg-transparent App">
        <Sidebar />
        <div className="w-full p-6 pr-0 max-lg:hidden"></div>

        <div className="w-full">
          <Navbar />
          <div className="m-auto w-full px-2">
            <Routes>
              {getRoutes(routes)}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>

          <select name="" id="app" ref={select}>
            <option value="system" onClick={() => setTheme("system")}>
              system
            </option>
            <option value="light" onClick={() => setTheme("light")}>
              light
            </option>
            <option value="dark" onClick={() => setTheme("dark")}>
              dark
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
