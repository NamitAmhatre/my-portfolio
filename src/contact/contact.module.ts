import { Module } from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer/mailer.service';
import { ContactController } from './contact.controller';

@Module({
  controllers: [ContactController],
  providers: [MailerService],
})
export class ContactModule {}
