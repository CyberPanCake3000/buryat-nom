export interface Article {
  text: string; 
}

export interface ArticleResponse {
  data: {
    attributes: {
      text: string;
    };
  }[];
  meta: {
    // Pagination info, etc.
  };
}