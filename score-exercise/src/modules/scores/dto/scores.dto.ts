export class CreateScoreDto {
  username: string;
  game: string;
  score: number;
}

export class UpdateScoreDto {
  username?: string;
  game?: string;
  score?: number;
}
