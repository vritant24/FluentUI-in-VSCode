const fs = require("fs");

const themeFiles = [
  "./dark.json",
  "./light.json",
  "./darkHighContrast.json",
  "./lightHighContrast.json",
];

console.log("Starting theme processing...");

// Read and parse all theme files
const themes = themeFiles.map((file) => {
  console.log(`Reading file: ${file}`);
  return JSON.parse(fs.readFileSync(file));
});

// Find shared keys across all themes
console.log("Finding shared keys across themes...");
const sharedKeys = themes.reduce((shared, theme) => {
  return shared.filter((key) => key in theme);
}, Object.keys(themes[0]));

console.log(`Shared keys identified: ${sharedKeys.join(", ")}`);

// Create new objects with only the shared keys
console.log("Creating shared theme objects...");
const sharedThemes = themes.map((theme, index) => {
  console.log(`Processing theme: ${themeFiles[index]}`);
  return sharedKeys.reduce((obj, key) => {
    obj[key] = theme[key];
    return obj;
  }, {});
});

// Write the new objects back to their respective files
sharedThemes.forEach((sharedTheme, index) => {
  console.log(`Writing shared theme to file: ${themeFiles[index]}`);
  fs.writeFileSync(themeFiles[index], JSON.stringify(sharedTheme, null, 2));
});

console.log("Theme processing completed.");
