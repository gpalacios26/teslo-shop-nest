import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MessagesWsGateway } from './message-ws.gateway';
import { MessageWsService } from './message-ws.service';

@Module({
  imports: [AuthModule],
  providers: [MessagesWsGateway, MessageWsService]
})
export class MessageWsModule { }
