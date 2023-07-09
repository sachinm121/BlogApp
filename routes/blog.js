const express = require("express");
const router = express.Router();

//import controller
// const {dummyLink} = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");
const {likePost, unlikePost} = require("../controllers/likeController"); 

//Mapping create
// router.get("/dummyRoute", dummyLink);
router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// export 
module.exports = router;