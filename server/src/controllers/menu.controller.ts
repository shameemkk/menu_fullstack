import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Menu from '../model/Model'; // Import the Menu model

interface MenuDetails {
    name: string;
    description: string;
}

export const createMenu = async (req: Request, res: Response): Promise<void> => {
    // Validate the request body using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    // Destructure the `name` and `description` fields from the request body
    const { name, description }: MenuDetails = req.body;

    try {
        // Use Mongoose to create a new menu in the database
        const menu = new Menu({ name, description });
        await menu.save();

        // Respond with the created menu and a 201 status code
        res.status(201).json(menu);
    } catch (error) {
        // Log the error and respond with a 500 status code
        console.error('Error creating menu:', error);
        res.status(500).json({ error: 'An unexpected error occurred while creating the menu.' });
    }
};

export const getMenus = async (req: Request, res: Response): Promise<void> => {
    try {
        const menus = await Menu.find(); // Use Mongoose to fetch all menus from the database
        res.json(menus);
    } catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).json({ error: 'An unexpected error occurred while fetching the menus.' });
    }
};

export const addMenuItem = async (req: Request, res: Response): Promise<void> => {
    // Validate the request body using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    // Extract menu ID and item details from the request
    const { menuId } = req.params;
    const { name, description, price } = req.body;

    try {
        // Find the menu by ID and add the new item to the items array
        const menu = await Menu.findById(menuId);
        if (!menu) {
            res.status(404).json({ error: 'Menu not found' });
            return;
        }

        // Add the new item to the menu's items array
        menu.items.push({ name, description, price });
        await menu.save();

        // Respond with the updated menu
        res.status(200).json(menu);
    } catch (error) {
        // Log the error and respond with a 500 status code
        console.error('Error adding menu item:', error);
        res.status(500).json({ error: 'An unexpected error occurred while adding the menu item.' });
    }
};

export const getMenuItems = async (req: Request, res: Response): Promise<void> => {
    const { menuId } = req.params; // Extract menu ID from the request parameters

    try {
        // Find the menu by its ID
        const menu = await Menu.findById(menuId);
        if (!menu) {
            res.status(404).json({ error: 'Menu not found' });
            return;
        }

        // Respond with the items array from the menu
        res.status(200).json(menu.items);
    } catch (error) {
        // Log the error and respond with a 500 status code
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'An unexpected error occurred while fetching the menu items.' });
    }
};

