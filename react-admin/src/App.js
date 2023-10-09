import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Calendar from "./scenes/calendar";

function App() {
  const [theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="context">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              { <Route path="/team" element={<Team />} />}
              {<Route path="/bar" element={<Bar />} />}
              {<Route path="/pie" element={<Pie />} />}
              {<Route path="/line" element={<Line />} />}
              {<Route path="/calendar" element={<Calendar />} />}
            </Routes>
          </main>
        </div>;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
