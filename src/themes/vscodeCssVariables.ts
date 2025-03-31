import { DarkThemeTokens } from "./themeGens/dark";
import { DarkHighContrastThemeTokens } from "./themeGens/darkHighContrast";
import { LightThemeTokens } from "./themeGens/light";
import { LightHighContrastThemeTokens } from "./themeGens/lightHighContrast";

export enum Theme {
  Light = "light",
  Dark = "dark",
  LightHighContrast = "light-high-contrast",
  DarkHighContrast = "dark-high-contrast",
}

export function setVSCodeVariableValues(theme: Theme) {
  const root = document.documentElement;
  const themeVariables = getThemeVariables(theme);
  Object.entries(themeVariables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

function getThemeVariables(theme: Theme) {
  switch (theme) {
    case Theme.Light:
      return LightThemeTokens;
    case Theme.Dark:
      return DarkThemeTokens;
    case Theme.LightHighContrast:
      return LightHighContrastThemeTokens;
    case Theme.DarkHighContrast:
      return DarkHighContrastThemeTokens;
  }
}
