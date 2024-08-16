import { Article } from '@/app/types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div key={article.slug}>
      <h2>{article.title}</h2>
      <img src={article.featured_image} alt={article.title} />
      <p>{article.summary}</p>
      <p>Posted on: {new Date(article.posted_date).toLocaleDateString()}</p>
    </div>
  );
}