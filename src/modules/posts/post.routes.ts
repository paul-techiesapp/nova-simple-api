import { Router } from "express";
import { getAllPosts, getPostById } from "./post.controller";

const router = Router();

/**
 * @openapi
 * /api/posts:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get all posts
 *     description: Retrieve a list of all posts
 *     responses:
 *       200:
 *         description: List of posts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
router.get('/', getAllPosts);

/**
 * @openapi
 * /api/posts/{id}:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get post by ID
 *     description: Retrieve a specific post by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the post to retrieve
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
router.get('/:id', getPostById);

export default router;