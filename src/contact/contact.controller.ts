// import { Controller } from '@nestjs/common';

// @Controller('contact')
// export class ContactController {}

import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer/mailer.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  async submitForm(@Body() formData: any) {
    const { name, email, message } = formData;

    // Send email using the mailer service
    await this.mailerService.sendMail({
      to: 'namit414mhatre@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { success: true, message: 'Form submitted successfully!' };
  }
}
