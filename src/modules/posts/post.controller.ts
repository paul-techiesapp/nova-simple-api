import { RequestHandler } from "express";
import { PostService } from "./post.service";

const postService = new PostService();

export const getAllPosts: RequestHandler = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
};

export const getPostById: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const post = await postService.getPostById(parseInt(req.params.id));
    if (!post) {
      res.status(404).json({
        message: "Post not found"
      });
      return;
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
};

