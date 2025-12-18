import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
