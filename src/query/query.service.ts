import { Injectable } from '@nestjs/common';
import { QueryInputDto } from './dto/query-input.dto';

@Injectable()
export class QueryService {
  query(queryInput: QueryInputDto) {
    // TODO: implement here.
  }
}
