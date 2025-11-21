import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import Layout from './components/Layout'
import BlogPost from './pages/BlogPost'
import AdminDashboard from './pages/AdminDashboard'
import AdminUsers from './pages/AdminUsers'
import AdminSettings from './pages/AdminSettings'
import AdminLayout from './components/AdminLayout'
import LoginForm from './pages/LoginForm';
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/userContext'


const router = createBrowserRouter([

    {
	path: '/',
	element: <Layout/>,
	errorElement: <NotFound/>,
	children: 
	[
	    {
		index: true,
		element: <Home/>	    
	    },
	    {
		path: '/o-nas',
		element: <About/>	    
	    },
	    {
		path: '/kontakt',
		element: <Contact/>
	    },
	    {
		path: '/blog',
		element: <Blog/>
	    },
	    {
		path: '/blog/:postId',
		element: <BlogPost/>
	    },
	    {
		path: '/logowanie',
		element: <LoginForm/>
	    },
	    {
		path: '/games',
		element: <Games />
	    },
	    {
		path: '/games/:gameId',
		element: <GameDetails/>
	    }
	],
    },
    {
	path: '/admin',
	element: <AdminLayout/>,
	errorElement: <NotFound/>,
	children:
	[
	    {
		index: true,
		element: <AdminDashboard/>
	    },
	    {
		path: '/admin/users',
		element: <AdminUsers/>
	    },
	    {
		path: '/admin/settings',
		element: <AdminSettings/>
	    }
	]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
	<ThemeProvider>
	    <UserProvider>
		<RouterProvider router={router} />
	    </UserProvider>
	</ThemeProvider>
    </StrictMode>,
)
