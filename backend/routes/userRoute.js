import express from "express"
import {Login, Register, logout} from "../controllers/userController.js"
import { bookmark, follow, getMyProfile, getOtherUsers, unfollow } from "../controllers/userController.js";
import isAuthenticated from "../config/Auth.js";

const router = express.Router();

router.route("/register").post(Register);

router.route("/login").post(Login);

router.route("/logout").get(logout);

router.route("/bookmark/:id").put(isAuthenticated,bookmark)

router.route("/profile/:id").get(isAuthenticated,getMyProfile)

router.route("/otherusers/:id").get(isAuthenticated,getOtherUsers)

router.route("/follow/:id").post(isAuthenticated,follow)

router.route("/unfollow/:id").post(isAuthenticated,unfollow)

export default router