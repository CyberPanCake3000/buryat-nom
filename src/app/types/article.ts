import { Tag } from './tag';
import { Category } from './category';
import { User } from './user';

export interface Article {
  title: string;
  slug: string;
  content: string;
  summary: string;
  featured_image: string;
  author: User;
  category: Category;
  tags: Tag[];
  posted_date: string;
}

export interface ArticleResponse {
  data: {
    id: number;
    attributes: Article;
  }[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
