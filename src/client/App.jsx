import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";

import StudentLoginPage from "./pages/Students/StudentLoginPage";
import StudentSignupPage from "./pages/Students/StudentSignupPage";
import UniversitySignupPage from "./pages/University/UniversitySignupPage";
import UniversityLoginPage from "./pages/University/UniversityLoginPage";
import AluminiSignupPage from "./pages/Alumini/AluminiSignupPage";
import AluminiLoginPage from "./pages/Alumini/AluminiLoginPage";
import AboutPage from "./pages/AboutPage";
import OurTeam from "./pages/OurTeam";
import UniversityDashboard from "./pages/University/UniversityDashboard";
import AlumniForm from "./pages/University/AlumniForm";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<TeamPage />} />

        <Route path="/studentloginpage" element={<StudentLoginPage />} />
        <Route path="/studentsignuppage" element={<StudentSignupPage />} />
        <Route
          path="/universitysignuppage"
          element={<UniversitySignupPage />}
        />
        <Route path="/universityLoginpage" element={<UniversityLoginPage />} />
        <Route path="/aluminisignuppage" element={<AluminiSignupPage />} />
        <Route path="/aluminiLoginpage" element={<AluminiLoginPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/universitydashboard" element={<UniversityDashboard />} />
        <Route path="/dataform" element={<AlumniForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
