import strapiApi from '@/app/utils/strapiApi';
import { ArticleResponse } from '@/app/types';

export async function fetchArticles(page: number = 1, pageSize: number = 10) {
  try {
    return await strapiApi.get<ArticleResponse>(`/articles`);
    // return await strapiApi.get<ArticleResponse>(`/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}