import { useEffect, useState } from 'react';
import ArticleContent from '../components/case-study/CaseStudyContent';
import CircularSpinner from '@/components/common/CircularSpinnerProps';
import HeaderSection from '../components/home/HeaderSection';
import FooterSection from '@/components/home/FooterSection';

interface ArticleFrontmatter {
	title: string;
	description?: string;
	author: string;
	published_at?: string;
	role?: string;
	stack?: string;
	duration?: string;
	status?: string;
}

// Simple frontmatter parser
function parseFrontmatter(markdown: string) {
	if (!markdown.startsWith('---')) {
		return { frontmatter: {}, content: markdown };
	}

	const end = markdown.indexOf('---', 3);
	if (end === -1) {
		return { frontmatter: {}, content: markdown };
	}

	const rawFrontmatter = markdown.slice(3, end).trim();
	const content = markdown.slice(end + 3).trim();

	const frontmatter: Record<string, string> = {};

	rawFrontmatter.split('\n').forEach(line => {
		const [key, ...rest] = line.split(':');
		if (!key || rest.length === 0) return;

		frontmatter[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
	});

	return { frontmatter, content };
}

const CaseStudyPage: React.FC<{ markdownPath: string }> = props => {
	const [article, setArticle] = useState<ArticleFrontmatter | null>(null);
	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadMarkdown = async () => {
			try {
				setLoading(true);

				const response = await fetch(props.markdownPath, {
					headers: {
						Accept: 'text/plain, text/markdown, */*',
					},
				});

				if (!response.ok) {
					throw new Error(`Failed to load article: ${response.status}`);
				}

				const markdownText = await response.text();

				if (!markdownText.trim()) {
					throw new Error('Article content is empty');
				}

				const { frontmatter, content } = parseFrontmatter(markdownText);

				setArticle({
					title: frontmatter.title || '',
					description: frontmatter.description,
					author: frontmatter.author || 'Anonymous',
					published_at: frontmatter.published_at,
					role: frontmatter.role,
					stack: frontmatter.stack,
					duration: frontmatter.duration,
					status: frontmatter.status,
				});

				setContent(content);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'Failed to load article'
				);
			} finally {
				setLoading(false);
			}
		};

		loadMarkdown();
	}, [props.markdownPath]);

	const formatDate = (dateString?: string) => {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<CircularSpinner color="#157EDBFF" size={50} />
			</div>
		);
	}

	if (error || !article) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-red-600">{error}</p>
			</div>
		);
	}

	return (
		<main className="pt-[17vh]">
			<HeaderSection />

			<div className="max-w-5xl mx-auto px-4">
				{/* Title */}
				<h1 className="text-3xl md:text-4xl font-inter font-medium text-gray-700 leading-tight">
					{article.title}
				</h1>

				{/* Meta */}
				<div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500">
					{article.published_at && (
						<span>{formatDate(article.published_at)}</span>
					)}
					{article.role && <span>Role: {article.role}</span>}
					{article.stack && <span>Stack: {article.stack}</span>}
					{article.duration && <span>Duration: {article.duration}</span>}
					{article.status && <span>Status: {article.status}</span>}
				</div>

				{/* Divider */}
				<div className="mt-6 border-t border-gray-200" />

				{/* Description */}
				{article.description && (
					<p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
						{article.description}
					</p>
				)}

				{/* Content */}
				<article className="mt-12 prose prose-lg max-w-none border-b border-b-zinc-200">
					<ArticleContent content={content} />
				</article>
				<FooterSection />
			</div>
		</main>
	);
};

export default CaseStudyPage;
