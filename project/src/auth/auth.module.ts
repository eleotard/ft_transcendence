import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";

//open module: ()
//provide an objet to it: ({})
//-> minimum requirement to create a module
@Module({
	imports: [PrismaModule],
	controllers: [AuthController],
	providers: [AuthService]

})
export class AuthModule {}

//si on export pas la classe sera dispo que dans le fichier
//avec export dáutres fichiers peuvent y avoir acces