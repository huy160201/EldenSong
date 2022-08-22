import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const MenuBar = () => {
    const [enabled, setEnabled] = useState(false)
    const menu = [
        {
            id: 1,
            name: "Giới thiệu"
        }, {
            id: 2,
            name: "Danh mục",
            children: [
                { 
                    id: 21,
                    name: "Guitar" 
                },{ 
                    id: 22,
                    name: "Ukulele" 
                },{ 
                    id: 23,
                    name: "Electric guitar" 
                }
            ]
        }, {
            id: 3,
            name: "Tin tức"
        }, {
            id: 4,
            name: "Hỗ trợ"
        }
    ]

    return (
        <div className="flex inline item-center justify-between">
            {/* Menu bar */}
            <div className="inline-flex">
                <div className="px-2 bg-red-700 cursor-pointer rounded-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white h-6 w-6 my-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </div>

                {menu.map((menuItem) => (
                    <Menu
                        as="div"
                        key={menuItem.id}
                        className="relative inline-block text-left w-fit group"
                    >
                        <div className="">
                            <Menu.Button
                                className="rounded-md font-bold uppercase justify-center px-4 py-2 text-2xs text-white group-hover:bg-red-700"
                            >
                                {menuItem.name}
                            </Menu.Button>
                        </div>
                        {/* Menu children */}
                        <Transition show={true}>
                            <Menu.Items className="group-hover:ease-in rounded-md group-hover:block hidden absolute mt-0 w-max bg-red-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {menuItem.children?.map((child) => (
                                    <div key={child.id} className={`px-1 py-1`}>
                                        <Menu.Item>
                                            <button className="text-white font-bold uppercase hover:bg-red-600 flex w-full items-center px-2 py-2 text-2xs">
                                                {child.name}
                                            </button>
                                        </Menu.Item>
                                    </div>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                ))}
            </div>

            <div className="flex inline">
                {/* Cart */}
                <div className="px-2 bg-red-600 group relative group rounded-md mr-3 hover:bg-red-700 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white my-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <div className="absolute top-0 right-0 w-4 h-4 text-xs text-center bg-slate-300 rounded-full font-bold">
                        99
                    </div>
                </div>

                {/* Search */}
                <div className="px-2 bg-[#BF081D] group relative group rounded-md cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white my-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <div
                        className={`${enabled ? 'block' : 'hidden'
                            } absolute border right-0 group-hover:block group-hover:ease-in`}
                    >
                        <form className="flex inline">
                            <input
                                onFocus={() => setEnabled(true)}
                                onBlur={() => setEnabled(false)}
                                type="text"
                                placeholder="Nhập từ khóa"
                                className="py-1.5 px-2"
                            />
                            <input
                                type="submit"
                                value="Tìm kiếm"
                                className="text-white bg-[#BF081D] py-1.5 px-2 cursor-pointer"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar