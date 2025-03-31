import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Input,
  makeStyles,
  Text,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    marginTop: "32px",
    marginBottom: "32px",
  },
  searchContainer: {
    marginBottom: "16px",
  },
  tableContainer: {
    maxHeight: "400px",
    overflowY: "auto",
    border: "1px solid var(--vscode-panel-border, #424242)",
    borderRadius: "4px",
  },
  tokenValue: {
    fontFamily: "monospace",
    padding: "2px 4px",
    backgroundColor:
      "var(--vscode-textBlockQuote-background, rgba(127, 127, 127, 0.1))",
    borderRadius: "3px",
  },
});

// Mapping from Fluent UI tokens to VS Code CSS variables
const tokenMappings = [
  {
    fluentToken: "colorBaseBackground1",
    vsCodeVariable: "--vscode-editor-background",
    description: "Main background color",
  },
  {
    fluentToken: "colorBaseBackground2",
    vsCodeVariable: "--vscode-sideBar-background",
    description: "Secondary background",
  },
  {
    fluentToken: "colorBaseBackground3",
    vsCodeVariable: "--vscode-editor-background",
    description: "Tertiary background",
  },
  {
    fluentToken: "colorBaseBackground4",
    vsCodeVariable: "--vscode-activityBar-background",
    description: "Quaternary background",
  },
  {
    fluentToken: "colorNeutralBackground1",
    vsCodeVariable: "--vscode-editor-background",
    description: "Main neutral background",
  },
  {
    fluentToken: "colorNeutralBackground2",
    vsCodeVariable: "--vscode-tab-inactiveBackground",
    description: "Secondary neutral background",
  },
  {
    fluentToken: "colorNeutralBackground3",
    vsCodeVariable: "--vscode-editor-background",
    description: "Tertiary neutral background",
  },
  {
    fluentToken: "colorNeutralBackground4",
    vsCodeVariable: "--vscode-activityBar-background",
    description: "Quaternary neutral background",
  },
  {
    fluentToken: "colorNeutralForeground1",
    vsCodeVariable: "--vscode-editor-foreground",
    description: "Primary text",
  },
  {
    fluentToken: "colorNeutralForeground2",
    vsCodeVariable: "--vscode-foreground",
    description: "Secondary text",
  },
  {
    fluentToken: "colorNeutralForeground3",
    vsCodeVariable: "--vscode-descriptionForeground",
    description: "Tertiary text",
  },
  {
    fluentToken: "colorBrandBackground",
    vsCodeVariable: "--vscode-button-background",
    description: "Primary button background",
  },
  {
    fluentToken: "colorBrandBackgroundHover",
    vsCodeVariable: "--vscode-button-hoverBackground",
    description: "Primary button hover",
  },
  {
    fluentToken: "colorBrandBackgroundPressed",
    vsCodeVariable: "--vscode-button-background",
    description: "Primary button pressed",
  },
  {
    fluentToken: "colorBrandForeground1",
    vsCodeVariable: "--vscode-button-foreground",
    description: "Primary button text",
  },
  {
    fluentToken: "colorBrandForeground2",
    vsCodeVariable: "--vscode-textLink-foreground",
    description: "Links and brand elements",
  },
  {
    fluentToken: "colorPaletteRedBackground1",
    vsCodeVariable: "--vscode-errorForeground",
    description: "Error state background",
  },
  {
    fluentToken: "colorPaletteGreenBackground1",
    vsCodeVariable: "--vscode-terminal-ansiGreen",
    description: "Success state background",
  },
  {
    fluentToken: "colorPaletteYellowBackground1",
    vsCodeVariable: "--vscode-editorWarning-foreground",
    description: "Warning state background",
  },
  {
    fluentToken: "colorNeutralStroke1",
    vsCodeVariable: "--vscode-panel-border",
    description: "Primary border",
  },
  {
    fluentToken: "colorNeutralStroke2",
    vsCodeVariable: "--vscode-widget-border",
    description: "Secondary border",
  },
  {
    fluentToken: "colorNeutralStroke3",
    vsCodeVariable: "--vscode-editorWidget-border",
    description: "Tertiary border",
  },
  {
    fluentToken: "colorNeutralBackgroundDisabled",
    vsCodeVariable: "--vscode-disabledForeground",
    description: "Disabled control background",
  },
  {
    fluentToken: "colorNeutralForegroundDisabled",
    vsCodeVariable: "--vscode-disabledForeground",
    description: "Disabled text",
  },
  {
    fluentToken: "colorNeutralBackgroundInverted",
    vsCodeVariable: "--vscode-editor-foreground",
    description: "Inverted background (foreground color)",
  },
  {
    fluentToken: "colorNeutralForegroundInverted",
    vsCodeVariable: "--vscode-editor-background",
    description: "Inverted foreground (background color)",
  },
];

export const TokenMappingTable: React.FC = () => {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMappings = tokenMappings.filter(
    (mapping) =>
      mapping.fluentToken.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mapping.vsCodeVariable
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      mapping.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2>Token Mapping Reference</h2>
      <Text>
        This table shows how Fluent UI tokens are mapped to VS Code CSS
        variables in the theme.
      </Text>

      <div className={styles.searchContainer}>
        <Input
          placeholder="Search tokens or variables..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={styles.tableContainer}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Fluent UI Token</TableHeaderCell>
              <TableHeaderCell>VS Code CSS Variable</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMappings.map((mapping, index) => (
              <TableRow key={index}>
                <TableCell>
                  <span className={styles.tokenValue}>
                    {mapping.fluentToken}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={styles.tokenValue}>
                    {mapping.vsCodeVariable}
                  </span>
                </TableCell>
                <TableCell>{mapping.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
