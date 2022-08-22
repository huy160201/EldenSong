import React from 'react'

const FooterBar = () => {
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
                }, {
                    id: 22,
                    name: "Ukulele"
                }, {
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
        <div>
            <div className='grid grid-cols-4 gap-x-8 p-3 bg-red-500 text-white pb-5' >
                <div className='col-span-1'>
                    <h3 className='border-b text-center py-2 mb-5 font-bold text-xl cursor-pointer hover:bg-red-600'>GIỚI THIỆU</h3>
                    <div>
                        Tổng Biên tập: Nguyễn Đức Huy
                        <br />
                        <br />
                        Trụ sở : Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội.
                    </div>
                </div>
                <div className='col-span-1 text-center'>
                    <h3 className='border-b py-2 mb-5 font-bold text-xl cursor-pointer hover:bg-red-600'>LIÊN HỆ</h3>
                    <ul>
                        <li className='flex inline items-center py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p className='pl-2'>Cổ Nhuế, Bắc Từ Liêm, Hà Nội</p>
                        </li>
                        <li className='flex inline items-center py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <p className='pl-2'>0362274026</p>
                        </li>
                        <li className='flex inline items-center py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <p className='pl-2'>duc4422@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className='col-span-1 text-center'>
                    <h3 className='border-b py-2 font-bold text-xl cursor-pointer hover:bg-red-600'>DANH MỤC</h3>
                    <div className="py-3 text-center justify-center">
                        <ul className="grid grid-cols-2">
                            {menu.map((menuItem) => (
                                <li
                                    key={menuItem.id}
                                    className="text-center px-1.5 text-2lg col-span-1 py-2 uppercase"
                                >
                                    <a href="#">{menuItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='col-span-1 text-center'>
                    <h3 className='border-b py-2 font-bold text-xl cursor-pointer hover:bg-red-600'>MẠNG XÃ HỘI</h3>
                    <div className="flex inline justify-center my-5">
                        <a
                            href="#"
                            target="_blank"
                            className="bg-[#3b5998] p-2 w-10 h-10 flex justify-center items-center mx-2 rounded-md"
                            rel="noreferrer"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="h-4 w-4 block ml-auto mr-auto">
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1LjcsMjRIMjl2MjZIMTlWMjRoLTZ2LThoNnYtNC44QzE5LDQuMiwyMS45LDAsMzAuMiwwSDM3djhoLTQuNkMyOS4yLDgsMjksOS4yLDI5LDExLjRWMTZoOEwzNS43LDI0eiIvPgo8L3N2Zz4K" />
                            </div>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="bg-[#018fe5] p-2 w-10 h-10 flex items-center justify-center mx-2 rounded-md"
                            rel="noreferrer"
                            onClick={e => e.preventDefault()}
                        >
                            <p className="text-xs text-white block ml-auto mr-auto font-bold my-auto">
                                Zalo
                            </p>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="bg-[#FE272D] p-2 w-10 h-10 flex justify-center items-center mx-2 rounded-md border"
                            rel="noreferrer"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="h-5 w-5 block ml-auto mr-auto relative">
                                <img src="https://www.baolaocai.vn/_nuxt/img/youtube-logo.00a9434.svg" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-red-600 py-3 px-3 text-white'>
                © Bản quyền thuộc về duc4422@gmail.com.
                <br />
                Ghi rõ nguồn “duc4422@gmail.com” khi sử dụng thông tin trang này.
                <br />
            </div>
        </div>
    )
}

export default FooterBar
