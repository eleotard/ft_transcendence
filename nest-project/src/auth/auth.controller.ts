import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto"; 
//l'index.ts dans dto permet de faire la ligne si dessus

@Controller('auth')
export class AuthController {
	//instancier une class authService dans la classe authController
	constructor(private authService: AuthService) {}
	
	//requete: POST /auth/signup
	@Post('signup')
	signup(@Body() dto: AuthDto) {
		// console.log({
		// 	dto: dto
		// })
		return this.authService.signup(dto);
	}

	//requete: POST /auth/signin
	@Post('signin')
	signin(@Body() dto: AuthDto) {
		console.log({
			dto: dto
		})
		return this.authService.signin(dto);
	}
}

// export class AuthController {
// 	authService: AuthService;
// 	constructor(authService: AuthService) {
// 	this.authService = authService;
// 	}
// }

//Nestjs gere tout seul comment creer une instance de service 
// et comment la passer via le controller presente plus haut