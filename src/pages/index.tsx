import { ArticleCard } from '@/app/components/ArticleCard';
import { useArticles } from '@/app/hooks/useArticles';
// import Header from '@/app/layouts/Header';
import Layout from '@/app/layouts/Layout';

export default function HomePage() {
  const { articles, isLoading, error } = useArticles();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
    <div>
      <h1>Latest Articles</h1>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
    </Layout>
  );
}