import { Request, Response } from "express";
import { userRepository } from "../config/database";

export const profileController = async (req: Request, res: Response) => {
    const { email } = req.body;
  
    try {
      const user = await userRepository.findOneBy({ email: email });
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while retrieving the profile" });
    }
  };
  
export const profileUpdateController = async (req: Request, res: Response) => {
    const { email, username, password } = req.body;

    try {
        const user = await userRepository.findOneBy({email:email});

    if (user) {
        user.email = email;
        user.username = username;
        user.password = password;

        await userRepository.save(user);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
    } catch (error) {
        res.status(500).json({ message: 'Error while updating the user' });
    }
};

export const profileDeleteController = async (req: Request, res: Response) => {
    const { email } = req.body;

    try {
        const user = await userRepository.findOneBy({email:email});

        if (user) {
        await userRepository.remove(user);
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error while deleting the user' });
    }
};

export const verifyTokenController = async (req: Request, res: Response) => {
    res.status(200).json(req.user);
};
  