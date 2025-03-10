import express from 'express';
import { sendMessage, getMessage} from '../controllers/msgController.js';
import isAuth from '../middleware/isAuth.js';

const router =  express.Router();

router.route("/send/:id").post( isAuth,sendMessage);
router.route("/:id").get(isAuth, getMessage);
export default router;