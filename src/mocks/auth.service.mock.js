import { axiosInstance } from "../services/auth.service.js";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axiosInstance);

const correctLogin = {
	email: "correct@gmail.com",
	password: "123asd",
};

mock
	.onGet(
		"/me",
		{},
		{
			Authorization: "Bearer este-es-un-token-valido",
			Accept: "application/json, text/plain, */*",
		}
	)
	.reply(200, {
		img: "https://cdn.quasar.dev/img/avatar.png",
		name: "Mary",
		newMessages: 2,
		lastLogged: "3 min ago",
	});
mock.onGet("/me").reply(403, { error: "Token incorrecto" });

mock
	.onPost("/login", correctLogin)
	.reply(200, { token: "este-es-un-token-valido" });
mock.onPost("/login").reply(400, { error: "Login incorrecto" });

export default mock;
