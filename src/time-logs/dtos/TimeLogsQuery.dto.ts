import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional } from 'class-validator';
import { PaginationQuery } from 'src/lib/dtos';

export class TimeLogsQuery extends PaginationQuery {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  user_id: number | undefined;

  @IsOptional()
  @IsDateString()
  date_from: string | undefined;

  @IsOptional()
  @IsDateString()
  date_to: string | undefined;
}