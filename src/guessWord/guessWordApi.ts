import { Request, Response, Router } from 'express';

export const router: Router = Router();

router.get('/createGame', (req: Request, res: Response) => {
    console.log('Create game');
    res.send("Un code trop cool");
});
