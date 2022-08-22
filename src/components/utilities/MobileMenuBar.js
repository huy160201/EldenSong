const MobileMenuBar = () => {
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
        <div className="w-full border-b">
            <ul className="flex overflow-x-auto items-center">
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-slate-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </li>
                {menu.map((menuItem) => (
                    <li
                        key={menuItem.id}
                        className="whitespace-nowrap text-lg font-medium px-2 py-2"
                    >
                        {menuItem.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenuBar