import Post from "../../models/Post";
import User from "../../models/User";
import { getPosts } from "./post.data";
import { Post as PostInterface } from "./post.interface";

export class PostService {
  async getAllPosts(): Promise<Post[] | PostInterface[]> {
    try {
      return await Post.findAll({
        include: [{
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email']
        }]
      });
    } catch (error) {
      console.log('Database unavailable, using fallback data');
      return getPosts();
    }
  }

  async getPostById(id: number): Promise<Post | PostInterface | null> {
    try {
      return await Post.findByPk(id, {
        include: [{
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email']
        }]
      });
    } catch (error) {
      console.log('Database unavailable, using fallback data');
      return getPosts().find((post) => post.id === id) || null;
    }
  }
}
