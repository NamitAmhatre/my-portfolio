// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class MailerService {}
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'namit414mhatre@gmail.com',
      pass: 'chgc nisw dryz qums',
    },
  });

  async sendMail(options: nodemailer.SendMailOptions): Promise<void> {
    await this.transporter.sendMail(options);
  }
}
