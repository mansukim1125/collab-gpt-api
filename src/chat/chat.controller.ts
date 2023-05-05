import { Controller, Post } from '@nestjs/common';
import { ChatRequestDto } from './dto/chat-request.dto';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Post()
  receiveMessage(chatRequest: ChatRequestDto) {
    return this.chatService.chat(chatRequest);
  }
}
