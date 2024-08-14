export interface StrapiAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiResponseData<T> {
  id: number;
  attributes: T;
}

export interface StrapiResponseDataArray<T> {
  data: StrapiResponseData<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}