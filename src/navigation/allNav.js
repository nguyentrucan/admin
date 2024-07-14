import { AiOutlineDashboard, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'
import { LuSchool } from "react-icons/lu";

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Classes',
        icon: <LuSchool />,
        role: 'admin',
        path: '/admin/classes'
    },
    {
        id: 3,
        title: 'Students',
        icon: <FaUsers />,
        role: 'admin',
        path: '/admin/students'
    },
]