interface IQuoteResponse {
  id: number;
  content: string;
  originator: {
    id: number;
    name: string;
  };
  url: string;
  tags?: string[];
}

export default IQuoteResponse;
