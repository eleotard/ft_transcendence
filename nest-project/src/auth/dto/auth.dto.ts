import { IsEmail, IsNotEmpty, IsString, isString } from "class-validator"


export class AuthDto { 
	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsNotEmpty()
	@IsString()
	password: string;
}

//si ya des variables de + a celles-ci qui sont envoyees
//elles vont egalement etre recues et c'est vraiment pas 
//terrible niveau securite , du coup il faut modifier 
//le truc global dans le main ({whitelist:true})