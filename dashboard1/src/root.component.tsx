import AdminLayout from "./layouts/Admin.js";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function Root(props) {
  return <section>{props.name} is mounted!
  <BrowserRouter>
    <Switch>
    <AdminLayout {...props} />
      {/*
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" />
*/}
    </Switch>
  </BrowserRouter>,
  </section>;
}
