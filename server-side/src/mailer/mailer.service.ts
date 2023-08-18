/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { SendMailerDTO } from './mailer.dto';
const nodemailer = require("nodemailer");


@Injectable()
export class MailerService {

   async sendMailer(formInput : SendMailerDTO){
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "testemaildemo54@gmail.com", // generated ethereal user
            pass: "kzszoaefzmcrbwbr", // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: 'testemaildemo54@gmail.com', // sender address
          to: "kalpalathika1@gmail.com", // list of receivers
          subject: "Accountax lead form", // Subject line
          html: `<b>First Name</b> : ${formInput?.fname ?? "-"} <br><br>
                <b>Last Name</b> : ${formInput?.lname ?? "-"} <br><br>
                <b>Email</b> : ${formInput?.email ?? "-"} <br><br>
                <b>Phone Number</b> : ${formInput?.phone ?? "-"} <br><br>
                <b>City</b> : ${formInput?.city ?? "-"} <br><br>
                <b>Comments</b> : ${formInput?.comments ?? "-"} <br><br>
          `, // html body
        });

        if(info.messageId) return {status: true, msg: "Email Sent Successfully!"  }
        return {status: false, msg: "Unable to send Email"  }
      
    }

}
