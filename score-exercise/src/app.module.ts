import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';
import { ScoresModule } from './modules/scores/scores.module';

@Module({
  imports: [UsersModule, ScoresModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
