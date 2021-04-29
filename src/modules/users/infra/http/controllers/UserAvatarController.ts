import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService'

interface User {
  password?: string;
}

export default class userAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user: User = await updateUserAvatar.execute({
      user_id: req.user.id,
      avatarFilename: req.file.filename
    })

    delete user.password;

    return res.json(user);
  }
}
