import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UserAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersControllers';

import ensureAuthentitcated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

// ROTA POST
usersRouter.post('/', usersController.create);

// ROTA PATCH (AVATAR)
usersRouter.patch(
  '/avatar',
  ensureAuthentitcated,
  upload.single('avatar'),
  userAvatarController.update
);

export default usersRouter;
