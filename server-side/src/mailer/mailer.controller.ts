/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Body,  } from '@nestjs/common';
import { SendMailerDTO } from './mailer.dto';
import { MailerService } from './mailer.service';

@Controller('v1')
export class MailerController {
    constructor(private readonly sendMailerService: MailerService  ){}
    @Post('send-mail')
    async create(@Body() sendMailerDto: SendMailerDTO) {
        console.log("sendMailerDto",sendMailerDto)
        return this.sendMailerService.sendMailer(sendMailerDto);
      }
     
}
