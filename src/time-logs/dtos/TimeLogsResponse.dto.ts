import { Expose } from 'class-transformer';
import type { ActivityType } from '../enums/activity-type.enum';

export class TimeLogsResponse {
  @Expose()
  id: number;

  @Expose()
  type: ActivityType;

  @Expose()
  activity_id: number | null;

  @Expose()
  sub_activity_id: number | null;

  @Expose()
  user_id: number;

  @Expose()
  time: number;

  @Expose()
  date: string;
}
