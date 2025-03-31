import { webDarkTheme } from "@fluentui/react-components";

// Create a theme based on VS Code CSS variables

const fontSizes = {
  fontSizeBase100: "0.6rem",
  fontSizeBase200: "0.75rem",
  fontSizeBase300: "0.875rem",
  fontSizeBase400: "1rem",
  fontSizeBase500: "1.25rem",
  fontSizeBase600: "1.5rem",
  fontSizeHero700: "1.75rem",
  fontSizeHero800: "2rem",
  fontSizeHero900: "2.5rem",
  fontSizeHero1000: "4.25rem",
};

const lineHeights = {
  lineHeightBase100: "0.875rem",
  lineHeightBase200: "1rem",
  lineHeightBase300: "1.25rem",
  lineHeightBase400: "1.375rem",
  lineHeightBase500: "1.75rem",
  lineHeightBase600: "2rem",
  lineHeightHero700: "2.25rem",
  lineHeightHero800: "2.5rem",
  lineHeightHero900: "3.25rem",
  lineHeightHero1000: "3.75rem",
};

const fontWeights = {
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
};

const fontFamilies = {
  fontFamilyBase:
    "var(--vscode-font-family)" + // VSCode's default font family
    ", 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif", // Fluent UI's default font family
  fontFamilyMonospace:
    "var(----vscode-editor-font-family)" + // VSCode's default monospace font family
    ", Consolas, 'Courier New', Courier, monospace", // Fluent UI's default monospace font family
  fontFamilyNumeric:
    "var(--vscode-font-family)" + // VSCode's default font family
    ", Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif", // Fluent UI's default font family
};

const fontTokens = {
  ...fontSizes,
  ...lineHeights,
  ...fontWeights,
  ...fontFamilies,
};

export const colorTokens = {
  colorNeutralBackground1: "var(--vscode-editor-background)",
  colorNeutralBackground1Hover: "var(--vscode-button-secondaryHoverBackground)",
  colorNeutralBackground1Pressed:
    "var(--vscode-button-secondaryHoverBackground)",
  colorNeutralBackground1Selected:
    "var(--vscode-button-secondaryHoverBackground)",
  colorNeutralBackground2: "var(--vscode-textBlockQuote-background)",
  colorNeutralBackground2Hover: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground2Pressed: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground2Selected: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground3: "var(--vscode-tab-inactiveBackground)",
  colorNeutralBackground3Hover: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground3Pressed: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground3Selected: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground4: "var(--vscode-tab-inactiveBackground)",
  colorNeutralBackground4Hover: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground4Pressed: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground4Selected: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground5: "var(--vscode-tab-inactiveBackground)",
  colorNeutralBackground5Hover: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground5Pressed: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground5Selected: "var(--vscode-tab-unfocusedHoverBackground)",
  colorNeutralBackground6: "var(--vscode-input-background)",
  colorNeutralBackgroundInverted: "var(--vscode-activityBarBadge-foreground)",

  colorNeutralBackgroundStatic: "var(--vscode-input-background)",

  colorSubtleBackgroundHover: "var(--vscode-button-secondaryHoverBackground)",
  colorSubtleBackgroundPressed: "var(--vscode-button-secondaryHoverBackground)",
  colorSubtleBackgroundSelected:
    "var(--vscode-button-secondaryHoverBackground)",

  colorNeutralBackgroundDisabled: "var(--vscode-tab-inactiveBackground)",

  colorNeutralStencil1: "var(--vscode-badge-background)",
  colorNeutralStencil2: "var(--vscode-button-secondaryBackground)",

  colorNeutralForeground1: "var(--vscode-foreground)",
  colorNeutralForeground1Hover: "var(--vscode-foreground)",
  colorNeutralForeground1Pressed: "var(--vscode-foreground)",
  colorNeutralForeground1Selected: "var(--vscode-foreground)",
  colorNeutralForeground2: "var(--vscode-settings-headerForeground)",
  colorNeutralForeground2Hover: "var(--vscode-foreground)",
  colorNeutralForeground2Pressed: "var(--vscode-foreground)",
  colorNeutralForeground2Selected: "var(--vscode-foreground)",
  colorNeutralForeground2BrandHover: "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground2BrandPressed:
    "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground2BrandSelected:
    "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground3: "var(--vscode-panelTitle-inactiveForeground)",
  colorNeutralForeground3Hover: "var(--vscode-panelTitle-activeForeground)",
  colorNeutralForeground3Pressed: "var(--vscode-panelTitle-activeForeground)",
  colorNeutralForeground3Selected: "var(--vscode-panelTitle-activeForeground)",
  colorNeutralForeground3BrandHover: "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground3BrandPressed:
    "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground3BrandSelected:
    "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground4: "var(--vscode-input-foreground)",
  colorNeutralForegroundDisabled:
    "var(--vscode-activityBar-inactiveForeground)",

  colorNeutralForeground2Link: "var(--vscode-textLink-foreground)",
  colorNeutralForeground2LinkHover: "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground2LinkPressed: "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground2LinkSelected:
    "var(--vscode-textLink-activeForeground)",
  colorNeutralForeground1Static: "var(--vscode-activityBar-inactiveForeground)",
  colorNeutralForegroundStaticInverted:
    "var(--vscode-activityBarBadge-foreground)",
  colorNeutralForegroundInverted: "var(--vscode-editor-background)",
  colorNeutralForegroundInvertedHover: "var(--vscode-editor-background)",
  colorNeutralForegroundInvertedPressed: "var(--vscode-editor-background)",
  colorNeutralForegroundInvertedSelected: "var(--vscode-editor-background)",
  colorNeutralForegroundInverted2: "var(--vscode-editor-background)",
  colorNeutralForegroundOnBrand: "var(--vscode-activityBarBadge-foreground)",
  colorNeutralForegroundInvertedLink:
    "var(--vscode-activityBarBadge-foreground)",
  colorNeutralForegroundInvertedLinkHover:
    "var(--vscode-activityBarBadge-foreground)",
  colorNeutralForegroundInvertedLinkPressed:
    "var(--vscode-activityBarBadge-foreground)",
  colorNeutralForegroundInvertedLinkSelected:
    "var(--vscode-activityBarBadge-foreground)",
  colorNeutralStroke1: "var(--vscode-input-border)",
  colorNeutralStroke1Hover: "var(--vscode-activityBar-border)",
  colorNeutralStroke1Pressed: "var(--vscode-activityBar-border)",
  colorNeutralStroke1Selected: "var(--vscode-activityBar-border)",
  colorNeutralStroke2: "var(--vscode-activityBar-border)",
  colorNeutralStroke3: "var(--vscode-panel-border)",

  colorNeutralStrokeSubtle: "var(--vscode-activityBar-border)",
  colorNeutralStrokeOnBrand: "var(--vscode-input-background)",
  colorNeutralStrokeOnBrand2: "var(--vscode-activityBarBadge-foreground)",
  colorNeutralStrokeOnBrand2Hover: "var(--vscode-activityBarBadge-foreground)",
  colorNeutralStrokeOnBrand2Pressed:
    "var(--vscode-activityBarBadge-foreground)",
  colorNeutralStrokeOnBrand2Selected:
    "var(--vscode-activityBarBadge-foreground)",
  colorNeutralStrokeAccessible: "var(--vscode-activityBar-inactiveForeground)",
  colorNeutralStrokeAccessibleHover: "var(--vscode-activityBar-foreground)",
  colorNeutralStrokeAccessiblePressed: "var(--vscode-activityBar-foreground)",
  colorNeutralStrokeAccessibleSelected: "var(--vscode-activityBar-foreground)",
  colorNeutralStrokeDisabled: "var(--vscode-panel-border)",

  colorStrokeFocus1: "var(--vscode-editor-background)",
  colorStrokeFocus2: "var(--vscode-focusBorder)",
  colorBrandBackground: "var(--vscode-button-background)",
  colorBrandBackgroundHover: "var(--vscode-button-hoverBackground)",
  colorBrandBackgroundPressed: "var(--vscode-button-hoverBackground)",
  colorBrandBackgroundSelected: "var(--vscode-button-hoverBackground)",
  colorCompoundBrandBackground: "var(--vscode-button-background)",
  colorCompoundBrandBackgroundHover: "var(--vscode-button-hoverBackground)",
  colorCompoundBrandBackgroundPressed: "var(--vscode-button-hoverBackground)",
  colorBrandBackgroundStatic: "var(--vscode-button-background)",
  colorBrandBackground2: "var(--vscode-button-background)",
  colorBrandBackground2Hover: "var(--vscode-button-hoverBackground)",
  colorBrandBackground2Pressed: "var(--vscode-button-hoverBackground)",
  colorBrandBackgroundInverted: "var(--vscode-activityBarBadge-foreground)",
  colorBrandBackgroundInvertedHover:
    "var(--vscode-activityBarBadge-foreground)",
  colorBrandBackgroundInvertedPressed:
    "var(--vscode-activityBarBadge-foreground)",
  colorBrandBackgroundInvertedSelected:
    "var(--vscode-activityBarBadge-foreground)",
  colorBrandForeground1: "var(--vscode-textLink-foreground)",
  colorBrandForeground2: "var(--vscode-textLink-foreground)",
  colorBrandForeground2Hover: "var(--vscode-textLink-activeForeground)",
  colorBrandForeground2Pressed: "var(--vscode-textLink-activeForeground)",
  colorBrandForegroundLink: "var(--vscode-textLink-foreground)",
  colorBrandForegroundLinkHover: "var(--vscode-textLink-activeForeground)",
  colorBrandForegroundLinkPressed: "var(--vscode-textLink-activeForeground)",
  colorBrandForegroundLinkSelected: "var(--vscode-textLink-activeForeground)",
  colorCompoundBrandForeground1: "var(--vscode-textLink-foreground)",
  colorCompoundBrandForeground1Hover: "var(--vscode-textLink-activeForeground)",
  colorCompoundBrandForeground1Pressed:
    "var(--vscode-textLink-activeForeground)",
  colorBrandForegroundInverted: "var(--vscode-button-background)",
  colorBrandForegroundInvertedHover: "var(--vscode-button-hoverBackground)",
  colorBrandForegroundInvertedPressed: "var(--vscode-button-hoverBackground)",
  colorBrandForegroundOnLight: "var(--vscode-button-background)",
  colorBrandForegroundOnLightHover: "var(--vscode-button-hoverBackground)",
  colorBrandForegroundOnLightPressed: "var(--vscode-button-hoverBackground)",
  colorBrandForegroundOnLightSelected: "var(--vscode-button-hoverBackground)",
  colorBrandStroke1: "var(--vscode-activityBar-activeBorder)",
  colorBrandStroke2: "var(--vscode-inputOption-activeBorder)",
  colorBrandStroke2Hover: "var(--vscode-inputOption-activeBorder)",
  colorBrandStroke2Pressed: "var(--vscode-inputOption-activeBorder)",
  colorBrandStroke2Contrast: "var(--vscode-inputOption-activeBorder)",
  colorCompoundBrandStroke: "var(--vscode-button-background)",
  colorCompoundBrandStrokeHover: "var(--vscode-button-hoverBackground)",
  colorCompoundBrandStrokePressed: "var(--vscode-button-hoverBackground)",
  colorStatusDangerBackground1: "var(--vscode-inputValidation-errorBackground)",
  colorStatusDangerBackground3: "var(--vscode-activityErrorBadge-background)",
  colorStatusDangerForeground1: "var(--vscode-editorError-foreground)",
  colorStatusDangerForeground3: "var(--vscode-editorError-foreground)",
  colorStatusDangerBorder1: "var(--vscode-inputValidation-errorBorder)",
  colorStatusDangerBorder2: "var(--vscode-inputValidation-errorBorder)",
  colorStatusSuccessBackground1: "var(--vscode-panel-background)",
  colorStatusSuccessBackground3: "var(--vscode-terminal-ansiGreen)",
  colorStatusSuccessForeground1: "var(--vscode-terminal-ansiGreen)",
  colorStatusSuccessForeground3: "var(--vscode-terminal-ansiGreen)",
  colorStatusSuccessForegroundInverted: "var(--vscode-terminal-ansiGreen)",
  colorStatusSuccessBorder1: "var(--vscode-terminal-ansiGreen)",
  colorStatusSuccessBorder2: "var(--vscode-terminal-ansiGreen)",
  colorStatusWarningBackground1:
    "var(--vscode-inputValidation-warningBackground)",
  colorStatusWarningBackground3:
    "var(--vscode-activityWarningBadge-background)",
  colorStatusWarningForeground1: "var(--vscode-editorWarning-foreground)",
  colorStatusWarningForeground2: "var(--vscode-editorWarning-foreground)",

  colorStatusDangerBackground2: "var(--vscode-inputValidation-errorBackground)",
  colorStatusDangerBorderActive: "var(--vscode-inputValidation-errorBorder)",
  colorStatusDangerForeground2: "var(--vscode-editorError-foreground)",
  colorStatusDangerForegroundInverted:
    "var(--vscode-inputValidation-errorBackground)",
  colorStatusSuccessBackground2: "var(--vscode-panel-background)",
  colorStatusSuccessBorderActive: "var(--vscode-terminal-ansiGreen)",
  colorStatusSuccessForeground2: "var(--vscode-terminal-ansiGreen)",
  colorStatusWarningBackground2:
    "var(--vscode-inputValidation-warningBackground)",
  colorStatusWarningBorder1: "var(--vscode-inputValidation-warningBorder)",
  colorStatusWarningBorder2: "var(--vscode-inputValidation-warningBorder)",
  colorStatusWarningBorderActive: "var(--vscode-inputValidation-warningBorder)",
  colorStatusWarningForeground3: "var(--vscode-editorWarning-foreground)",
  colorStatusWarningForegroundInverted:
    "var(--vscode-inputValidation-warningBackground)",
  colorNeutralCardBackground: "var(--vscode-editorWidget-background)",
  colorNeutralCardBackgroundDisabled: "var(--vscode-tab-inactiveBackground)",
  colorNeutralCardBackgroundHover:
    "var(--vscode-button-secondaryHoverBackground)",
  colorNeutralCardBackgroundPressed:
    "var(--vscode-button-secondaryHoverBackground)",
  colorNeutralCardBackgroundSelected:
    "var(--vscode-button-secondaryHoverBackground)",

  colorBrandBackground3Static: "var(--vscode-button-background)",
  colorBrandBackground4Static: "var(--vscode-button-background)",
};

export const VSCodeTheme = { ...webDarkTheme, ...fontTokens, ...colorTokens };
