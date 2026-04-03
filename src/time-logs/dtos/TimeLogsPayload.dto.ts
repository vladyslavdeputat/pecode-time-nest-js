import {
  IsDate,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { ACTIVITY_TYPE, type ActivityType } from '../enums/activity-type.enum';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

export class TimeLogsPayload {
  @IsIn(Object.values(ACTIVITY_TYPE))
  type: ActivityType;

  @IsOptional()
  @IsInt()
  activity_id: number | null;

  @IsOptional()
  @IsInt()
  sub_activity_id: number | null;

  @IsInt()
  user_id: number;

  @IsNumber()
  @Min(0)
  @Max(24 * 60)
  time: number;

  @Type(() => Date)
  @IsDate()
  date: Date;
}

export class TimeLogsUpdatePayload extends PartialType(TimeLogsPayload) {}
