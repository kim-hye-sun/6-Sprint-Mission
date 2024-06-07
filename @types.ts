export interface IBoard {
  id: number;
  title: string;
  image?: string;
  writer: {
    nickname: string;
  };
  createdAt: string;
  likeCount: number;
}
