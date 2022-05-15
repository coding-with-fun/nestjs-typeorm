import { IsOptional } from 'class-validator';

export class paginationRequestType {
  @IsOptional()
  limit: number;

  @IsOptional()
  page: number;
}
