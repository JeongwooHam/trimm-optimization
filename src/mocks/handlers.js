import { setupWorker } from "msw";
import * as productApi from "./apis/product.api";
import * as chatApi from "./apis/chat.api";
import * as userApi from "./apis/user.api";
import * as mainApi from "./apis/products/main.api";
import * as detailApi from "./apis/products/detail.api";

const handlers = [
	...Object.values(productApi),
	...Object.values(chatApi),
	...Object.values(userApi),
	...Object.values(mainApi),
	...Object.values(detailApi),
];
export const worker = setupWorker(...handlers);
