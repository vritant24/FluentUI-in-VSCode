import { expect, test } from "vitest";
import { DarkThemeTokens } from "../themes/themeGens/dark";
import { LightThemeTokens } from "../themes/themeGens/light";
import { DarkHighContrastThemeTokens } from "../themes/themeGens/darkHighContrast";
import { LightHighContrastThemeTokens } from "../themes/themeGens/lightHighContrast";

test("themes should all have the same keys", () => {
  const darkKeys = Object.keys(DarkThemeTokens);
  const lightKeys = Object.keys(LightThemeTokens);
  const darkHighContrast = Object.keys(DarkHighContrastThemeTokens);
  const lightHighContrast = Object.keys(LightHighContrastThemeTokens);

  expect(darkKeys).toEqual(lightKeys);
  expect(darkKeys).toEqual(darkHighContrast);
  expect(darkKeys).toEqual(lightHighContrast);
});
