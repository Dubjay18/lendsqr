import React from "react";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersListController from "./controller/user-context";
import LoginPage from "./pages/login/login";
import DashboardPage from "./pages/dashboard/dashboard";
import UserDetailsPage from "./pages/users/user-details/user-details";
import Users from "./pages/users/users";
import NotFoundPage from "./pages/404/404";


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <UsersListController>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserDetailsPage />} />
              <Route path="/404" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </UsersListController>
      </React.Fragment>
    </div>
  );
}

export default App;
