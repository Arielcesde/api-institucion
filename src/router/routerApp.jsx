import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Login from '../pages/auth/Login';
import UsersList from '../pages/users/List';
import UsersCreate from '../pages/users/Create';
import UsersUpdate from '../pages/users/Update';

import CoursesList from '../pages/courses/List';
import CoursesCreate from '../pages/courses/Create';
import CoursesUpdate from '../pages/courses/Update';

import EnrollmentsList from '../pages/enrollments/List';
import EnrollmentsCreate from '../pages/enrollments/Create';
import EnrollmentsUpdate from '../pages/enrollments/Update';

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/estudiantes" replace />} />
          
          <Route path="estudiantes" element={<UsersList />} />
          <Route path="estudiantes/nuevo" element={<UsersCreate />} />
          <Route path="estudiantes/editar" element={<UsersUpdate />} />

          <Route path="cursos" element={<CoursesList />} />
          <Route path="cursos/nuevo" element={<CoursesCreate />} />
          <Route path="cursos/editar" element={<CoursesUpdate />} />

          <Route path="matriculas" element={<EnrollmentsList />} />
          <Route path="matriculas/nuevo" element={<EnrollmentsCreate />} />
          <Route path="matriculas/editar" element={<EnrollmentsUpdate />} />

          <Route path="*" element={<Navigate to="/estudiantes" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
