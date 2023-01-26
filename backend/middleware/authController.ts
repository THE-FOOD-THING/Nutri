import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authController: any = {};

authController.verifyJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    console.log('made it to verfiyJWT');
    // console.log(req);
    // console.log(req.cookies.ssid);
    let token = req.cookies.ssid;
    console.log('this token', token);
    if (!token) {
      return res
        .status(403)
        .send('Session expired, please login and try again!');
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    console.log(verified);
    // @ts-ignore because stupid
    const { id, username } = verified;

    //TODO: figure out how to handle error
    // req.user = verified;

    // @ts-ignore because stupid
    res.locals.user = { userId: id, username: username };

    next();
  } catch (err) {}
};

export default authController;