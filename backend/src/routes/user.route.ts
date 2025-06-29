import express from 'express';
import { getUser } from '../controllers/user.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/:id', auth, getUser);

export default router;