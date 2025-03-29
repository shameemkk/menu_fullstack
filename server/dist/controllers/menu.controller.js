"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuItems = exports.addMenuItem = exports.getMenus = exports.createMenu = void 0;
const express_validator_1 = require("express-validator");
const Model_1 = __importDefault(require("../model/Model")); // Import the Menu model
const createMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate the request body using express-validator
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // Destructure the `name` and `description` fields from the request body
    const { name, description } = req.body;
    try {
        // Use Mongoose to create a new menu in the database
        const menu = new Model_1.default({ name, description });
        yield menu.save();
        // Respond with the created menu and a 201 status code
        res.status(201).json(menu);
    }
    catch (error) {
        // Log the error and respond with a 500 status code
        console.error('Error creating menu:', error);
        res.status(500).json({ error: 'An unexpected error occurred while creating the menu.' });
    }
});
exports.createMenu = createMenu;
const getMenus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = yield Model_1.default.find(); // Use Mongoose to fetch all menus from the database
        res.json(menus);
    }
    catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).json({ error: 'An unexpected error occurred while fetching the menus.' });
    }
});
exports.getMenus = getMenus;
const addMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate the request body using express-validator
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // Extract menu ID and item details from the request
    const { menuId } = req.params;
    const { name, description, price } = req.body;
    try {
        // Find the menu by ID and add the new item to the items array
        const menu = yield Model_1.default.findById(menuId);
        if (!menu) {
            res.status(404).json({ error: 'Menu not found' });
            return;
        }
        // Add the new item to the menu's items array
        menu.items.push({ name, description, price });
        yield menu.save();
        // Respond with the updated menu
        res.status(200).json(menu);
    }
    catch (error) {
        // Log the error and respond with a 500 status code
        console.error('Error adding menu item:', error);
        res.status(500).json({ error: 'An unexpected error occurred while adding the menu item.' });
    }
});
exports.addMenuItem = addMenuItem;
const getMenuItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { menuId } = req.params; // Extract menu ID from the request parameters
    try {
        // Find the menu by its ID
        const menu = yield Model_1.default.findById(menuId);
        if (!menu) {
            res.status(404).json({ error: 'Menu not found' });
            return;
        }
        // Respond with the items array from the menu
        res.status(200).json(menu.items);
    }
    catch (error) {
        // Log the error and respond with a 500 status code
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'An unexpected error occurred while fetching the menu items.' });
    }
});
exports.getMenuItems = getMenuItems;
