import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //le service sera accessible a tous les autres
//Modules qui ont besoin d'acces a la database
//sauf dans le root module/app module ou ya besoin d'import

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
