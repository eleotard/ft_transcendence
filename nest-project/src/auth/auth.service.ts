import { ForbiddenException, Injectable } from "@nestjs/common";
//import { User, Bookmark } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService {
	constructor(private prisma:PrismaService) {}
	//async est utilise pck utilisation de prisma
	//dans la fonction
	//les fonctions async qui marchent avec await retournent toujours une promesse
	async signup(dto: AuthDto) {
		//generate the password
		//await dit au compilateur d'attendre la fin de argon.hach 
		//avant de continuer	
		const hash = await argon.hash(dto.password);
		//save the new usr to dt
		try {
			const user = await this.prisma.user.create({
				data: {
					email: dto.email,
					hash,
				},
			});
			delete user.hash;
			return user;
		} catch(error) {
			//erreur souvent utilisee pour gerer les trucs uniques
			if (error instanceof PrismaClientKnownRequestError) {
				//essai de creer un nouveau truc avec un unique field
				//qui na pas ete respecte
				if (error.code === 'P2002') {
					throw new ForbiddenException('Credentials taken');
				}
			}
			throw error;
		}
	}
	async signin(dto: AuthDto) {
		//find the user by email
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			}
		});

		// if user does not exist throw exception
		if (!user)
			throw new ForbiddenException('Credentials incorrect');

		//compare password
		const pwMatches = await argon.verify(user.hash, dto.password);
		//if pasword incorrect throw excetion
		if (!pwMatches)
			throw new ForbiddenException('Credentials incorrect');
		delete user.hash;
		return user;
	}  
}