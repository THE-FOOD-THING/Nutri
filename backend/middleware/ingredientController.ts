import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';

const ingredientController: any = {};

ingredientController.getIngredients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const username = res.locals.user.username;
    const user = await User.findOne({ 'auth.username': username });

    console.log('this is the user in getIngredients', user);

    //handler if not able to find a user in the database
    if (!user) {
      return next({
        log: 'Express error handler caught getIngredients middleware error',
        message: { err: `no user found within database ${username}` },
      });
    }

    //obtain all ingredients

    res.locals.fridgeInventory = user.data.fridgeInventory;

    return next();
  } catch (err) {
    console.log('error occured in ingredientController', err);
    next(err);
  }
};

ingredientController.updateIngredients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fridgeInventory } = req.body;
    console.log(fridgeInventory);
    const username = res.locals.user.username;

    //TODO: Ask about changing the payload name from the front end. Call it frideInventoryInput?

    //to update the fridge inventory, need to use findOneAndUpdate 
    //link to documentation on $push (push operator) and $each (each operator)
    //https://www.mongodb.com/docs/v4.2/reference/operator/update/push/#up._S_push
    //https://www.mongodb.com/docs/v4.2/reference/operator/update/each/#up._S_each

    //since we are passing around an array of objects, we use the push operator to and each operator to push onto the data.fridgeInventory each element from fridgeInventory Array from the request body

    const user = await User.findOneAndUpdate(
      {'auth.username': username },
      {$push:{'data.fridgeInventory': {$each: fridgeInventory}}},
      { new: true}
    );

    //handler if not able to find a user in the database
    if (!user) {
      return next({
        log: 'Express error handler caught updateIngredients middleware error',
        message: { err: `no user found within database ${username}` },
      });
    }

    console.log('this is the user after the update', user);
    res.locals.newFridgeInventory = user.data.fridgeInventory;

    return next();
  } catch (err) {
    console.log('error occured in ingredientController updateIngredients', err);
    next(err);
  }
};

export default ingredientController;
