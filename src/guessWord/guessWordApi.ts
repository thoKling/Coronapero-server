import { Request, Response, Router } from 'express';

export const router: Router = Router();

router.get('/createGame', (req: Request, res: Response) => {
    console.log('Create game');
    res.send({message: "Un code trop cool"});
});
