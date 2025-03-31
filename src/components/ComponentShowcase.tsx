import React from "react";
import {
  Button,
  Checkbox,
  Input,
  makeStyles,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  Divider,
  Card,
  CardHeader,
  Text,
  Dropdown,
  Option,
  Slider,
  Tab,
  TabList,
  Textarea,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
  },
  spacer: {
    marginBottom: "24px",
  },
});

export const ComponentShowcase: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2>Buttons</h2>
        <div className={styles.row}>
          <Button appearance="primary">Primary Button</Button>
          <Button appearance="outline">Outline Button</Button>
          <Button appearance="subtle">Subtle Button</Button>
          <Button appearance="transparent">Transparent Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </div>

      <Divider />

      <div className={styles.section}>
        <h2>Inputs & Controls</h2>
        <div className={styles.row}>
          <Input placeholder="Standard input" />
          <Input placeholder="Disabled input" disabled />
          <Checkbox label="Checkbox" />
          <Checkbox label="Disabled checkbox" disabled />
        </div>

        <div className={styles.row}>
          <Dropdown placeholder="Select an option">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
          </Dropdown>

          <Textarea placeholder="Text area for longer content" />
        </div>

        <div className={styles.spacer}>
          <Slider defaultValue={50} />
        </div>
      </div>

      <Divider />

      <div className={styles.section}>
        <h2>Navigation</h2>
        <TabList>
          <Tab value="tab1">First Tab</Tab>
          <Tab value="tab2">Second Tab</Tab>
          <Tab value="tab3">Third Tab</Tab>
        </TabList>

        <div className={styles.row}>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button>Open Menu</Button>
            </MenuTrigger>
            <MenuList>
              <MenuItem>New</MenuItem>
              <MenuItem>Open</MenuItem>
              <MenuItem>Save</MenuItem>
              <MenuItem disabled>Save As</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>

      <Divider />

      <div className={styles.section}>
        <h2>Cards & Containers</h2>
        <Card className={styles.card}>
          <CardHeader header={<Text weight="semibold">Card Title</Text>} />
          <Text>
            This is a Fluent UI card component that adapts to the selected
            theme. Cards are useful for grouping related content.
          </Text>
        </Card>
      </div>

      <Divider />

      <div className={styles.section}>
        <h2>Dialogs</h2>
        <Dialog>
          <DialogTrigger disableButtonEnhancement>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>Sample Dialog</DialogTitle>
              <DialogContent>
                This is a sample dialog that demonstrates VS Code theme
                variables being applied to Fluent UI components.
              </DialogContent>
              <DialogActions>
                <Button appearance="secondary">Cancel</Button>
                <Button appearance="primary">Confirm</Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      </div>
    </div>
  );
};
