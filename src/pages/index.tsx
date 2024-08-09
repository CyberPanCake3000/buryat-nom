import type { NextPage } from 'next';
import Layout from '../app/layouts/Layout';
import { strapiApi } from '@/app/utils/strapiApi';
import { useEffect, useState } from 'react';
import { Article } from '@/app/types';


const Home: NextPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await strapiApi.get<Article[]>('/articles'); // Укажи правильный endpoint
        setData(result);
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
          <div>{JSON.stringify(data, null, 2)}</div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
