import { MailerService } from './mailer.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MailerController } from './mailer.controller';

@Module({
  controllers: [MailerController],
  providers: [MailerService],
})
export class MailerModule {}
