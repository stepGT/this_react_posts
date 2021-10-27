import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIDPage from "../pages/PostIDPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route exact path="/posts">
                <Posts />
            </Route>
            <Route exact path="/posts/:id">
                <PostIDPage />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Redirect to="/error" />
        </Switch>
    )
}
export default AppRouter;