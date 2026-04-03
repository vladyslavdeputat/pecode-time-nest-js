import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Serialize, SerializeList } from 'src/lib/interceptors';
import {
  TimeLogsPayload,
  TimeLogsUpdatePayload,
} from './dtos/TimeLogsPayload.dto';
import { TimeLogsResponse } from './dtos/TimeLogsResponse.dto';
import { ACTIVITY_TYPE } from './enums/activity-type.enum';
import { IdParam } from 'src/lib/dtos';
import { TimeLogsQuery } from './dtos/TimeLogsQuery.dto';

const HARDCODED_TIME_LOG: TimeLogsResponse = {
  id: 1,
  type: ACTIVITY_TYPE.WORK_ACTIVITY,
  activity_id: 1,
  sub_activity_id: 1,
  user_id: 1,
  time: 8 * 60,
  date: new Date(),
};

@Controller('time-logs')
export class TimeLogsController {
  @Post('/')
  @Serialize(TimeLogsResponse)
  create(@Body() payload: TimeLogsPayload) {
    return HARDCODED_TIME_LOG;
  }

  @Get('/')
  @SerializeList(TimeLogsResponse)
  list(@Query() query: TimeLogsQuery) {
    return {
      next: null,
      previous: null,
      count: 1,
      results: [HARDCODED_TIME_LOG],
    };
  }

  @Get('/:id')
  @Serialize(TimeLogsResponse)
  getById(@Param() { id }: IdParam) {
    return HARDCODED_TIME_LOG;
  }

  @Patch('/:id')
  @Serialize(TimeLogsResponse)
  update(@Param() { id }: IdParam, @Body() payload: TimeLogsUpdatePayload) {
    return HARDCODED_TIME_LOG;
  }

  @Delete('/:id')
  deleteById(@Param() { id }: IdParam) {}
}
