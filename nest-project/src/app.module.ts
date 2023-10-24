import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

//On importe ces services dans nímporte module de l'app
@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule, 
  ConfigModule.forRoot({
    isGlobal: true,
  })],
})
export class AppModule {}
