import { Injectable } from '@nestjs/common';
import { ChatRequestDto } from './dto/chat-request.dto';
import { QueryService } from '../query/query.service';

@Injectable()
export class ChatService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly queryService: QueryService,
  ) {}
  chat(chatRequest: ChatRequestDto) {
    // TODO: algorithm here.
    const { userid, prompt } = chatRequest;

    // 필요 없을 수도 있다..
    // const user = this.userRepository.getUserById(userid);

    return this.queryService.query({ userid, prompt });
  }
}
