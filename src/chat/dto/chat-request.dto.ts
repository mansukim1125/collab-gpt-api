import { ApiProperty } from '@nestjs/swagger';

export class ChatRequestDto {
  @ApiProperty()
  userid: string;

  @ApiProperty()
  prompt: string;
}
