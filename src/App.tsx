import HomePage from './pages/HomePage';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router';
import './App.css';
import CaseStudyPage from './pages/CaseStudyPage';
const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/case-studies',
		loader: () => redirect('/'),
	},
	{
		path: '/case-studies/my-toilet-my-dignity',
		element: (
			<CaseStudyPage markdownPath="https://bbs.t3.storage.dev/case-studies/my-toilet-my-dignity.md" />
		),
	},
	{
		path: '/case-studies/nora-tutor',
		element: (
			<CaseStudyPage markdownPath="https://bbs.t3.storage.dev/case-studies/nora-tutor.md" />
		),
	},
	{
		path: '/case-studies/articulate',
		element: (
			<CaseStudyPage markdownPath="https://bbs.t3.storage.dev/case-studies/articulate.md" />
		),
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
