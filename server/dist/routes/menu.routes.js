"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const menu_controller_1 = require("../controllers/menu.controller");
const router = (0, express_1.Router)();
exports.menuRouter = router;
router.post('/', [
    (0, express_validator_1.body)('name').notEmpty().trim().withMessage('Menu name is required'),
    (0, express_validator_1.body)('description').notEmpty().trim().withMessage('Description is required'),
], menu_controller_1.createMenu);
router.get('/', menu_controller_1.getMenus);
router.post('/:menuId/items', menu_controller_1.addMenuItem);
router.get('/:menuId/items', menu_controller_1.getMenuItems);
