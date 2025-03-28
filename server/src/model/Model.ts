import mongoose, { Schema, Document } from 'mongoose';

// Define the MenuItem schema
const MenuItemSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
});

// Define the Menu schema
const MenuSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    items: [MenuItemSchema], // Array of menu items
});

// Define the Menu interface for TypeScript
export interface IMenu extends Document {
    name: string;
    description: string;
    items: {
        name: string;
        description: string;
        price: number;
    }[];
}

// Create and export the Menu model
const Menu = mongoose.model<IMenu>('Menu', MenuSchema);
export default Menu;