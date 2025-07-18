import { RequestHandler } from "express";
import { PostService } from "./post.service";

const postService = new PostService();

export const getAllPosts: RequestHandler = (req, res) => {
  const posts = postService.getAllPosts();
  res.json(posts);
  return;
}

export const getPostById: RequestHandler<{ id: string }> = (req, res) => {
  const post = postService.getPostById(parseInt(req.params.id));
  if (!post) {
    res.status(404).json({
      message: "Post not found"
    });
    return;
  }
  res.json(post);
  return;
}

