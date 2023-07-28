"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 4151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Logo.js


function Logo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: "/",
        className: "flex gap-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "w-6 h-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "",
                children: "Camu World"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Nav.js





function Nav({ show  }) {
    const inactiveLink = "flex gap-1 p-1";
    const activeLink = inactiveLink + " bg-highlight text-black rounded-sm";
    const inactiveIcon = "w-6 h-6";
    const activeIcon = inactiveIcon + " text-primary";
    const router = (0,router_.useRouter)();
    const { pathname  } = router;
    async function logout() {
        await router.push("/");
        await (0,react_.signOut)();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: (show ? "left-0" : "-left-full") + " top-0 text-gray-500 p-4 fixed w-full bg-bgGray h-full md:static md:w-auto transition-all",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-4 mr-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: pathname === "/" ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname === "/" ? activeIcon : inactiveIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                })
                            }),
                            "Dashboard"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/productos",
                        className: pathname.includes("/productos") ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname.includes("/productos") ? activeIcon : inactiveIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                })
                            }),
                            "Productos"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/categorias",
                        className: pathname.includes("/categorias") ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname.includes("/categorias") ? activeIcon : inactiveIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                })
                            }),
                            "Categorias"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/ordenes",
                        className: pathname.includes("/ordenes") ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname.includes("/ordenes") ? activeIcon : inactiveIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                                })
                            }),
                            "Ordenes"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/settings",
                        className: pathname.includes("/settings") ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname.includes("/settings") ? activeIcon : inactiveIcon,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    })
                                ]
                            }),
                            "Configuraciones"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: logout,
                        className: inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                })
                            }),
                            "Logout"
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Layout.js





function Layout({ children  }) {
    const [showNav, setShowNav] = (0,external_react_.useState)(false);
    const { data: session  } = (0,react_.useSession)();
    if (!session) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-bgGray w-screen h-screen flex items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: ()=>(0,react_.signIn)("google"),
                    className: "bg-white p-2 px-4 rounded-lg",
                    children: "Login with Google"
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-bgGray min-h-screen ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "block md:hidden flex items-center p-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setShowNav(true),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-6 h-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
                                clipRule: "evenodd"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex grow justify-center mr-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
                        show: showNav
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-grow p-4",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;