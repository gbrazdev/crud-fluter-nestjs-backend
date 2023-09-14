/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateThingDto } from './dto/create-thing.dto';
import { UpdateThingDto } from './dto/update-thing.dto';

@Injectable()
export class ThingsService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createThingDto: CreateThingDto) {
    return 'This action adds a new thing';
  }

  findAll() {
    return `This action returns all things`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thing`;
  }

  update(id: number, updateThingDto: UpdateThingDto) {
    return `This action updates a #${id} thing`;
  }

  remove(id: number) {
    return `This action removes a #${id} thing`;
  }
}
