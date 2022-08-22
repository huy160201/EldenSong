import { Switch, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const MobileHeaderBar = () => {
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
    const [searchOpen, setSearchOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <div className="flex items-end justify-between items-center border-b">
                {/* Logo */}
                <div className='pl-5'>
                    <img className="h-14 w-20 aspect-logo" src="https://firebasestorage.googleapis.com/v0/b/ndhuy-498b5.appspot.com/o/2efd6b44584243558050bfeb3f36751a.png?alt=media&token=45310f90-38bf-4015-8679-8a46f3ff2eff" />
                </div>
                <div className="flex">
                    {/* Button search */}
                    <div className="mr-1">
                        <Switch
                            checked={searchOpen}
                            onChange={setSearchOpen}
                            className="text-sm font-medium"
                        >
                            {searchOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </Switch>
                    </div>
                    {/* Button menu */}
                    <div>
                        <Switch
                            checked={menuOpen}
                            onChange={setMenuOpen}
                            className="text-sm font-medium"
                        >
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </Switch>
                    </div>
                </div>
            </div>

            {/* Search input */}
            <Transition
                show={searchOpen}
                as={Fragment}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-95 "
            >
                <div className={`${searchOpen ? 'block' : 'hidden'} border-b py-2`}>
                    <form className="grid grid-cols-11 gap-x-2 justify-center my-2">
                        <input
                            type="text"
                            placeholder="Nhập từ khóa"
                            className="py-1.5 px-2 border border-slate-400 mr-2 w-full col-span-9"
                        />
                        <button className="px-2 border border-slate-400 col-span-2 flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-slate-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </Transition>
            {/* Menu */}
            <Transition
                show={menuOpen}
                as={Fragment}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-95 "
            >
                <div className={`${menuOpen ? 'block' : 'hidden'} h-screen`}>
                    <div>
                        <p className="text-xl text-center font-semibold pt-3">CHUYÊN MỤC</p>

                        <div className="py-3 text-center justify-center border-b">
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

                    <div className="flex justify-between py-3 mb-3 items-center border-b">
                        <div>
                            <img className="h-20 w-36 aspect-logo" src="https://firebasestorage.googleapis.com/v0/b/ndhuy-498b5.appspot.com/o/2efd6b44584243558050bfeb3f36751a.png?alt=media&token=45310f90-38bf-4015-8679-8a46f3ff2eff" />
                        </div>
                        <div>
                            <p>
                                Hotline: <b>0362274026</b>
                            </p>
                            <div className="flex bg-slate-200 items-center justify-center mt-1 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>Gửi đến hộp thư</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-slate-600">
                        Tổng Biên tập: Nguyễn Đức Huy
                        <br />
                        Trụ sở : Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội.
                        <br />
                        © Bản quyền thuộc về duc4422@gmail.com.
                        <br />
                        Ghi rõ nguồn “duc4422@gmail.com” khi sử dụng thông tin trang này.
                        <br />
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default MobileHeaderBar