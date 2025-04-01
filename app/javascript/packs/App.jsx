import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Articles from "../Components/Articles.jsx";
import User from "../Components/User.jsx";
import UserShow from "../Components/UserShow.jsx"
import ArticleShow from "../Components/ArticleShow.jsx"
import ArticleEdit from "../Components/ArticleEdit.jsx"
import ArticleNew from "../Components/ArticleNew.jsx"


console.log(Articles);
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);
  const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/users" component={User} />
      <Route exact path="/users/:id" component={UserShow} />
      <Route exact path="/" component={Articles} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/articles/:id/edit" component={ArticleEdit} />
      <Route exact path="/articles/new" component={ArticleNew} />
      <Route exact path="/articles/:id" component={ArticleShow} />
    </Switch>
  </BrowserRouter>);
});

//rootElement.id = 'react-root';





