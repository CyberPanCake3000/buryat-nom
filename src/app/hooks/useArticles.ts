import { useState, useEffect } from 'react';
import { Article } from '@/app/types';
import { fetchArticles } from '@/app/api/articles';

export function useArticles(page = 1, pageSize = 10) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetchArticles(page, pageSize);
        setArticles(response.data.map(item => item.attributes));
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load articles');
        setIsLoading(false);
      }
    }

    loadArticles();
  }, [page, pageSize]);

  return { articles, isLoading, error };
}