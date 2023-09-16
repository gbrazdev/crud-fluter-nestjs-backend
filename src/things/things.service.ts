/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma_service/prisma_service';

@Injectable()
export class ThingsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createThingDto: Prisma.ThingsCreateInput) {
    return this.prisma.things.create({
      data: createThingDto,
    });
  }

  findAll() {
    return this.prisma.things.findMany({
      include: {
        category: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.things.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateThingDto: Prisma.ThingsUpdateInput) {
    return this.prisma.things.update({
      data: updateThingDto,
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.prisma.things.delete({
      where: { id: id },
    });
  }
}
