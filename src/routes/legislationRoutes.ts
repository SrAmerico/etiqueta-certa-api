import { Router } from 'express';
import { createLegislation, getLegislations } from '../controllers/legislationController';

const router = Router();

router.post('/', createLegislation);
router.get('/', getLegislations);

export default router;
