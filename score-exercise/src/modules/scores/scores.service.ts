import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos
import { CreateScoreDto, UpdateScoreDto } from './dto/scores.dto';

export interface Score {
  id: string;
  username: string;
  game: string;
  score: number;
}

@Injectable()
export class ScoresService {
  private scores: Score[] = [];

  createScore(scoreDto: CreateScoreDto): Score {
    const score: Score = {
      id: uuidv4(),
      ...scoreDto,
    };
    this.scores.push(score);
    return score;
  }

  getAllScores(): Score[] {
    return this.scores;
  }

  getScoreById(id: string): Score {
    return this.scores.find((score) => score.id === id);
  }

  updateScoreById(id: string, updateData: UpdateScoreDto): Score {
    const score = this.getScoreById(id);
    if (score) {
      Object.assign(score, updateData);
    }
    return score;
  }

  deleteScoreById(id: string): void {
    this.scores = this.scores.filter((score) => score.id !== id);
  }
}
