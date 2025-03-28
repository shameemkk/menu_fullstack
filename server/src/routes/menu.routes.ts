import { Router } from 'express';
import { body } from 'express-validator';
import { createMenu, getMenus, addMenuItem, getMenuItems } from '../controllers/menu.controller';

const router = Router();

router.post(
  '/',
  [
    body('name').notEmpty().trim().withMessage('Menu name is required'),
    body('description').notEmpty().trim().withMessage('Description is required'),
  ],
  createMenu
);
router.get('/', getMenus);
router.post('/:menuId/items', addMenuItem);
router.get('/:menuId/items', getMenuItems);

export { router as menuRouter };