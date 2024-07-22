import express from "express"
import {createTweet, deleteTweet, likeOrDislike, getAllTweets, getFollowingTweets} from "../controllers/tweetController.js"
import isAuthenticated from "../config/Auth.js";


const router = express.Router();

router.route("/create").post(isAuthenticated,createTweet)

router.route("/delete/:id").delete(isAuthenticated,deleteTweet)

router.route("/like/:id").put(isAuthenticated,likeOrDislike)

router.route("/getAllTweets/:id").get(isAuthenticated,getAllTweets)

router.route("/getFollowingTweets/:id").get(isAuthenticated,getFollowingTweets)

export default router