import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  //configsrvice se trouve dans le module config module dans le app module
  constructor(config: ConfigService) {
    super({
      datasources: {
      db: {
        url: config.get('DATABASE_URL')
        }
      }
    });
    console.log(config.get('DATABASE_URL'))
  }
}
