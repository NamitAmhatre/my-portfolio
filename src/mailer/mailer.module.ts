import { Module } from '@nestjs/common';
import { MailerService } from './mailer/mailer.service';

@Module({
  providers: [MailerService]
})
export class MailerModule {}
