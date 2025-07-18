import { getPosts } from "./post.data";
import { Post } from "./post.interface";

export class PostService {
  getAllPosts(): Post[] {
    return getPosts();
  }

  getPostById(id: number): Post | undefined {
    return getPosts().find((post) => post.id === id);
  }
}
