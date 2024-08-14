export interface Article {
  title: string;
  content: string;
  summary: string;
  
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