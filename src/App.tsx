import React from "react";
import { FluentProvider } from "@fluentui/react-components";
import { ThemeSelector } from "./components/ThemeSelector";
import { ComponentShowcase } from "./components/ComponentShowcase";
import { TokenMappingTable } from "./components/TokenMappingTable";
import { VSCodeTheme } from "./themes/VSCodeTheme";
import "./styles/global.css";

export const App: React.FC = () => {
  return (
    <FluentProvider theme={VSCodeTheme}>
      <div className="app-container">
        <h1>Fluent UI in VS Code</h1>
        <ThemeSelector />
        <ComponentShowcase />
        <TokenMappingTable />
      </div>
    </FluentProvider>
  );
};

export default App;
