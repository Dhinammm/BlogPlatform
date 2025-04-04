import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Articles from "../Components/Articles.jsx";
import User from "../Components/User.jsx";
import UserShow from "../Components/UserShow.jsx"
import ArticleShow from "../Components/ArticleShow.jsx"
import ArticleEdit from "../Components/ArticleEdit.jsx"
import ArticleNew from "../Components/ArticleNew.jsx"
import NotFound from "../Components/NotFound.jsx"
import SignOut from '../Components/SignOut.jsx';
import CommentEdit from "../Components/CommentEdit.jsx"
import Login from "../Components/Login.jsx"
import SignUp from "../Components/SignUp.jsx"
import Home from "../Components/Home.jsx"
console.log(Articles);
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);
  const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Home></Home> <Switch>
    <Route exact path="/users/sign_out" component={SignOut} />
    <Route exact path="/users/sign_up" component={SignUp} />
      <Route exact path="/users/sign_in" component={Login} />
      <Route exact path="/users" component={User} />
      <Route exact path="/users/:id" component={UserShow} />
      <Route exact path="/" component={Articles} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/articles/:id/edit" component={ArticleEdit} />
      <Route exact path="/articles/new" component={ArticleNew} />
      <Route exact path="/articles/:id" component={ArticleShow} />
      <Route exact path="/not_found" component={NotFound} />
      <Route exact path="*" component={NotFound} />
      <Route exact path="/users/sign_out" component={SignOut} />
      <Route exact path="/users/sign_in" component={Login} />
      <Route exact path="/users/sign_up" component={SignUp} />
      <Route exact path="/articles/:article_id/blog_comments/:id/edit" component={CommentEdit} />
          </Switch> 
  </BrowserRouter>);
});

//rootElement.id = 'react-root';





