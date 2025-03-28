import React, { useEffect, useState } from 'react';
import cocktail2 from '../assets/cocktail2.svg';
import drink from '../assets/drink.svg';
import AddItemPopup from './AddItemPopup';
import AddMenuPopup from './AddMenuPopup';

const MenuTabs = () => {
    const [menus, setMenus] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showAddItemPopup, setShowAddItemPopup] = useState(false);
    const [showAddMenuPopup, setShowAddMenuPopup] = useState(false);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/menus/');
                const data = await response.json();
                setMenus(data);
                setSelectedMenu(data[0]);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenus();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = selectedMenu?.items?.slice(indexOfFirstItem, indexOfLastItem) || [];

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleAddItem = (updatedMenu) => {
        setSelectedMenu(updatedMenu); // Update the selected menu with the new item
    };

    const handleAddMenu = (newMenu) => {
        setMenus((prevMenus) => [...prevMenus, newMenu]); // Add the new menu to the list
        setSelectedMenu(newMenu); // Set the new menu as the selected menu
    };

    const totalPages = Math.ceil((selectedMenu?.items?.length || 0) / itemsPerPage);

    return (
        <section className=" mx-auto px-4 py-8 bg-[#121618] text-white">
            <div className="flex flex-col items-center space-y-4 mb-12 border p-4 rounded-md bg-[#121618] border-[#333] relative">
                <button
                    onClick={() => setShowAddMenuPopup(true)}
                    className="absolute -top-4 -right-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
                >
                    +
                </button>
                <div className="flex justify-center space-x-2">
                    {menus.map((menu) => (
                        <button
                            key={menu._id}
                            onClick={() => {
                                setSelectedMenu(menu);
                                setCurrentPage(1);
                            }}
                            className={`px-8 py-3 uppercase border rounded-md transition-colors ${
                                selectedMenu?._id === menu._id
                                    ? 'bg-blue-500 text-white border-blue-700'
                                    : 'bg-[#121618] border-[#333] hover:bg-[#1a1e20]'
                            }`}
                        >
                            {menu.name}
                        </button>
                    ))}
                </div>
                {selectedMenu?.description && (
                    <p className="mt-4 text-center text-[#bbbbbb]">{selectedMenu.description}</p>
                )}
            </div>
            
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute -left-24 top-0">
                    <img src={drink} alt="Cocktail" width={150} height={200} className="object-contain" />
                </div>

                <div className="border border-[#333] p-12 relative">
                    <div className="flex items-center justify-center mb-12">
                        <div className="h-px bg-white w-16 mr-6"></div>
                        <h2 className="text-4xl font-bold uppercase">Menu Items</h2>
                        <div className="h-px bg-white w-16 ml-6"></div>
                        <button
                            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                            onClick={() => setShowAddItemPopup(true)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 inline-block"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                             Add Item
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <div key={item._id}>
                                    <div className="flex justify-between mb-2">
                                        <h3 className="text-xl font-bold uppercase">{item.name}</h3>
                                        <span className="text-xl">${item.price.toFixed(2)}</span>
                                    </div>
                                    <p className="text-sm text-[#bbbbbb]">{item.description}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-[#bbbbbb]">No items available for this menu.</p>
                        )}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 border rounded-md ${
                                        currentPage === index + 1
                                            ? 'bg-blue-500 text-white border-blue-700'
                                            : 'bg-[#121618] border-[#333] hover:bg-[#1a1e20]'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="absolute -right-24 bottom-12">
                        <img src={cocktail2} alt="Cocktail" width={150} height={200} className="object-contain" />
                    </div>
                </div>
            </div>

            {showAddItemPopup && (
                <AddItemPopup
                    selectedMenu={selectedMenu}
                    onClose={() => setShowAddItemPopup(false)}
                    onAddItem={handleAddItem}
                />
            )}

            {showAddMenuPopup && (
                <AddMenuPopup
                    onClose={() => setShowAddMenuPopup(false)}
                    onAddMenu={handleAddMenu}
                />
            )}
        </section>
    );
};

export default MenuTabs;
