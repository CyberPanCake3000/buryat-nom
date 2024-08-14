import type { NextPage } from 'next';
import Layout from '../app/layouts/Layout';
import { strapiApi } from '@/app/utils/strapiApi';
import { useEffect, useState } from 'react';
import { Article } from '@/app/types';
import { Tag } from '@/app/types';

interface HomePageData {
  articles: Article[];
  tags: Tag[];
}

const Home: NextPage = () => {
  const [data, setData] = useState<HomePageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesResult, tagsResult] = await Promise.all([
          strapiApi.get<Article[]>('/articles'),
          strapiApi.get<Tag[]>('/tags'),
        ]);

        setData({
          articles: articlesResult,
          tags: tagsResult,
        });
      } catch (error) {
        console.error('Error fetching data from Strapi:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <h1>Welcome to our site!</h1>
      {data && (
        <div>
          {/* Отобрази данные, полученные с Strapi */}
          <div>
            <h2>Articles</h2>
            <pre>{JSON.stringify(data.articles, null, 2)}</pre>

            <h2>Tags</h2>
            <pre>{JSON.stringify(data.tags, null, 2)}</pre>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
