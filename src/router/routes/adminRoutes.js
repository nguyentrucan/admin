import { lazy } from "react";
import Classes from "../../views/admin/Classes";
import AddLesson from "../../views/admin/AddLesson";
import LessonList from "../../views/admin/LessonList";
import AdminDashBoard from '../../views/admin/AdminDashBoard'
import Students from "../../views/admin/Students";

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashBoard />,
        role: 'admin'
    },
    {
        path: 'admin/classes',
        element: <Classes />,
        role: 'admin',
    },
    {
        path: 'admin/classes/:id',
        element: <LessonList />,
        role: 'admin',
    },
    {
        path: 'admin/add-lesson',
        element: <AddLesson />,
        role: 'admin',
    },
    {
        path: 'admin/students',
        element: <Students />,
        role: 'admin',
    },
] 