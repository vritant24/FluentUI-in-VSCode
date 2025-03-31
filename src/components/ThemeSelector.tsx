import React, { useEffect } from "react";
import { Dropdown, makeStyles, Option } from "@fluentui/react-components";
import { setVSCodeVariableValues, Theme } from "../themes/vscodeCssVariables";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    padding: "16px",
    borderRadius: "4px",
    backgroundColor:
      "var(--vscode-editor-inactiveSelectionBackground, rgba(0,0,0,0.1))",
  },
  description: {
    marginTop: "8px",
    fontSize: "14px",
  },
});

export const ThemeSelector: React.FC = () => {
  const [currentTheme, setCurrentTheme] = React.useState(Theme.Light);
  const styles = useStyles();

  useEffect(() => {
    setVSCodeVariableValues(currentTheme);
  }, [currentTheme]);

  return (
    <div className={styles.container}>
      <Dropdown
        value={currentTheme}
        onOptionSelect={(_e, data) =>
          setCurrentTheme(data.optionValue as Theme)
        }
      >
        {Object.values(Theme).map((theme) => (
          <Option key={theme} value={theme}>
            {theme}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};
