import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
	//instancier une class authService dans la classe authController
	constructor(private authService: AuthService) {}
	
	//requete: POST /auth/signup
	@Post('signup')
	signup() {
		return this.authService.signup();
	}

	//requete: POST /auth/signin
	@Post('signin')
	signin() {
		return this.authService.signin();
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