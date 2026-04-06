import {
  IsInt,
  IsNumber,
  IsOptional,
  Min,
  Max,
  IsEnum,
  IsDateString,
} from 'class-validator';
import { ActivityType } from '../enums/activity-type.enum';
import { OmitType, PartialType } from '@nestjs/swagger';

export class TimeLogsPayload {
  @IsEnum(ActivityType)
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

  @IsDateString({ strict: true })
  date: string;
}

export class TimeLogsUpdatePayload extends PartialType(
  OmitType(TimeLogsPayload, ['user_id'] as const),
) {}
