import { Request, Response } from "express";
import { CommentService } from "./comment.service";

const createComment = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    
    req.body.authorId = user?.id;
    const result = await CommentService.createComment(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({
      error: "Comment creation failed",
      details: e,
    });
  }
};

export const CommentController = {
  createComment,
};
