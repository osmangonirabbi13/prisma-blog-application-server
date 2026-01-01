import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({
        error: "Unauthorized!",
      });
    }
    const result = await postService.createPost(req.body, user.id as string);
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({
      error: "Post creation failed",
      details: e,
    });
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getAllPost();
    res.status(200).json({
      message: "all data",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      message: "all post fetched failed",
      details: err,
    });
  }
};

export const PostController = {
  createPost,
  getAllPost,
};
