import React, { useState } from 'react';

const AddMenuPopup = ({ onClose, onAddMenu }) => {
    const [newMenu, setNewMenu] = useState({ name: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/menus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMenu),
            });

            if (response.ok) {
                const createdMenu = await response.json();
                onAddMenu(createdMenu); // Notify parent component about the new menu
                onClose(); // Close the popup
            } else {
                console.error('Failed to add menu');
            }
        } catch (error) {
            console.error('Error adding menu:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black p-8 rounded-md shadow-md w-96">
                <h3 className="text-xl font-bold mb-4">Add New Menu</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={newMenu.name}
                            onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            value={newMenu.description}
                            onChange={(e) => setNewMenu({ ...newMenu, description: e.target.value })}
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

export default AddMenuPopup;