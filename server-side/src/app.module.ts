import { MailerModule } from './mailer/mailer.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
