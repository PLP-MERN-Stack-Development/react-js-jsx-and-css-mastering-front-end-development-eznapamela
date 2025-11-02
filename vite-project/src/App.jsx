import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Button from "./components/Button";
import TaskManager from "./components/TaskManager";
import { CardDemo } from "./components/CardDemo";
import Layout from "./components/Layout";
import ApiData from "./pages/ApiData";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-gray-100">
                <h1 className="flex flex-col items-center justify-center text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight mb-6">
                  Tasks Managing App
                </h1>

                <div className="flex flex-col items-center justify-center">
                  <Button variant="success" size="lg">
                    Register
                  </Button>
                </div>

                <div className="flex justify-center items-center min-h-screen bg-gray-50">
                  <CardDemo />
                </div>

                <div className="rounded-2x2 p-8 m-8 w-3/4 h-3/4">
                  <TaskManager />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Button variant="danger" size="lg">
                    Close
                  </Button>
                </div>
              </div>
            }
          />

          {/* API Data Page */}
          <Route path="/api" element={<ApiData />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
