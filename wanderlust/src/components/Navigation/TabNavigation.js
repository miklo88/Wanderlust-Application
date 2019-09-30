import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// import SignIn from "./components/SignIn/SignIn";
// import SignUp from "./components/SignUp/SignUp";
// import ExperiencesCard from "../Experiences/ExperiencesCard";
import InputForm from "../SignIn/index";
// import CTA from "../CTA/Cta";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Explore" href="/spam" {...a11yProps(0)} />
          <LinkTab label="Get Started" href="/spam" {...a11yProps(1)} />
          <LinkTab label="Create Experiences" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      
      {/* tab panels with different links/ sub nav */}
      <TabPanel value={value} index={1}>
        <InputForm />
      </TabPanel>
      <TabPanel value={value} index={0}>
        {/* <ExperiencesCard /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <CreateExperience /> */}
      </TabPanel>
      
    </div>
  );
}
