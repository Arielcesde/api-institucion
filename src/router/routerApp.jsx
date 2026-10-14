import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
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
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "estudiantes",
        element: <UsersList />
      },
      {
        path: "estudiantes/nuevo",
        element: <UsersCreate />
      },
      {
        path: "estudiantes/editar",
        element: <UsersUpdate />
      },
      {
        path: "cursos",
        element: <CoursesList />
      },
      {
        path: "cursos/nuevo",
        element: <CoursesCreate />
      },
      {
        path: "cursos/editar",
        element: <CoursesUpdate />
      },
      {
        path: "matriculas",
        element: <EnrollmentsList />
      },
      {
        path: "matriculas/nuevo",
        element: <EnrollmentsCreate />
      },
      {
        path: "matriculas/editar",
        element: <EnrollmentsUpdate />
      }
    ]
  },

])

export default function RouterApp() {
  return (
    <RouterProvider router={router} />
  );
}
