import { StrapiAttributes, StrapiResponseData, StrapiResponseDataArray } from './strapi';

export interface Category extends StrapiAttributes {
  name: string;
  slug: string;
  description: string;
}

export interface CategoryResponse {
  data: StrapiResponseData<Category>;
}

export interface CategoriesResponse extends StrapiResponseDataArray<Category> { }