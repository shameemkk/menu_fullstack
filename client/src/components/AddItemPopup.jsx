import React, { useState } from 'react';

const AddItemPopup = ({ selectedMenu, onClose, onAddItem }) => {
    const [newItem, setNewItem] = useState({ name: '', description: '', price: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/api/menus/${selectedMenu?._id}/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });

            if (response.ok) {
                const updatedMenu = await response.json();
                onAddItem(updatedMenu); // Notify parent component about the update
                onClose(); // Close the popup
            } else {
                console.error('Failed to add item');
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black p-8 rounded-md shadow-md w-96">
                <h3 className="text-xl font-bold mb-4">Add New Item</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={newItem.name}
                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            value={newItem.description}
                            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            value={newItem.price}
                            onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-black bg-gray-300 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItemPopup;