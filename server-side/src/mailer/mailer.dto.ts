import { IsNotEmpty, IsEmail, IsNumber, IsOptional } from "class-validator";

export class SendMailerDTO {
    @IsNotEmpty()
     fname: string;

    @IsNotEmpty()
     lname: string; 

    @IsNotEmpty()
    @IsEmail()
     email: string; 

     @IsNotEmpty()
     @IsNumber()
     phone: number;

     @IsNotEmpty()
     city: string;

     @IsOptional()
     comments?: string
  }
