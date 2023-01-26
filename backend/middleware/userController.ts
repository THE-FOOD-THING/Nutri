import fetch from 'node-fetch';
import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';
import { ObjectId } from 'mongoose';
import { Types } from 'mongoose';

/**
 * TODO: refactor createUser to handle avatar, allergies, fridgeInventory, favorites
 * TODO: add encryption for password
 */

const userController: any = {};

userController.createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('made it to userController');

  console.log(req.body);

  const { username, password, name, email, avatar } = req.body;

  if (!username || !name || !email || !password || !avatar) {
    console.log('error happened here');
    return next('error, please enter appropriate information');
  }

  console.log(username, name, email, password);

  console.log('this is username', username);

  try {
    const newUser = await User.create({
      auth: {
        username,
        name,
        avatar,
        email,
        password,
      },
      data: {
        allerges: [],
        fridgeInventory: [],
        favorites: [],
      },
    });

    res.locals.user = newUser;
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught unknown middleware error in authMiddleware.create: ${err}`,
      status: 500,
      message: { error: 'An error occured' },
    });
  }
};

userController.verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('made it to verifyUser');
  // console.log(req);
  const { username, password } = req.body;

 
  if (!username || !password) {
    console.log('error happened here in verfiyUser controller');
    return next('error, please enter appropriate information');
  }

  console.log({ username, password });

  try {
    //Updated the query because username and password are now within auth object
      //this syntax (using strings) is used look for properties because they are nested
    const foundUser = await User.findOne({'auth.username': username, 'auth.password':password});


    //handler if not able to find a user in the database
    if (!foundUser) {
      return next({
        log: 'Express error handler caught verifyUser middleware error',
        message: { err: `no user found within database ${username}` },
      });
    }

    console.log(foundUser);

    const userToken = foundUser.createJWT({
      id: foundUser._id,
      username: foundUser.auth.username,
    });

    //add to res locals object: 1) JWT token for sessions and 2) user for updating favorites and fridge inventory
    res.locals.id = userToken;
    res.locals.foundUser = foundUser;

    return next();
  } catch (err) {
    console.log('error occured in userController verify user', err);
    next(err);
  }
};

export default userController;
