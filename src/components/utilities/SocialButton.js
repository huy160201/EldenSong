const SocialButton = () => {
    return (
        <div className="fixed top-[35%] right-0.5 block">
            <a
                href="#"
                target="_blank"
                className="bg-[#3b5998] p-2 w-10 h-10 flex justify-center items-center"
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
                className="bg-[#018fe5] p-2 w-10 h-10 flex items-center justify-center"
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
                className="bg-[#FE272D] p-2 w-10 h-10 flex justify-center items-center"
                rel="noreferrer"
                onClick={e => e.preventDefault()}
            >
                <div className="h-5 w-5 block ml-auto mr-auto relative">
                    <img src="https://www.baolaocai.vn/_nuxt/img/youtube-logo.00a9434.svg" />
                </div>
            </a>
        </div>
    )
}

export default SocialButton