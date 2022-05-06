import React from "react";
import "./App.css";
//import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Extras from "./components/Extras";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Resume Builder
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <div>
          <Link to="/"></Link>
        </div>
        <Route path="/" component={Profile} exact />
        <Route path="/Education" component={Education} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Extras" component={Extras} />
      </BrowserRouter>
    </div>
  );
}

export default App;
