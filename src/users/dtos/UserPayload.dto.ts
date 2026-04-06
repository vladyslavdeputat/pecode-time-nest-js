import { OmitType, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserPayload {
  @IsString()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  username: string;
}

export class UserUpdatePayload extends PartialType(
  OmitType(UserPayload, ['email'] as const),
) {}