import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateCard from "./pages/CreateCard.jsx";
import EditCard from "./pages/EditCard.jsx";
import CardList from "./pages/CardList.jsx";

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <nav className="bg-gray-800 py-4 ">
          <div className="container mx-auto flex justify-between items-center">
            <Link to={"/"} className="text-white text-lg font-bold">
              Fullstack Todolist
            </Link>
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <ul className="flex">
                <li className="mr-6">
                  <Link to={"/create-card"} className="text-white hover:text-gray-300">
                    Create Card
                  </Link>
                </li>
                <li>
                  <Link to={"/card-list"} className="text-white hover:text-gray-300">
                    Card List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mx-auto mt-10">
          <div className="wrapper">
            <Routes>
              <Route exact path="/" element={<CardList />} />
              <Route exact path="/create-card" element={<CreateCard />} />
              <Route exact path="/edit-card/:id" element={<EditCard />} />
              <Route exact path="/card-list" element={<CardList />} />
              <Route exact path="/edit-card/:id" element={<EditCard/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
