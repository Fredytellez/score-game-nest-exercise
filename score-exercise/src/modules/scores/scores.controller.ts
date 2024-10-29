import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ScoresService, Score } from './scores.service';
import { CreateScoreDto, UpdateScoreDto } from './dto/scores.dto';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  createScore(@Body() scoreDto: CreateScoreDto): Score {
    return this.scoresService.createScore(scoreDto);
  }

  @Get()
  getAllScores(): Score[] {
    return this.scoresService.getAllScores();
  }

  @Get(':id')
  getScoreById(@Param('id') id: string): Score {
    return this.scoresService.getScoreById(id);
  }

  @Patch(':id')
  updateScoreById(
    @Param('id') id: string,
    @Body() updateData: UpdateScoreDto,
  ): Score {
    return this.scoresService.updateScoreById(id, updateData);
  }

  @Delete(':id')
  deleteScoreById(@Param('id') id: string): void {
    this.scoresService.deleteScoreById(id);
  }
}
