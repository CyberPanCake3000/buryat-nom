import { StrapiAttributes, StrapiResponseData, StrapiResponseDataArray } from './strapi';

export interface Tag extends StrapiAttributes {
  name: string;
  slug: string;
}

export interface TagResponse {
  data: StrapiResponseData<Tag>;
}

export interface TagsResponse extends StrapiResponseDataArray<Tag> { }