require("./index.css");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$reactdomclient = require("react-dom/client");
var $ltMAx$react = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
var $ltMAx$reactrouterdom = require("react-router-dom");
var $ltMAx$axios = require("axios");
var $ltMAx$sweetalert2 = require("sweetalert2");
var $ltMAx$jwtdecode = require("jwt-decode");
var $ltMAx$downloadjs = require("downloadjs");
var $ltMAx$reactdropzone = require("react-dropzone");
var $ltMAx$reactbootstrap = require("react-bootstrap");
var $ltMAx$framermotion = require("framer-motion");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}











function $d4991868a3cef739$var$Login() {
    const [userID, setUserID] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const loginUser = async (e)=>{
        e.preventDefault();
        const loginData = {
            userID: userID,
            password: password
        };
        const response = await (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/api/v1/users/login", loginData);
        console.log(response);
        const data = response.data;
        if (data.user) {
            localStorage.setItem("token", data.user);
            localStorage.setItem("userID", data.userID);
            if (data.role === "student") (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                title: "Login Successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            }).then((value)=>{
                (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire(window.location = "/student");
            });
            else if (data.role === "supervisor") (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                title: "Login Successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            }).then((value)=>{
                (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire(window.location = "/supervisor");
            });
            else if (data.role === "admin") (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                title: "Login Successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            }).then((value)=>{
                (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire(window.location = "/admin-home");
            });
            else if (data.role === "panel_member") (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                title: "Login Successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            }).then((value)=>{
                (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire(window.location = "/panelMember");
            });
            else console.log("user type err");
        } else if (data.status === "no_user") (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "User does not exists!!",
            text: "Please create an account",
            icon: "error",
            confirmButtonText: "OK"
        }).then((result)=>{
            if (result.isConfirmed) {
                setUserID("");
                setPassword("");
            }
        });
        else {
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                title: "Incorrect Password!!",
                text: "Please enter your password again.",
                icon: "error",
                confirmButtonText: "OK"
            });
            setPassword("");
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "row",
                style: {
                    height: "100px"
                }
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                class: "container body min-vh-100",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    class: "row mt-5 mb-5",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-3"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-6",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                class: "card ",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    class: "card-body",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                            class: "mb-4 text-center",
                                            children: "Sign In"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                            onSubmit: loginUser,
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-group ",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                            for: "userID",
                                                            children: "User ID"
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                            type: "text",
                                                            class: "form-control",
                                                            id: "userID",
                                                            value: userID,
                                                            name: "userID",
                                                            onChange: (e)=>{
                                                                setUserID(e.target.value);
                                                            },
                                                            required: true,
                                                            "aria-describedby": "userHelp"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                            for: "password_field",
                                                            children: "Password"
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                            type: "password",
                                                            class: "form-control",
                                                            required: true,
                                                            value: password,
                                                            name: "password",
                                                            onChange: (e)=>{
                                                                setPassword(e.target.value);
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                    type: "submit",
                                                    class: "btn btn-primary custom-btn-signIn",
                                                    children: "Sign In"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "row",
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "col-md-4 mt-2",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                        class: "form-group form-check",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                type: "checkbox",
                                                                class: "form-check-input",
                                                                id: "exampleCheck1"
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                class: "form-check-label",
                                                                for: "exampleCheck1",
                                                                children: "Remember me"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "col-md-4"
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "col-md-4 mt-2",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                        children: "Not a member? "
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "custom-bottem mt-2",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "row",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "col-md-6",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                                                    to: "registerStudent",
                                                                    style: {
                                                                        textDecoration: "none"
                                                                    },
                                                                    children: "Register As Student"
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "col-md-6",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                                                    to: "registerStaff",
                                                                    style: {
                                                                        textDecoration: "none"
                                                                    },
                                                                    children: "Register As Staff Member"
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-3"
                        })
                    ]
                })
            })
        ]
    });
}
var $d4991868a3cef739$export$2e2bcd8739ae039 = $d4991868a3cef739$var$Login;









function $eaa0283bd5096d3d$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                class: "sidebar-wrapper",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("nav", {
                    id: "sidebar",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                        class: "list-unstyled components",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/admin-home",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fas fa-tachometer-alt"
                                        }),
                                        " Dashboard"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                        href: "#productSubmenu",
                                        "data-toggle": "collapse",
                                        "aria-expanded": "false",
                                        class: "dropdown-toggle",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                class: " fas fa-users"
                                            }),
                                            " Users"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                                        class: "collapse list-unstyled",
                                        id: "productSubmenu",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                                    href: "/admin/staff",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-user"
                                                        }),
                                                        " Staff"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                                    href: "/admin/students",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-user-graduate"
                                                        }),
                                                        " Student"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/admin/groups",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fa-solid fa-users-rectangle"
                                        }),
                                        " Students Groups"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "addtemplate",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fas fa-clipboard-list"
                                        }),
                                        " Templates"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/allocatepanelmembers",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fas fa-clipboard-list"
                                        }),
                                        " Allocate Panel Members"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/addAdmin",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fas fa-plus"
                                        }),
                                        " Add New Admin"
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}



function $e16a91c09b3e7c19$var$AdminHome() {
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
        } catch (error) {}
    }, []);
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            class: "row row-cols-1 row-cols-md-2 mt-5",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Manage Student"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                                    href: "/admin/students",
                                                    className: "custom-size",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-user-graduate"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Manage Staff Member"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "/admin/staff",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: " fas fa-users"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Add New Admin"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "/addAdmin",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-user-gear"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Manage Student Groups"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "/admin/groups",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-users-rectangle"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
var $e16a91c09b3e7c19$export$2e2bcd8739ae039 = $e16a91c09b3e7c19$var$AdminHome;









function $16f52f33240b448d$var$UpdateStaff() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [name, setName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setID] = (0, $ltMAx$react.useState)("");
    const [faculty, setFaculty] = (0, $ltMAx$react.useState)("");
    const [department, setDepartment] = (0, $ltMAx$react.useState)("");
    const [type, setType] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [researchInterest, setresearchInterest] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [role, setRole] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleChangeFaculty = (event)=>{
        setFaculty(event.target.value);
    };
    const handleDepartment = (event)=>{
        setDepartment(event.target.value);
    };
    const handleChangeUserType = (event)=>{
        setType(event.target.value);
        setRole(event.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setShowText(false);
        setLoading(true);
        const newStaff = {
            name: name,
            idNumber: idNumber,
            faculty: faculty,
            department: department,
            researchInterest: researchInterest,
            type: type,
            email: email
        };
        const userID = idNumber;
        (0, ($parcel$interopDefault($ltMAx$axios))).put("https://af-group-project.herokuapp.com/api/v1/staff/update/" + paramID.id, newStaff).then((res)=>{
            console.log(res);
            console.log("Update Successfuly!!");
            setLoading(false);
            setShowText(true);
        }).catch((err)=>{
            alert(err);
        });
        setName("");
        setID("");
        setFaculty("");
        setDepartment("");
        setType("");
        setresearchInterest("");
        setEmail("");
        (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Update Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
        navigate("/admin/staff");
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/get/" + paramID.id).then((res)=>{
            console.log(res.data);
            setName(res.data.name);
            setID(res.data.idNumber);
            setFaculty(res.data.faculty);
            setDepartment(res.data.department);
            setType(res.data.type);
            setresearchInterest(res.data.researchInterest);
            setEmail(res.data.email);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "50px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: [
                                                            idNumber,
                                                            " Member Details"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        encType: "multipart/form-data",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputName",
                                                                                children: "Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: name,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputIdNumber",
                                                                                children: "ID Number"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: idNumber,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFaculty",
                                                                                children: "Select Faculty"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: faculty,
                                                                                onChange: handleChangeFaculty,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Computing",
                                                                                        children: "Faculty of Computing"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Engineering",
                                                                                        children: "Faculty of Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Buisness",
                                                                                        children: " Faculty of Buisness"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Health and Science",
                                                                                        children: " Faculty of Health and Science"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputDepartment",
                                                                                children: " Select Department"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: department,
                                                                                onChange: handleDepartment,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Computer Science and Software Engineering",
                                                                                        children: "Computer Science and Software Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Cyber Sequrity",
                                                                                        children: "Cyber Sequrity"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Information Technology",
                                                                                        children: "Information Technology"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Data Science",
                                                                                        children: "Data Science"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Electrical & Electronic Engineeringy",
                                                                                        children: "Electrical & Electronic Engineeringy"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Civil Engineeringy",
                                                                                        children: "Civil Engineeringy"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Buisness",
                                                                                        children: "Buisness"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Other",
                                                                                        children: "Other"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputStaffType",
                                                                                children: "Select Staff Type"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: type,
                                                                                onChange: handleChangeUserType,
                                                                                required: true,
                                                                                defaultValue: "supervisor",
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "supervisor",
                                                                                        children: "Supervisor"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "supervisor",
                                                                                        children: "Co-Supervisor"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "panel_member",
                                                                                        children: "Panel Member"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputResearchInterest",
                                                                                children: "research Interest"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: researchInterest,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row mt-2",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputEmail",
                                                                            children: "Email"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "email",
                                                                            class: "form-control",
                                                                            value: email,
                                                                            readOnly: true
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "UPDATE"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "custom-bottem mt-2"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $16f52f33240b448d$export$2e2bcd8739ae039 = $16f52f33240b448d$var$UpdateStaff;







function $e67988f563b416a3$var$Loader() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
        class: "loader"
    });
}
var $e67988f563b416a3$export$2e2bcd8739ae039 = $e67988f563b416a3$var$Loader;






function $a7d5b0ddf21b0c86$var$UpdateStudent() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [name, setStudentName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setStudentID] = (0, $ltMAx$react.useState)("");
    const [degree, setDegree] = (0, $ltMAx$react.useState)("");
    const [specialization, setSpecialization] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleChangeDegree = (event)=>{
        setDegree(event.target.value);
    };
    const handleChangeSpecialization = (event)=>{
        setSpecialization(event.target.value);
    };
    const role = "student";
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newStudent = {
            name: name,
            idNumber: idNumber,
            degree: degree,
            specialization: specialization,
            email: email
        };
        (0, ($parcel$interopDefault($ltMAx$axios))).put("https://af-group-project.herokuapp.com/api/v1/students/update/" + paramID.id, newStudent).then((res)=>{
            console.log(res);
            console.log("Student Updated!!");
            setLoading(false);
            setShowText(true);
        }).catch((err)=>{
            alert(err);
        });
        (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Update Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
        navigate("/admin/students");
        setStudentName("");
        setStudentID("");
        setDegree("");
        setSpecialization("");
        setPassword("");
        setEmail("");
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/students/get/" + paramID.id).then((res)=>{
            console.log(res.data);
            setStudentName(res.data.name);
            setStudentID(res.data.idNumber);
            setDegree(res.data.degree);
            setSpecialization(res.data.specialization);
            setEmail(res.data.email);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "50px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: [
                                                            idNumber,
                                                            " Details"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        id: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputName",
                                                                                children: "Student Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: name,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputIdNumber",
                                                                                children: "ID Number"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: idNumber,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputDegree",
                                                                                children: "Select Degree"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: degree,
                                                                                onChange: handleChangeDegree,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Software Enginnering",
                                                                                        children: "Software Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Information Technology",
                                                                                        children: "Information Technology"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Cyber Sequrity",
                                                                                        children: " Cyber Sequrity"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Data Science",
                                                                                        children: " Data Science"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Electrical & Electronic Engineering",
                                                                                        children: " Electrical & Electronic Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Civil Engineering",
                                                                                        children: " Civil Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Buisness Management",
                                                                                        children: " Buisness Management"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Other",
                                                                                        children: " Other"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputSpecialization",
                                                                                children: "Select Specialization"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: specialization,
                                                                                onChange: handleChangeSpecialization,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "BSC (hons) in Information Technology",
                                                                                        children: "BSC (hons) in Information Technology"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "BSC (Computing)",
                                                                                        children: "BSC (Computing)"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "BSE ENG (hons)",
                                                                                        children: " BSE ENG (hons)"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "BBA(hons)",
                                                                                        children: " BBA(hons)"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Other",
                                                                                        children: " Other"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputEmail",
                                                                            children: "Email"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "email",
                                                                            class: "form-control",
                                                                            value: email,
                                                                            required: true,
                                                                            readOnly: true
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "UPDATE"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "custom-bottem mt-2"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $a7d5b0ddf21b0c86$export$2e2bcd8739ae039 = $a7d5b0ddf21b0c86$var$UpdateStudent;









function $ace6788f9b919927$var$AddAdmin() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const [idNumber, setAdminID] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const role = "admin";
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (password === confirmPassword) {
            setShowText(false);
            setLoading(true);
            const userID = idNumber;
            const newLogin = {
                userID: userID,
                password: password,
                role: role
            };
            (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/api/v1/users/add/", newLogin).then((res)=>{
                console.log(res);
                console.log("Success!!");
                setLoading(false);
                setShowText(true);
            }).catch((err)=>{
                alert(err);
            });
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Admin Added!!", "Click ok to Continue", "success");
            navigate("/admin-home");
            setAdminID("");
            setPassword("");
        } else {
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                title: "Passowrds Not Matched!!",
                text: "Please enter your password again.",
                icon: "error",
                confirmButtonText: "OK"
            });
            setConfirmPassword("");
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "50px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container body",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-3"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-6",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "Add New Admin"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "adminId",
                                                                        children: "Admin ID"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "text",
                                                                        class: "form-control",
                                                                        value: idNumber,
                                                                        required: true,
                                                                        onChange: (e)=>{
                                                                            setAdminID(e.target.value);
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "password_field",
                                                                        children: "Password"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "password",
                                                                        class: "form-control",
                                                                        value: password,
                                                                        required: true,
                                                                        onChange: (e)=>{
                                                                            setPassword(e.target.value);
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "password_field",
                                                                        children: "Confirm Password"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "password",
                                                                        class: "form-control",
                                                                        value: confirmPassword,
                                                                        required: true,
                                                                        onChange: (e)=>{
                                                                            setConfirmPassword(e.target.value);
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary custom-btn-signIn",
                                                                children: "Register New Admin"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-3"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $ace6788f9b919927$export$2e2bcd8739ae039 = $ace6788f9b919927$var$AddAdmin;








function $396e6e092ad378d9$var$RegisterStudent() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const [name, setStudentName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setStudentID] = (0, $ltMAx$react.useState)("");
    const [degree, setDegree] = (0, $ltMAx$react.useState)("");
    const [specialization, setSpecialization] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleChangeDegree = (event)=>{
        setDegree(event.target.value);
    };
    const handleChangeSpecialization = (event)=>{
        setSpecialization(event.target.value);
    };
    const role = "student";
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (password === confirmPassword) {
            setShowText(false);
            setLoading(true);
            const newStudent = {
                name: name,
                idNumber: idNumber,
                degree: degree,
                specialization: specialization,
                email: email
            };
            const userID = idNumber;
            const newLogin = {
                userID: userID,
                password: password,
                role: role
            };
            (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/api/v1/students/registerStudent", newStudent).then((res)=>{
                console.log(res);
                console.log("Student Added!!");
                setLoading(false);
                setShowText(true);
            }).catch((err)=>{
                alert(err);
            });
            (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/api/v1/users/add/", newLogin).then((res)=>{
                console.log(res);
                console.log("Student Login Added!!");
                setLoading(false);
                setShowText(true);
            }).catch((err)=>{
                alert(err);
            });
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Registration Succesfull!", "Click ok to Continue", "success");
            navigate("/");
            setStudentName("");
            setStudentID("");
            setDegree("");
            setSpecialization("");
            setPassword("");
            setEmail("");
        } else (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Passowrds Not Matched!!",
            text: "Please enter your password again.",
            icon: "error",
            confirmButtonText: "OK"
        });
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "row",
                style: {
                    height: "60px"
                }
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                class: "container",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    class: "row mt-5 mb-5",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-2"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-8",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                class: "card ",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    class: "card-body",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                            class: "mb-4 text-center",
                                            children: "Sign Up"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                            onSubmit: handleSubmit,
                                            id: "form",
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputStudentName",
                                                                    children: "Student Name"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "text",
                                                                    class: "form-control",
                                                                    value: name,
                                                                    required: true,
                                                                    onChange: (e)=>{
                                                                        setStudentName(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputIdNumber",
                                                                    children: "Student ID"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "text",
                                                                    class: "form-control",
                                                                    // pattern="[E|I|B][N|T|M][0-9]{8}"
                                                                    // title="Enter Valid Student ID"
                                                                    value: idNumber,
                                                                    required: true,
                                                                    onChange: (e)=>{
                                                                        setStudentID(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputDegree",
                                                                    children: "Select Degree"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                    id: "inputState",
                                                                    value: degree,
                                                                    onChange: handleChangeDegree,
                                                                    required: true,
                                                                    class: "form-control",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            selected: true,
                                                                            children: "Choose..."
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Software Enginnering",
                                                                            children: "Software Engineering"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Information Technology",
                                                                            children: "Information Technology"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Cyber Sequrity",
                                                                            children: " Cyber Sequrity"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Data Science",
                                                                            children: " Data Science"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Electrical & Electronic Engineering",
                                                                            children: " Electrical & Electronic Engineering"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Civil Engineering",
                                                                            children: " Civil Engineering"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Buisness Management",
                                                                            children: " Buisness Management"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Other",
                                                                            children: " Other"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputSpecialization",
                                                                    children: "Select Specialization"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                    id: "inputState",
                                                                    value: specialization,
                                                                    onChange: handleChangeSpecialization,
                                                                    required: true,
                                                                    class: "form-control",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            selected: true,
                                                                            children: "Choose..."
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "BSC (hons) in Information Technology",
                                                                            children: "BSC (hons) in Information Technology"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "BSC (Computing)",
                                                                            children: "BSC (Computing)"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "BSE ENG (hons)",
                                                                            children: " BSE ENG (hons)"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "BBA(hons)",
                                                                            children: " BBA(hons)"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Other",
                                                                            children: " Other"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "form-row",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                        class: "col",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                for: "inputEmail",
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                type: "email",
                                                                class: "form-control",
                                                                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                                // title="Enter Valid E-mail address"
                                                                placeholder: "example@gamil.com",
                                                                value: email,
                                                                required: true,
                                                                onChange: (e)=>{
                                                                    setEmail(e.target.value);
                                                                }
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputPassword",
                                                                    children: "Password"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "password",
                                                                    class: "form-control",
                                                                    value: password,
                                                                    required: true,
                                                                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                                                    // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                                    onChange: (e)=>{
                                                                        setPassword(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputConfirmPassword",
                                                                    children: "Confirm Password"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "password",
                                                                    class: "form-control",
                                                                    value: confirmPassword,
                                                                    required: true,
                                                                    onChange: (e)=>{
                                                                        setConfirmPassword(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                    type: "submit",
                                                    class: "btn btn-primary mt-4",
                                                    style: {
                                                        width: "100%",
                                                        height: "40px"
                                                    },
                                                    disabled: loading ? true : false,
                                                    children: "Sign Up"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "custom-bottem mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    children: "Already a member? "
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "/",
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: "Sign In"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-2"
                        })
                    ]
                })
            })
        ]
    });
}
var $396e6e092ad378d9$export$2e2bcd8739ae039 = $396e6e092ad378d9$var$RegisterStudent;








function $ef7c2022d156b490$var$ViewStudents() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [students, setStudents] = (0, $ltMAx$react.useState)([]);
    const [noData, setNodata] = (0, $ltMAx$react.useState)(false);
    const [searchKeyword, setSearchKeyword] = (0, $ltMAx$react.useState)("");
    const filteredStudents = students.filter((student)=>{
        return student.idNumber.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    const deleteStudent = async (id, idNumber)=>{
        await (0, ($parcel$interopDefault($ltMAx$axios))).delete("https://af-group-project.herokuapp.com/api/v1/students/delete/" + id).then((res)=>{
            console.log(res);
        });
        await (0, ($parcel$interopDefault($ltMAx$axios))).delete("https://af-group-project.herokuapp.com/api/v1/users/deleteByUserID/" + idNumber).then((res)=>{
            console.log(res);
        });
        loadStudent();
    };
    const loadStudent = ()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/students/").then((res)=>{
            setStudents(res.data);
            console.log(res);
            if (res.data.length == 0) setNodata(true);
        }).catch((err)=>{
            console.log(err);
        });
    };
    (0, $ltMAx$react.useEffect)(()=>{
        function getStudents() {
            (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/students/").then((res)=>{
                setStudents(res.data);
                console.log(res);
                if (res.data.length == 0) setNodata(true);
            }).catch((err)=>{
                console.log(err);
            });
        }
        getStudents();
    }, [
        students
    ]);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                            className: "mt-5",
                            placeholder: "Search by StudentID",
                            style: {
                                width: "10vw",
                                marginLeft: "77%"
                            },
                            onChange: (e)=>{
                                setSearchKeyword(e.target.value);
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                            className: "table mt-5 container",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("thead", {
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Student ID "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Name "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Degree "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Specilization "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Update "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Delete "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                                    children: filteredStudents.map((student)=>{
                                        return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        student.idNumber,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        student.name,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        student.degree,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        student.specialization,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: student.email
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                        className: "btn btn-warning p-1",
                                                        onClick: ()=>{
                                                            navigate(`update/${student._id}`);
                                                        },
                                                        children: " UPDATE"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("button", {
                                                            className: "btn btn-danger p-1",
                                                            onClick: ()=>{
                                                                (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                                                                    title: "Warning!",
                                                                    text: "Do you want to delete the user?",
                                                                    icon: "warning",
                                                                    showCancelButton: true,
                                                                    confirmButtonText: "Ok",
                                                                    confirmButtonColor: "#C81E1E"
                                                                }).then((result)=>{
                                                                    if (result.isConfirmed) deleteStudent(student._id, student.idNumber);
                                                                });
                                                            },
                                                            children: [
                                                                " ",
                                                                "DELETE",
                                                                " "
                                                            ]
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        });
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
var $ef7c2022d156b490$export$2e2bcd8739ae039 = $ef7c2022d156b490$var$ViewStudents;









function $05b2a9a83cc55105$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                class: "sidebar-wrapper",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("nav", {
                    id: "sidebar",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                        class: "list-unstyled components",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/student",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fas fa-tachometer-alt"
                                        }),
                                        " Dashboard"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/student/group/topic",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fa-solid fa-file-circle-plus"
                                        }),
                                        "Topic Submition"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/allocatepanelmemberslist",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fa-solid fa-file-circle-plus"
                                        }),
                                        "Panel Allocation"
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}



function $873a38ac38330c7c$var$StudentHome() {
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    const [navigateLink1, setNavigateLink] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
            let userObectID = (0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt).userObectID;
            let navigateLink = "/students/view/" + userObectID;
            setNavigateLink(navigateLink);
        } catch (error) {}
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            class: "row row-cols-1 row-cols-md-2 mt-5",
                            children: [
                                user.groupID ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactjsxruntime.Fragment), {
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col mb-4",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "card text-white bg-dark mb-3",
                                            style: {
                                                height: "240px",
                                                width: "400px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-header text-center",
                                                    children: "Go to my group"
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-body",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "/student/group",
                                                        className: "custom-size",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-user-group"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactjsxruntime.Fragment), {
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col mb-4",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "card text-white bg-dark mb-3",
                                            style: {
                                                height: "240px",
                                                width: "400px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-header text-center",
                                                    children: "Create Student Group"
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-body",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "/student/createGroup",
                                                        className: "custom-size",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-user-group"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "My Profile"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: navigateLink1,
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-file-circle-plus"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "ChangePassword"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-user-gear"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Dummy"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fas fa-clipboard-list"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
var $873a38ac38330c7c$export$2e2bcd8739ae039 = $873a38ac38330c7c$var$StudentHome;









function $b90a68f5b8e903f1$var$ViewStudentProfile() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [name, setStudentName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setStudentID] = (0, $ltMAx$react.useState)("");
    const [degree, setDegree] = (0, $ltMAx$react.useState)("");
    const [specialization, setSpecialization] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const role = "student";
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(paramID);
        navigateLink = "/students/update/" + paramID.id;
        navigate(navigateLink);
        setStudentName("");
        setStudentID("");
        setDegree("");
        setSpecialization("");
        setPassword("");
        setEmail("");
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/students/get/" + paramID.id).then((res)=>{
            // console.log(res.data);
            setStudentName(res.data.name);
            setStudentID(res.data.idNumber);
            setDegree(res.data.degree);
            setSpecialization(res.data.specialization);
            setPassword(res.data.password);
            setEmail(res.data.email);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "60px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "My Profile"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        id: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputName",
                                                                                children: "Student Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: name,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputIdNumber",
                                                                                children: "Student ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: idNumber,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputDegree",
                                                                                children: "Degree"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: degree,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputSpecialization",
                                                                                children: "Specialization"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: specialization,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputPassword",
                                                                                children: "Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                value: password,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputLastName",
                                                                                children: "Email"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "email",
                                                                                class: "form-control",
                                                                                value: email,
                                                                                readOnly: true,
                                                                                required: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "UPDATE"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "custom-bottem mt-2"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $b90a68f5b8e903f1$export$2e2bcd8739ae039 = $b90a68f5b8e903f1$var$ViewStudentProfile;










function $4e7acb7b7b7af57a$var$UpdateStudentProfile() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [name, setStudentName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setStudentID] = (0, $ltMAx$react.useState)("");
    const [degree, setDegree] = (0, $ltMAx$react.useState)("");
    const [specialization, setSpecialization] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleChangeDegree = (event)=>{
        setDegree(event.target.value);
    };
    const handleChangeSpecialization = (event)=>{
        setSpecialization(event.target.value);
    };
    const role = "student";
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newStudent = {
            name: name,
            idNumber: idNumber,
            degree: degree,
            specialization: specialization,
            email: email
        };
        (0, ($parcel$interopDefault($ltMAx$axios))).put("https://af-group-project.herokuapp.com/api/v1/students/update/" + paramID.id, newStudent).then((res)=>{
            console.log(res);
            console.log("Student Updated!!");
            setLoading(false);
            setShowText(true);
        }).catch((err)=>{
            alert(err);
        });
        (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Update Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
        navigate("/student");
        setStudentName("");
        setStudentID("");
        setDegree("");
        setSpecialization("");
        setPassword("");
        setEmail("");
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/students/get/" + paramID.id).then((res)=>{
            console.log(res.data);
            setStudentName(res.data.name);
            setStudentID(res.data.idNumber);
            setDegree(res.data.degree);
            setSpecialization(res.data.specialization);
            setPassword(res.data.password);
            setConfirmPassword(res.data.password);
            setEmail(res.data.email);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "60px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "Update My Profile"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        id: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputName",
                                                                                children: "Student Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: name,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setStudentName(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputIdNumber",
                                                                                children: "Student ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                // pattern="[E|I|B][N|T|M][0-9]{8}"
                                                                                // title="Enter Valid Student ID"
                                                                                value: idNumber,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setStudentID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputDegree",
                                                                                children: "Select Degree"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: degree,
                                                                                onChange: handleChangeDegree,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Software Enginnering",
                                                                                        children: "Software Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Information Technology",
                                                                                        children: "Information Technology"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Cyber Sequrity",
                                                                                        children: " Cyber Sequrity"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Data Science",
                                                                                        children: " Data Science"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Electrical & Electronic Engineering",
                                                                                        children: " Electrical & Electronic Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Civil Engineering",
                                                                                        children: " Civil Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Buisness Management",
                                                                                        children: " Buisness Management"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Other",
                                                                                        children: " Other"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputSpecialization",
                                                                                children: "Select Specialization"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: specialization,
                                                                                onChange: handleChangeSpecialization,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "BSC (hons) in Information Technology",
                                                                                        children: "BSC (hons) in Information Technology"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "BSC (Computing)",
                                                                                        children: "BSC (Computing)"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "BSE ENG (hons)",
                                                                                        children: " BSE ENG (hons)"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "BBA(hons)",
                                                                                        children: " BBA(hons)"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Other",
                                                                                        children: " Other"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputEmail",
                                                                            children: "Email"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "email",
                                                                            class: "form-control",
                                                                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                                                                            // title="Enter Valid E-mail address"
                                                                            placeholder: "example@gmail.com",
                                                                            value: email,
                                                                            required: true,
                                                                            onChange: (e)=>{
                                                                                setEmail(e.target.value);
                                                                            }
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputPassword",
                                                                                children: "Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                                                // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                                                value: password,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setPassword(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputConfirmPassword",
                                                                                children: "Confirm Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                value: confirmPassword,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setConfirmPassword(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "UPDATE"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "custom-bottem mt-2"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $4e7acb7b7b7af57a$export$2e2bcd8739ae039 = $4e7acb7b7b7af57a$var$UpdateStudentProfile;





function $8803068ae3a5d953$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "80px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container body ",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-3"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-6",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "Change Password"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "newPassword",
                                                                        children: "New Password"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "password",
                                                                        class: "form-control",
                                                                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                                                        // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                                        id: "newPassword",
                                                                        // value={userID}
                                                                        name: "newPassword",
                                                                        // onChange={(e) => {
                                                                        //     setUserID(e.target.value);
                                                                        // }}
                                                                        required: true,
                                                                        "aria-describedby": "userHelp"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "confirmPassword",
                                                                        children: "Confirm Password"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "password",
                                                                        class: "form-control",
                                                                        required: true,
                                                                        // value={password}
                                                                        name: "confirmPassword"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary custom-btn-signIn",
                                                                children: "UPDATE PASSWORD"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-3"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}








function $2489eca03fbcd870$var$ViewStaff() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [staff, setStaff] = (0, $ltMAx$react.useState)([]);
    const [noData, setNodata] = (0, $ltMAx$react.useState)(false);
    const [searchKeyword, setSearchKeyword] = (0, $ltMAx$react.useState)("");
    const filteredStaffMembers = staff.filter((staffMember)=>{
        return staffMember.idNumber.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    const deletestaff = async (id, idNumber)=>{
        await (0, ($parcel$interopDefault($ltMAx$axios))).delete("https://af-group-project.herokuapp.com/api/v1/staff/delete/" + id).then((res)=>{
            console.log(res);
        });
        await (0, ($parcel$interopDefault($ltMAx$axios))).delete("https://af-group-project.herokuapp.com/api/v1/users/deleteByUserID/" + idNumber).then((res)=>{
            console.log(res);
        });
        loadStaffData();
    };
    const loadStaffData = ()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/").then((res)=>{
            setStaff(res.data);
            console.log(res);
            if (res.data.length == 0) setNodata(true);
        }).catch((err)=>{
            console.log(err);
        });
    };
    (0, $ltMAx$react.useEffect)(()=>{
        function getStaff() {
            (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/").then((res)=>{
                setStaff(res.data);
                console.log(res);
                if (res.data.length == 0) setNodata(true);
            }).catch((err)=>{
                console.log(err);
            });
        }
        getStaff();
    }, [
        staff
    ]);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                            className: "mt-5",
                            placeholder: "Search By Staff ID",
                            style: {
                                width: "10vw",
                                marginLeft: "82%"
                            },
                            onChange: (e)=>{
                                setSearchKeyword(e.target.value);
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                            className: "table container mt-5",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("thead", {
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Name "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Staff ID "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Department "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Faculty "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Research_Interest "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Staff Type "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Update "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Delete "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                                    children: filteredStaffMembers.map((member)=>{
                                        return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        member.name,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        member.idNumber,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        member.department,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        member.faculty,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        member.researchInterest,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        member.type,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: member.email
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        "  ",
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                            className: "btn btn-warning",
                                                            onClick: ()=>{
                                                                navigate(`update/${member._id}`);
                                                            },
                                                            children: "UPDATE"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                            className: "btn btn-danger",
                                                            onClick: ()=>{
                                                                (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                                                                    title: "Warning!",
                                                                    text: "Do you want to delete the user?",
                                                                    icon: "warning",
                                                                    showCancelButton: true,
                                                                    confirmButtonText: "Ok",
                                                                    confirmButtonColor: "#C81E1E"
                                                                }).then((result)=>{
                                                                    if (result.isConfirmed) deletestaff(member._id, member.idNumber);
                                                                });
                                                            },
                                                            children: "DELETE"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }, member._id);
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
var $2489eca03fbcd870$export$2e2bcd8739ae039 = $2489eca03fbcd870$var$ViewStaff;








function $a9c57da589f2f5ed$var$RegisterStaff() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const [name, setName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setID] = (0, $ltMAx$react.useState)("");
    const [faculty, setFaculty] = (0, $ltMAx$react.useState)("");
    const [department, setDepartment] = (0, $ltMAx$react.useState)("");
    const [type, setType] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [researchInterest, setresearchInterest] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [role, setRole] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleChangeFaculty = (event)=>{
        setFaculty(event.target.value);
    };
    const handleDepartment = (event)=>{
        setDepartment(event.target.value);
    };
    const handleChangeUserType = (event)=>{
        setType(event.target.value);
        setRole(event.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (password === confirmPassword) {
            setShowText(false);
            setLoading(true);
            const newStaff = {
                name: name,
                idNumber: idNumber,
                faculty: faculty,
                department: department,
                researchInterest: researchInterest,
                type: type,
                email: email
            };
            const userID = idNumber;
            const newLogin = {
                userID: userID,
                password: password,
                role: role
            };
            (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/api/v1/staff/registerStaffMember", newStaff).then((res)=>{
                console.log(res);
                console.log("Staff Member Added!!");
                setLoading(false);
                setShowText(true);
            }).catch((err)=>{
                alert(err);
            });
            (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/api/v1/users/add/", newLogin).then((res)=>{
                console.log(res);
                console.log("Staff Login Added!!");
                setLoading(false);
                setShowText(true);
            }).catch((err)=>{
                alert(err);
            });
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Registration Succesfull!", "Click ok to Continue", "success");
            navigate("/");
            setName("");
            setID("");
            setFaculty("");
            setDepartment("");
            setPassword("");
            setType("");
            setresearchInterest("");
            setEmail("");
        } else (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Incorrect Password!!",
            text: "Please enter your password again.",
            icon: "error",
            confirmButtonText: "OK"
        });
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "row",
                style: {
                    height: "15px"
                }
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                class: "container",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    class: "row mt-5 mb-5",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-2"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-8",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                class: "card ",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    class: "card-body",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                            class: "mb-4 text-center",
                                            children: "Sign Up"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                            onSubmit: handleSubmit,
                                            encType: "multipart/form-data",
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputName",
                                                                    children: "Name"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "text",
                                                                    class: "form-control",
                                                                    value: name,
                                                                    required: true,
                                                                    onChange: (e)=>{
                                                                        setName(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputIdNumber",
                                                                    children: "Staff ID"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "text",
                                                                    class: "form-control",
                                                                    // pattern="[E|I|B][N|T|M][0-9]{8}"
                                                                    // title="Enter Valid Staff ID"
                                                                    value: idNumber,
                                                                    required: true,
                                                                    onChange: (e)=>{
                                                                        setID(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-row mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputFaculty",
                                                                    children: "Select Faculty"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                    id: "inputState",
                                                                    value: faculty,
                                                                    onChange: handleChangeFaculty,
                                                                    required: true,
                                                                    class: "form-control",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            selected: true,
                                                                            children: "Choose..."
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Faculty of Computing",
                                                                            children: "Faculty of Computing"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Faculty of Engineering",
                                                                            children: "Faculty of Engineering"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Faculty of Buisness",
                                                                            children: " Faculty of Buisness"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputDepartment",
                                                                    children: " Select Department"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                    id: "inputState",
                                                                    value: department,
                                                                    onChange: handleDepartment,
                                                                    required: true,
                                                                    class: "form-control",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            selected: true,
                                                                            children: "Choose..."
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Computer Science and Software Engineering",
                                                                            children: "Computer Science and Software Engineering"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Cyber Sequrity",
                                                                            children: "Cyber Sequrity"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Information Technology",
                                                                            children: "Information Technology"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Data Science",
                                                                            children: "Data Science"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Electrical & Electronic Engineeringy",
                                                                            children: "Electrical & Electronic Engineering"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Civil Engineeringy",
                                                                            children: "Civil Engineering"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Buisness",
                                                                            children: "Buisness"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "Other",
                                                                            children: "Other"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-row mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "form-group col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputStaffType",
                                                                    children: "Select Staff Type"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                    id: "inputState",
                                                                    value: type,
                                                                    onChange: handleChangeUserType,
                                                                    required: true,
                                                                    defaultValue: "supervisor",
                                                                    class: "form-control",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            selected: true,
                                                                            children: "Choose..."
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "supervisor",
                                                                            children: "Supervisor"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "supervisor",
                                                                            children: "Co-Supervisor"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                            value: "panel_member",
                                                                            children: "Panel Member"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "form-group col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputResearchInterest",
                                                                    children: "research Interest"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "text",
                                                                    class: "form-control",
                                                                    value: researchInterest,
                                                                    required: true,
                                                                    onChange: (e)=>{
                                                                        setresearchInterest(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "form-row",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                        class: "col",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                for: "inputName",
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                type: "email",
                                                                class: "form-control",
                                                                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                                                                placeholder: "example@gamil.com",
                                                                // title="Enter Valid E-mail address"
                                                                value: email,
                                                                required: true,
                                                                onChange: (e)=>{
                                                                    setEmail(e.target.value);
                                                                }
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    class: "form-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputPassword",
                                                                    children: "Password"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "password",
                                                                    class: "form-control",
                                                                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                                                    // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                                    value: password,
                                                                    required: true,
                                                                    onChange: (e)=>{
                                                                        setPassword(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            class: "col",
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                    for: "inputConfirmPassword",
                                                                    children: "Confirm Password"
                                                                }),
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                    type: "password",
                                                                    class: "form-control",
                                                                    value: confirmPassword,
                                                                    required: true,
                                                                    onChange: (e)=>{
                                                                        setConfirmPassword(e.target.value);
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                    type: "submit",
                                                    class: "btn btn-primary mt-4",
                                                    style: {
                                                        width: "100%",
                                                        height: "40px"
                                                    },
                                                    disabled: loading ? true : false,
                                                    children: "Sign Up"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "custom-bottem mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    children: "Already a member? "
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "/",
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: "Sign In"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "col-md-2"
                        })
                    ]
                })
            })
        ]
    });
}
var $a9c57da589f2f5ed$export$2e2bcd8739ae039 = $a9c57da589f2f5ed$var$RegisterStaff;









function $0f24c7f55e5af116$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                class: "sidebar-wrapper",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("nav", {
                    id: "sidebar",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                        class: "list-unstyled components",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/supervisor",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fas fa-tachometer-alt"
                                        }),
                                        " Dashboard"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fa-solid fa-file"
                                        }),
                                        " View Topic"
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}


function $ae59dd8834b8a940$var$SupervisorHome() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    //checking whether the user is logged in
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            if (!jwt) navigate("/unauthorized");
        } catch (error) {}
    }, []);
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
        } catch (error) {}
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0f24c7f55e5af116$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            class: "row row-cols-1 row-cols-md-2 mt-5",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "View Topics"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-file"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Topic Submition"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-file-circle-plus"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Change Password"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-user-gear"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Dummy"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fas fa-clipboard-list"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
var $ae59dd8834b8a940$export$2e2bcd8739ae039 = $ae59dd8834b8a940$var$SupervisorHome;









function $4fcf3ef09d9562e7$var$ViewSupervisorProfile() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [name, setName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setIdNumber] = (0, $ltMAx$react.useState)("");
    const [faculty, setFaculty] = (0, $ltMAx$react.useState)("");
    const [department, setDepartment] = (0, $ltMAx$react.useState)("");
    const [researchInterest, setResearchInterest] = (0, $ltMAx$react.useState)(false);
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(paramID);
        navigateLink = "/staff/update/" + paramID.id;
        navigate(navigateLink);
        setName("");
        setIdNumber("");
        setFaculty("");
        setDepartment("");
        setResearchInterest("");
        setPassword("");
        setEmail("");
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/get/" + paramID.id).then((res)=>{
            // console.log(res.data);
            setName(res.data.name);
            setIdNumber(res.data.idNumber);
            setFaculty(res.data.faculty);
            setDepartment(res.data.department);
            setResearchInterest(res.data.researchInterest);
            setPassword(res.data.password);
            setEmail(res.data.email);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0f24c7f55e5af116$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "60px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "My Profile"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        id: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputName",
                                                                                children: "Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: name,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputIdNumber",
                                                                                children: "Staff ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: idNumber,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFaculty",
                                                                                children: "Faculty"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: faculty,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputDepartment",
                                                                                children: "Department"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: department,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputEmail",
                                                                            children: "Email"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "email",
                                                                            class: "form-control",
                                                                            value: email,
                                                                            required: true,
                                                                            readOnly: true
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputResearchInterst",
                                                                                children: "Research Interest"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: researchInterest,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputPassword",
                                                                                children: "Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                value: password,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "UPDATE"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "custom-bottem mt-2"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $4fcf3ef09d9562e7$export$2e2bcd8739ae039 = $4fcf3ef09d9562e7$var$ViewSupervisorProfile;










function $bd0eeab52d846dfa$var$UpdateSupervisorProfile() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [name, setName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setID] = (0, $ltMAx$react.useState)("");
    const [faculty, setFaculty] = (0, $ltMAx$react.useState)("");
    const [department, setDepartment] = (0, $ltMAx$react.useState)("");
    const [type, setType] = (0, $ltMAx$react.useState)("");
    const [researchInterest, setresearchInterest] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [role, setRole] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleChangeFaculty = (event)=>{
        setFaculty(event.target.value);
    };
    const handleDepartment = (event)=>{
        setDepartment(event.target.value);
    };
    const handleChangeUserType = (event)=>{
        setType(event.target.value);
        setRole(event.target.value);
    };
    const handleChangeResearchInterest = (event)=>{
        setresearchInterest(event.target.value);
    };
    const handleChangePassword = (event)=>{
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value);
    };
    const handleChangeEmail = (event)=>{
        setEmail(event.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setShowText(false);
        setLoading(true);
        const newStaff = {
            name: name,
            idNumber: idNumber,
            faculty: faculty,
            department: department,
            type: type,
            researchInterest: researchInterest,
            password: password,
            confirmPassword: confirmPassword,
            email: email
        };
        const userID = idNumber;
        (0, ($parcel$interopDefault($ltMAx$axios))).put("https://af-group-project.herokuapp.com/api/v1/staff/update/" + paramID.id, newStaff).then((res)=>{
            console.log(res);
            console.log("Update Successfuly!!");
            setLoading(false);
            setShowText(true);
        }).catch((err)=>{
            alert(err);
        });
        setName("");
        setID("");
        setFaculty("");
        setDepartment("");
        setType("");
        setresearchInterest("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Update Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then((value)=>{
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire(window.location = "/supervisor");
        });
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/get/" + paramID.id).then((res)=>{
            setName(res.data.name);
            setID(res.data.idNumber);
            setFaculty(res.data.faculty);
            setDepartment(res.data.department);
            setType(res.data.type);
            setresearchInterest(res.data.researchInterest);
            setPassword(res.data.password);
            setConfirmPassword(res.data.confirmPassword);
            setEmail(res.data.email);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0f24c7f55e5af116$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "10px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "Update My Profile"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        encType: "multipart/form-data",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputName",
                                                                                children: "Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: name
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputIdNumber",
                                                                                children: "Staff ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                // pattern="[E|I|B][N|T|M][0-9]{8}"
                                                                                // title="Enter Valid Staff ID"
                                                                                value: idNumber
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFaculty",
                                                                                children: "Select Faculty"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: faculty,
                                                                                onChange: handleChangeFaculty,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Computing",
                                                                                        children: "Faculty of Computing"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Engineering",
                                                                                        children: "Faculty of Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Buisness",
                                                                                        children: " Faculty of Buisness"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputDepartment",
                                                                                children: " Select Department"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: department,
                                                                                onChange: handleDepartment,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Computer Science and Software Engineering",
                                                                                        children: "Computer Science and Software Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Cyber Sequrity",
                                                                                        children: "Cyber Sequrity"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Information Technology",
                                                                                        children: "Information Technology"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Data Science",
                                                                                        children: "Data Science"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Electrical & Electronic Engineeringy",
                                                                                        children: "Electrical & Electronic Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Civil Engineeringy",
                                                                                        children: "Civil Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Buisness",
                                                                                        children: "Buisness"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Other",
                                                                                        children: "Other"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputStaffType",
                                                                                children: "Select Staff Type"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: type,
                                                                                onChange: handleChangeUserType,
                                                                                required: true,
                                                                                defaultValue: "supervisor",
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "supervisor",
                                                                                        children: "Supervisor"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "supervisor",
                                                                                        children: "Co-Supervisor"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "panel_member",
                                                                                        children: "Panel Member"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputResearchInterest",
                                                                                children: "research Interest"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: researchInterest,
                                                                                onChange: handleChangeResearchInterest
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row mt-2",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputEmail",
                                                                            children: "Email"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "email",
                                                                            class: "form-control",
                                                                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                                                                            placeholder: "example@gamil.com",
                                                                            // title="Enter Valid E-mail address"
                                                                            value: email,
                                                                            onChange: handleChangeEmail
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputPassword",
                                                                                children: "Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                                                                // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                                                value: password,
                                                                                onChange: handleChangePassword
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputConfirmPassword",
                                                                                children: "Confirm Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                value: confirmPassword,
                                                                                onChange: handleChangeConfirmPassword
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "UPDATE"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "custom-bottem mt-2"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $bd0eeab52d846dfa$export$2e2bcd8739ae039 = $bd0eeab52d846dfa$var$UpdateSupervisorProfile;





function $578020a1b0c8b74f$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0f24c7f55e5af116$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "80px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container body ",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-3"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-6",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "Change Password"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "newPassword",
                                                                        children: "New Password"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "password",
                                                                        class: "form-control",
                                                                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                                                        // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                                        id: "newPassword",
                                                                        // value={userID}
                                                                        name: "newPassword",
                                                                        // onChange={(e) => {
                                                                        //     setUserID(e.target.value);
                                                                        // }}
                                                                        required: true,
                                                                        "aria-describedby": "userHelp"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "confirmPassword",
                                                                        children: "Confirm Password"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "password",
                                                                        class: "form-control",
                                                                        required: true,
                                                                        // value={password}
                                                                        name: "confirmPassword"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary custom-btn-signIn",
                                                                children: "UPDATE PASSWORD"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-3"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}









function $017f251b233420e0$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                class: "sidebar-wrapper",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("nav", {
                    id: "sidebar",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                        class: "list-unstyled components",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/panelMember",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fas fa-tachometer-alt"
                                        }),
                                        " Dashboard"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("a", {
                                    href: "/list",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            class: "fa-solid fa-file"
                                        }),
                                        " View Topic"
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}


function $6d8d736f0446d225$var$PanelMemberHome() {
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    const [navigateLink1, setNavigateLink] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
            let userObectID = (0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt).userObectID;
            let navigateLink = "/staff/view/panelMember/" + userObectID;
            setNavigateLink(navigateLink);
        } catch (error) {}
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $017f251b233420e0$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            class: "row row-cols-1 row-cols-md-2 mt-5",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "View Topics"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "/list",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-file"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "My Profile"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: navigateLink1,
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-file-circle-plus"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Change Password"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fa-solid fa-user-gear"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "col mb-4",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card text-white bg-dark mb-3",
                                        style: {
                                            height: "240px",
                                            width: "400px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-header text-center",
                                                children: "Dummy"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                class: "card-body",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                    href: "",
                                                    className: "custom-size",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                        class: "fas fa-clipboard-list"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
var $6d8d736f0446d225$export$2e2bcd8739ae039 = $6d8d736f0446d225$var$PanelMemberHome;










function $3d55b12a99d7f69d$export$2e2bcd8739ae039() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [name, setName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setIdNumber] = (0, $ltMAx$react.useState)("");
    const [faculty, setFaculty] = (0, $ltMAx$react.useState)("");
    const [department, setDepartment] = (0, $ltMAx$react.useState)("");
    const [researchInterest, setResearchInterest] = (0, $ltMAx$react.useState)(false);
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(paramID);
        navigateLink = "/staff/update/panelMember/" + paramID.id;
        navigate(navigateLink);
        setName("");
        setIdNumber("");
        setFaculty("");
        setDepartment("");
        setResearchInterest("");
        setPassword("");
        setEmail("");
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/get/" + paramID.id).then((res)=>{
            // console.log(res.data);
            setName(res.data.name);
            setIdNumber(res.data.idNumber);
            setFaculty(res.data.faculty);
            setDepartment(res.data.department);
            setResearchInterest(res.data.researchInterest);
            setPassword(res.data.password);
            setEmail(res.data.email);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $017f251b233420e0$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "60px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "My Profile"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        id: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputName",
                                                                                children: "Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: name,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputIdNumber",
                                                                                children: "Staff ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: idNumber,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFaculty",
                                                                                children: "Faculty"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: faculty,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputDepartment",
                                                                                children: "Department"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: department,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputEmail",
                                                                            children: "Email"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "email",
                                                                            class: "form-control",
                                                                            value: email,
                                                                            required: true,
                                                                            readOnly: true
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputResearchInterst",
                                                                                children: "Research Interest"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: researchInterest,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputPassword",
                                                                                children: "Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                value: password,
                                                                                required: true,
                                                                                readOnly: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "UPDATE"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "custom-bottem mt-2"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}










function $932c8d694d6356fe$var$UpdatePanelMemberProfile() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [name, setName] = (0, $ltMAx$react.useState)("");
    const [idNumber, setID] = (0, $ltMAx$react.useState)("");
    const [faculty, setFaculty] = (0, $ltMAx$react.useState)("");
    const [department, setDepartment] = (0, $ltMAx$react.useState)("");
    const [type, setType] = (0, $ltMAx$react.useState)("");
    const [researchInterest, setresearchInterest] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const [showText, setShowText] = (0, $ltMAx$react.useState)(false);
    const [role, setRole] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleChangeFaculty = (event)=>{
        setFaculty(event.target.value);
    };
    const handleDepartment = (event)=>{
        setDepartment(event.target.value);
    };
    const handleChangeUserType = (event)=>{
        setType(event.target.value);
        setRole(event.target.value);
    };
    const handleChangeResearchInterest = (event)=>{
        setresearchInterest(event.target.value);
    };
    const handleChangePassword = (event)=>{
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value);
    };
    const handleChangeEmail = (event)=>{
        setEmail(event.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setShowText(false);
        setLoading(true);
        const newStaff = {
            name: name,
            idNumber: idNumber,
            faculty: faculty,
            department: department,
            type: type,
            researchInterest: researchInterest,
            password: password,
            confirmPassword: confirmPassword,
            email: email
        };
        const userID = idNumber;
        (0, ($parcel$interopDefault($ltMAx$axios))).put("https://af-group-project.herokuapp.com/api/v1/staff/update/" + paramID.id, newStaff).then((res)=>{
            console.log(res);
            console.log("Update Successfuly!!");
            setLoading(false);
            setShowText(true);
        }).catch((err)=>{
            alert(err);
        });
        setName("");
        setID("");
        setFaculty("");
        setDepartment("");
        setType("");
        setresearchInterest("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Update Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then((value)=>{
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire(window.location = "/panelMember");
        });
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/get/" + paramID.id).then((res)=>{
            setName(res.data.name);
            setID(res.data.idNumber);
            setFaculty(res.data.faculty);
            setDepartment(res.data.department);
            setType(res.data.type);
            setresearchInterest(res.data.researchInterest);
            setPassword(res.data.password);
            setConfirmPassword(res.data.confirmPassword);
            setEmail(res.data.email);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $017f251b233420e0$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "10px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "Update My Profile"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        encType: "multipart/form-data",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputName",
                                                                                children: "Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: name
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputIdNumber",
                                                                                children: "Staff ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                // pattern="[E|I|B][N|T|M][0-9]{8}"
                                                                                // title="Enter Valid Staff ID"
                                                                                value: idNumber
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFaculty",
                                                                                children: "Select Faculty"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: faculty,
                                                                                onChange: handleChangeFaculty,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Computing",
                                                                                        children: "Faculty of Computing"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Engineering",
                                                                                        children: "Faculty of Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Faculty of Buisness",
                                                                                        children: " Faculty of Buisness"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputDepartment",
                                                                                children: " Select Department"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: department,
                                                                                onChange: handleDepartment,
                                                                                required: true,
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Computer Science and Software Engineering",
                                                                                        children: "Computer Science and Software Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Cyber Sequrity",
                                                                                        children: "Cyber Sequrity"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Information Technology",
                                                                                        children: "Information Technology"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Data Science",
                                                                                        children: "Data Science"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Electrical & Electronic Engineeringy",
                                                                                        children: "Electrical & Electronic Engineeringy"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Civil Engineeringy",
                                                                                        children: "Civil Engineeringy"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Buisness",
                                                                                        children: "Buisness"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "Other",
                                                                                        children: "Other"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputStaffType",
                                                                                children: "Select Staff Type"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                                                                id: "inputState",
                                                                                value: type,
                                                                                onChange: handleChangeUserType,
                                                                                required: true,
                                                                                defaultValue: "supervisor",
                                                                                class: "form-control",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        selected: true,
                                                                                        children: "Choose..."
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "supervisor",
                                                                                        children: "Supervisor"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "supervisor",
                                                                                        children: "Co-Supervisor"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                                                        value: "panel_member",
                                                                                        children: "Panel Member"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputResearchInterest",
                                                                                children: "research Interest"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: researchInterest,
                                                                                onChange: handleChangeResearchInterest
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row mt-2",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputEmail",
                                                                            children: "Email"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "email",
                                                                            class: "form-control",
                                                                            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2, 4}$",
                                                                            placeholder: "example@gamil.com",
                                                                            title: "Enter Valid E-mail address",
                                                                            value: email,
                                                                            onChange: handleChangeEmail
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputPassword",
                                                                                children: "Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                                                                // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                                                value: password,
                                                                                onChange: handleChangePassword
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputConfirmPassword",
                                                                                children: "Confirm Password"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "password",
                                                                                class: "form-control",
                                                                                value: confirmPassword,
                                                                                onChange: handleChangeConfirmPassword
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "UPDATE"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                        class: "custom-bottem mt-2"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $932c8d694d6356fe$export$2e2bcd8739ae039 = $932c8d694d6356fe$var$UpdatePanelMemberProfile;





function $3f3cec6fe1c69212$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $017f251b233420e0$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "80px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container body ",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-3"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-6",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "Change Password"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "newPassword",
                                                                        children: "New Password"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "password",
                                                                        class: "form-control",
                                                                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                                                        // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                                        id: "newPassword",
                                                                        // value={userID}
                                                                        name: "newPassword",
                                                                        // onChange={(e) => {
                                                                        //     setUserID(e.target.value);
                                                                        // }}
                                                                        required: true,
                                                                        "aria-describedby": "userHelp"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                        for: "confirmPassword",
                                                                        children: "Confirm Password"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                        type: "password",
                                                                        class: "form-control",
                                                                        required: true,
                                                                        // value={password}
                                                                        name: "confirmPassword"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary custom-btn-signIn",
                                                                children: "UPDATE PASSWORD"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-3"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}








function $0173ffbdc74f3a5b$var$ViewGroups() {
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [groups, setGroups] = (0, $ltMAx$react.useState)([]);
    const [noData, setNodata] = (0, $ltMAx$react.useState)(false);
    const [searchKeyword, setSearchKeyword] = (0, $ltMAx$react.useState)("");
    const filteredGroup = groups.filter((groupName)=>{
        return groupName.groupName.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    // const register = () => {
    //     navigate("/registerGroup");
    // };
    const deleteGroup = async (id, idNumber)=>{
        await (0, ($parcel$interopDefault($ltMAx$axios))).delete("https://af-group-project.herokuapp.com/api/v1/groups/delete/" + id).then((res)=>{
            console.log(res);
        });
        await (0, ($parcel$interopDefault($ltMAx$axios))).delete("https://af-group-project.herokuapp.com/api/v1/users/deleteByUserID/" + idNumber).then((res)=>{
            console.log(res);
        });
        loadGroup();
    };
    const loadGroup = ()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/groups/").then((res)=>{
            setGroups(res.data);
            if (res.data.length == 0) setNodata(true);
        }).catch((err)=>{
            console.log(err);
        });
    };
    (0, $ltMAx$react.useEffect)(()=>{
        async function getGroups() {
            const { data: data  } = await (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/groups");
            setGroups(data);
        // axios
        //     .get("http://localhost:5000/api/v1/groups/")
        //     .then((res) => {
        //         setGroups(res.data);
        //         console.log(res);
        //         if (res.data.length == 0) {
        //             setNodata(true);
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        }
        getGroups();
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                            className: "mt-5",
                            placeholder: "Search By group Name",
                            style: {
                                width: "15vw",
                                marginLeft: "75%"
                            },
                            onChange: (e)=>{
                                setSearchKeyword(e.target.value);
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                            className: "table container mt-5",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("thead", {
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: "Group ID"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: "Group Name"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: "First Member"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: "Second Member"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: "Third Member"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: "Fourth Member"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Update "
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                            children: " Delete "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                                    children: filteredGroup.map((group)=>{
                                        return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: group._id
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: group.groupName
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: group.firstMember.idNumber
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: group.secondMember.idNumber
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: group.thirdMember.idNumber
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: group.fourthMember.idNumber
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                        className: "btn btn-warning",
                                                        onClick: ()=>{
                                                            navigate(`update/${group._id}`);
                                                        },
                                                        children: "UPDATE"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                        className: "btn btn-danger",
                                                        onClick: ()=>{
                                                            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                                                                title: "Warning!",
                                                                text: "Do you want to delete the group?",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonText: "Ok",
                                                                confirmButtonColor: "#C81E1E"
                                                            }).then((result)=>{
                                                                if (result.isConfirmed) deleteGroup(group._id, group.idNumber);
                                                            });
                                                        },
                                                        children: "DELETE"
                                                    })
                                                })
                                            ]
                                        }, group._id);
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
var $0173ffbdc74f3a5b$export$2e2bcd8739ae039 = $0173ffbdc74f3a5b$var$ViewGroups;








function $ac2ea9b3c587436e$var$UpdateGroup() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const paramID = (0, $ltMAx$reactrouterdom.useParams)("");
    const [groupName, setGroupName] = (0, $ltMAx$react.useState)("");
    const [firstMemberID, setFirstMemberID] = (0, $ltMAx$react.useState)("");
    const [secondMemberID, setSecondMemberID] = (0, $ltMAx$react.useState)("");
    const [thirdMemberID, setThirdMemberID] = (0, $ltMAx$react.useState)("");
    const [fourthMemberID, setFourthMemberID] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const role = "group";
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newGroup = {
            groupName: groupName,
            firstMemberID: firstMemberID,
            secondMemberID: secondMemberID,
            thirdMemberID: thirdMemberID,
            fourthMemberID: fourthMemberID
        };
        (0, ($parcel$interopDefault($ltMAx$axios))).put("https://af-group-project.herokuapp.com/api/v1/groups/update/" + paramID.id, newGroup).then((res)=>{
            console.log(res);
            console.log("Group Updated!!");
            setLoading(false);
        }).catch((err)=>{
            alert(err);
        });
        navigate("/admin/groups");
        setGroupName("");
        setFirstMemberID("");
        setSecondMemberID("");
        setThirdMemberID("");
        setFourthMemberID("");
    };
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/groups/get/" + paramID.id).then((res)=>{
            setGroupName(res.data.groupName);
            setFirstMemberID(res.data.firstMember.idNumber);
            setSecondMemberID(res.data.secondMember.idNumber);
            setThirdMemberID(res.data.thirdMember.idNumber);
            setFourthMemberID(res.data.fourthMember.idNumber);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "50px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4",
                                                        children: "Update Group"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        id: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputGroupName",
                                                                            children: "Group Name"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "text",
                                                                            class: "form-control",
                                                                            value: groupName,
                                                                            required: true,
                                                                            onChange: (e)=>{
                                                                                setGroupName(e.target.value);
                                                                            }
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFirstMemberID",
                                                                                children: "Member 1 ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: firstMemberID,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setFirstMemberID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputSecondMemberID",
                                                                                children: "Member 2 ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: secondMemberID,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setSecondMemberID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputThirdMemberID",
                                                                                children: "Member 3 ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: thirdMemberID,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setThirdMemberID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFourthMemberID",
                                                                                children: "Member 4 ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: fourthMemberID,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setFourthMemberID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "Update Group"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $ac2ea9b3c587436e$export$2e2bcd8739ae039 = $ac2ea9b3c587436e$var$UpdateGroup;








function $6b84ed44db6d6193$var$CreateGroup() {
    const [loading, setLoading] = (0, $ltMAx$react.useState)(false);
    const [groupName, setGroupName] = (0, $ltMAx$react.useState)("");
    const [firstMemberID, setFirstMemberID] = (0, $ltMAx$react.useState)("");
    const [secondMemberID, setSecondMemberID] = (0, $ltMAx$react.useState)("");
    const [thirdMemberID, setThirdMemberID] = (0, $ltMAx$react.useState)("");
    const [fourthMemberID, setFourthMemberID] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        const newGroup = {
            groupName: groupName,
            firstMemberID: firstMemberID,
            secondMemberID: secondMemberID,
            thirdMemberID: thirdMemberID,
            fourthMemberID: fourthMemberID
        };
        (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/api/v1/groups/createGroup", newGroup).then((res)=>{
            setLoading(false);
        }).catch((err)=>{
            alert(err);
        });
        // Swal.fire("Registration Succesfull!", "Click ok to Continue", "success");
        (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Group Create Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then((value)=>{
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire(window.location = "/");
        });
        localStorage.clear();
        setGroupName("");
        setFirstMemberID("");
        setSecondMemberID("");
        setThirdMemberID("");
        setFourthMemberID("");
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-md-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            style: {
                                height: "60px"
                            }
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row mt-5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-8",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            class: "card ",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                                        class: "mb-4 text-center",
                                                        children: "Create a Group"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                                        onSubmit: handleSubmit,
                                                        id: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                                class: "form-row",
                                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                    class: "col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                            for: "inputGroupName",
                                                                            children: "Group Name"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                            type: "text",
                                                                            class: "form-control",
                                                                            value: groupName,
                                                                            required: true,
                                                                            onChange: (e)=>{
                                                                                setGroupName(e.target.value);
                                                                            }
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFirstMemberID",
                                                                                children: "Member 1 ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: firstMemberID,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setFirstMemberID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputSecondMemberID",
                                                                                children: "Member 2 ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: secondMemberID,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setSecondMemberID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                class: "form-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputThirdMemberID",
                                                                                children: "Member 3 ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: thirdMemberID,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setThirdMemberID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                        class: "col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                                                for: "inputFourthMemberID",
                                                                                children: "Member 4 ID"
                                                                            }),
                                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                                type: "text",
                                                                                class: "form-control",
                                                                                value: fourthMemberID,
                                                                                required: true,
                                                                                onChange: (e)=>{
                                                                                    setFourthMemberID(e.target.value);
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                                type: "submit",
                                                                class: "btn btn-primary mt-4",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "40px"
                                                                },
                                                                disabled: loading ? true : false,
                                                                children: "Create Group"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col-md-2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $6b84ed44db6d6193$export$2e2bcd8739ae039 = $6b84ed44db6d6193$var$CreateGroup;








function $3a6632a2afdea399$var$GroupHome() {
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
        } catch (error) {}
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h1", {
                                children: [
                                    "Your group is ",
                                    user.groupName
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                class: "row row-cols-1 row-cols-md-2 mt-5",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col mb-4",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "card text-white bg-dark mb-3",
                                            style: {
                                                height: "240px",
                                                width: "400px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-header text-center",
                                                    children: "Topic Submission"
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-body",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "/student/group/topic",
                                                        className: "custom-size",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-user-group"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col mb-4",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "card text-white bg-dark mb-3",
                                            style: {
                                                height: "240px",
                                                width: "400px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-header text-center",
                                                    children: "Download Templates and Upload Answers"
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-body",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "/student/group/templates",
                                                        className: "custom-size",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-user-group"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col mb-4",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "card text-white bg-dark mb-3",
                                            style: {
                                                height: "240px",
                                                width: "400px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-header text-center",
                                                    children: "Our Submissions"
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-body",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "/student/group/submissions/",
                                                        className: "custom-size",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-file-circle-plus"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col mb-4",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "card text-white bg-dark mb-3",
                                            style: {
                                                height: "240px",
                                                width: "400px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-header text-center",
                                                    children: "Dummy"
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-body",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "",
                                                        className: "custom-size",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fa-solid fa-user-gear"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        class: "col mb-4",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            class: "card text-white bg-dark mb-3",
                                            style: {
                                                height: "240px",
                                                width: "400px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-header text-center",
                                                    children: "Dummy"
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                    class: "card-body",
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                        href: "",
                                                        className: "custom-size",
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                            class: "fas fa-clipboard-list"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var $3a6632a2afdea399$export$2e2bcd8739ae039 = $3a6632a2afdea399$var$GroupHome;









const $756e5ae752377717$var$TemplateList = ()=>{
    const [filesList, setFilesList] = (0, $ltMAx$react.useState)([]);
    const [errorMsg, setErrorMsg] = (0, $ltMAx$react.useState)("");
    const [searchKeyword, setSearchKeyword] = (0, $ltMAx$react.useState)("");
    const filterTemplate = filesList.filter((item)=>{
        return item.templateName.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    (0, $ltMAx$react.useEffect)(()=>{
        const getFilesList = async ()=>{
            try {
                const { data: data  } = await (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/templates/");
                setErrorMsg("");
                setFilesList(data);
            } catch (error) {
                error.response && setErrorMsg(error.response.data);
            }
        };
        getFilesList();
    }, []);
    const downloadFile = async (id, path, mimetype)=>{
        try {
            const result = await (0, ($parcel$interopDefault($ltMAx$axios))).get(`https://af-group-project.herokuapp.com/download/template/${id}`, {
                responseType: "blob"
            });
            const split = path.split("/");
            const filename = split[split.length - 1];
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Template file is Downloaded!!", "Click ok to Continue", "success");
            setErrorMsg("");
            return (0, ($parcel$interopDefault($ltMAx$downloadjs)))(result.data, filename, mimetype);
        } catch (error) {
            if (error.response && error.response.status === 400) //setErrorMsg('Error while downloading file. Try again later');
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Error while downloading file. Try again later!!", "Click ok to Continue", "success");
        }
    };
    const navigateToSubmissions = async (id)=>{
        navigate(`/student/group/submissions/${id}`);
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "files-container",
                        children: [
                            errorMsg && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "errorMsg",
                                children: errorMsg
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                className: "mt-5",
                                placeholder: "Search by GroupName",
                                style: {
                                    marginLeft: "79%",
                                    width: "12vw"
                                },
                                onChange: (e)=>{
                                    setSearchKeyword(e.target.value);
                                }
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                                className: "table mt-5 container",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("thead", {
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Template Name"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Description"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Deadline"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Download File"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Submit Answers"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                                        children: filterTemplate.map((item)=>{
                                            return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.templateName
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.description
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.deadline
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                                href: "#/",
                                                                style: {
                                                                    textDecoration: "none"
                                                                },
                                                                onClick: ()=>downloadFile(item._id, item.file_path, item.file_mimetype),
                                                                children: "Download"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                            onClick: ()=>navigateToSubmissions(item._id),
                                                            className: "btn btn-success p-1",
                                                            children: "Submit Answers"
                                                        })
                                                    })
                                                ]
                                            });
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
var $756e5ae752377717$export$2e2bcd8739ae039 = $756e5ae752377717$var$TemplateList;













// import { API_URL } from '../../utils/constants';
function $b307094c0a54ce40$var$AddSubmission() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [file, setFile] = (0, $ltMAx$react.useState)(null);
    const [previewSrc, setPreviewSrc] = (0, $ltMAx$react.useState)("");
    const [templateName, setTemplateName] = (0, $ltMAx$react.useState)("");
    const [deadline, setDeadline] = (0, $ltMAx$react.useState)("");
    const [groupName, setGroupName] = (0, $ltMAx$react.useState)("");
    const [submittedBy, setSubmittedBy] = (0, $ltMAx$react.useState)("");
    const [groupID, setGroupID] = (0, $ltMAx$react.useState)("");
    const [errorMsg, setErrorMsg] = (0, $ltMAx$react.useState)("");
    const [isPreviewAvailable, setIsPreviewAvailable] = (0, $ltMAx$react.useState)(false);
    const dropRef = (0, $ltMAx$react.useRef)();
    const { templateId: templateId  } = (0, $ltMAx$reactrouterdom.useParams)();
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/templates/" + templateId).then((res)=>{
            setTemplateName(res.data.templateName);
            setDeadline(res.data.deadline);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            const user = (0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt);
            setGroupName(user.groupName);
            setSubmittedBy(user.userID);
            setGroupID(user.groupID);
        } catch (error) {}
    }, []);
    const onDrop = (files)=>{
        const [uploadedFile] = files;
        setFile(uploadedFile);
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = "2px dashed #e9ebeb";
    };
    const updateBorder = (dragState)=>{
        if (dragState === "over") dropRef.current.style.border = "2px solid #000";
        else if (dragState === "leave") dropRef.current.style.border = "2px dashed #e9ebeb";
    };
    const handleOnSubmit = async (event)=>{
        event.preventDefault();
        try {
            if (templateId.trim() !== "" && templateName.trim() !== "" && deadline.trim() !== "" && groupName.trim() !== "" && submittedBy.trim() !== "") {
                if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("templateId", templateId);
                    formData.append("templateName", templateName);
                    formData.append("deadline", deadline);
                    formData.append("groupName", groupName);
                    formData.append("submittedBy", submittedBy);
                    formData.append("groupID", groupID);
                    setErrorMsg("");
                    await (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/upload/submission", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    console.log("works fine to this point");
                    (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                        title: "Submited Successfully",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/student");
                } else setErrorMsg("Please select a file to add.");
            } else setErrorMsg("Please enter all the field values.");
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
        }
    };
    console.log("Component is rendered");
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "main-content",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form), {
                                className: "search-form",
                                onSubmit: handleOnSubmit,
                                children: [
                                    errorMsg && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                        className: "errorMsg",
                                        children: errorMsg
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "title",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                    type: "text",
                                                    name: "templateName",
                                                    value: templateName,
                                                    placeholder: "Template Name",
                                                    onChange: (e)=>{
                                                        setTitle(e.target.value);
                                                    },
                                                    readOnly: true
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "title",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                    type: "text",
                                                    name: "deadline",
                                                    value: deadline,
                                                    placeholder: "Deadline",
                                                    onChange: (e)=>{
                                                        setTitle(e.target.value);
                                                    },
                                                    readOnly: true
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "title",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                    type: "text",
                                                    name: "groupName",
                                                    value: groupName,
                                                    placeholder: "Group Name",
                                                    onChange: (e)=>{
                                                        setGroupName(e.target.value);
                                                    },
                                                    readOnly: true
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "title",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                    type: "text",
                                                    name: "submittedBy",
                                                    value: submittedBy,
                                                    placeholder: "Submitted By",
                                                    onChange: (e)=>{
                                                        setSubmittedBy(e.target.value);
                                                    },
                                                    readOnly: true
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "upload-section",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$reactdropzone))), {
                                                onDrop: onDrop,
                                                onDragEnter: ()=>updateBorder("over"),
                                                onDragLeave: ()=>updateBorder("leave"),
                                                children: ({ getRootProps: getRootProps , getInputProps: getInputProps  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                        ...getRootProps({
                                                            className: "drop-zone"
                                                        }),
                                                        ref: dropRef,
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                ...getInputProps()
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                                children: "Drag and drop a file OR click here to select a file"
                                                            }),
                                                            file && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("strong", {
                                                                        children: "Selected file:"
                                                                    }),
                                                                    " ",
                                                                    file.name
                                                                ]
                                                            })
                                                        ]
                                                    })
                                            }),
                                            previewSrc ? isPreviewAvailable ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "image-preview",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                                    className: "preview-image",
                                                    src: previewSrc,
                                                    alt: "Preview"
                                                })
                                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "preview-message",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                    children: "No preview available for this file"
                                                })
                                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "preview-message",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                    children: "Image preview will be shown here after selection"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Button), {
                                        variant: "primary",
                                        type: "submit",
                                        children: "Submit"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}
var $b307094c0a54ce40$export$2e2bcd8739ae039 = $b307094c0a54ce40$var$AddSubmission;





















function $f483527c524353f1$var$Submission(props) {
    const downloadFile = async (id, path, mimetype)=>{
        try {
            const result = await (0, ($parcel$interopDefault($ltMAx$axios))).get(`https://af-group-project.herokuapp.com/download/submission/${id}`, {
                responseType: "blob"
            });
            const split = path.split("/");
            const filename = split[split.length - 1];
            // setErrorMsg('');
            return (0, ($parcel$interopDefault($ltMAx$downloadjs)))(result.data, filename, mimetype);
        } catch (error) {
            error.response && error.response.status;
        }
    };
    // useEffect(() => {
    //     try {
    //         const jwt = localStorage.getItem("token");
    //         setUser(jwtDecode(jwt));
    //     } catch (error) {
    //     }
    // }, []);
    // useEffect(() => {
    //     axios
    //         .get("https://af-group-project.herokuapp.com//api/v1/submissions/getSubmissionsUsingGroupID/" + user.groupID)
    //         .then((res) => {
    //             setSubmissionList(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [props]);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "col-2"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "col-10",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "files-container mt-5",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                class: "card text-white bg-dark",
                                style: {
                                    width: "500px",
                                    height: "300px"
                                },
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    class: "card-body",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h5", {
                                            class: "card-header text-center font-weight-bolder",
                                            children: "Card title"
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                                            className: "mt-5 ml-5 pl-5",
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                                    children: [
                                                        "Template Name: ",
                                                        props.templateName
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                                    children: [
                                                        "Deadline: ",
                                                        props.deadline
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                                    children: [
                                                        "Group Name: ",
                                                        props.groupName
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                                    children: [
                                                        "Submitted By: ",
                                                        props.submittedBy
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                            href: "#/",
                                            class: "btn btn-success d-flex justify-content-center mt-5 ml-5 mr-5",
                                            style: {
                                                textDecoration: "none"
                                            },
                                            onClick: ()=>downloadFile(props._id, props.file_path, props.file_mimetype),
                                            children: "Download"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}
var $f483527c524353f1$export$2e2bcd8739ae039 = $f483527c524353f1$var$Submission;


function $46d73f1b032f5992$var$SubmissionList(props) {
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    const [submissionList, setSubmissionList] = (0, $ltMAx$react.useState)([]);
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
        } catch (error) {}
    }, []);
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/submissions/getSubmissionsUsingGroupID/" + user.groupID).then((res)=>{
            setSubmissionList(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, [
        user
    ]);
    console.log("Component is rendered");
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "main-content",
                            children: [
                                submissionList.map(function(submission) {
                                    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $f483527c524353f1$export$2e2bcd8739ae039), {
                                        ...submission
                                    });
                                }),
                                ";"
                            ]
                        })
                    })
                })
            ]
        })
    });
}
var $46d73f1b032f5992$export$2e2bcd8739ae039 = $46d73f1b032f5992$var$SubmissionList;







function $f5842b2d2b159fa9$var$ViewTopic(props) {
    const [filesList, setFilesList] = (0, $ltMAx$react.useState)({});
    const [errorMsg, setErrorMsg] = (0, $ltMAx$react.useState)("");
    (0, $ltMAx$react.useEffect)(()=>{
        const getFilesList = async ()=>{
            const user = props.user;
            const data = props.topic;
            setErrorMsg("");
            setFilesList(data);
        };
        getFilesList();
    }, [
        props
    ]);
    const downloadFile = async (id, path, mimetype)=>{
        try {
            const result = await (0, ($parcel$interopDefault($ltMAx$axios))).get(`https://af-group-project.herokuapp.com/download/${id}`, {
                responseType: "blob"
            });
            const split = path.split("/");
            const filename = split[split.length - 1];
            setErrorMsg("");
            return (0, ($parcel$interopDefault($ltMAx$downloadjs)))(result.data, filename, mimetype);
        } catch (error) {
            if (error.response && error.response.status === 400) setErrorMsg("Error while downloading file. Try again later");
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "col-2"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "col-10",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "files-container mt-5",
                            children: [
                                errorMsg && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                    className: "errorMsg",
                                    children: errorMsg
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    class: "card text-white bg-dark",
                                    style: {
                                        width: "500px",
                                        height: "300px"
                                    },
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        class: "card-body",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h5", {
                                                class: "card-header text-center font-weight-bolder",
                                                children: "Card title"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                                                className: "mt-5 ml-5 pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                                        children: [
                                                            "Title : ",
                                                            filesList.title
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                                        children: [
                                                            "Group Name: ",
                                                            filesList.groupName
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                                        children: [
                                                            "Status: ",
                                                            filesList.submittedBy
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                href: "#/",
                                                class: "btn btn-success d-flex justify-content-center mt-5 ml-5 mr-5",
                                                style: {
                                                    textDecoration: "none"
                                                },
                                                onClick: ()=>downloadFile(filesList._id, filesList.file_path, filesList.file_mimetype),
                                                children: "Download"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
var $f5842b2d2b159fa9$export$2e2bcd8739ae039 = $f5842b2d2b159fa9$var$ViewTopic;






















// import { API_URL } from '../../utils/constants';
function $1b73a1d012240925$var$AddTopic(props) {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [file, setFile] = (0, $ltMAx$react.useState)(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = (0, $ltMAx$react.useState)(""); // state for storing previewImage
    const [title, setTitle] = (0, $ltMAx$react.useState)("");
    const [groupName, setGroupName] = (0, $ltMAx$react.useState)("");
    const [submittedBy, setSubmittedBy] = (0, $ltMAx$react.useState)("");
    const [groupID, setGroupID] = (0, $ltMAx$react.useState)("");
    const [status, setStatus] = (0, $ltMAx$react.useState)("Pending");
    // const [state, setState] = useState({
    //   title: '',
    //   description: ''
    // });
    const [errorMsg, setErrorMsg] = (0, $ltMAx$react.useState)("");
    const [isPreviewAvailable, setIsPreviewAvailable] = (0, $ltMAx$react.useState)(false); // state to show preview only for images
    const dropRef = (0, $ltMAx$react.useRef)(); // React ref for managing the hover state of droppable area
    // const handleInputChange = (event) => {
    //   setState({
    //     ...state,
    //     [event.target.name]: event.target.value
    //   });
    // };
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            // const jwt = localStorage.getItem("token");
            // const user = jwtDecode(jwt);
            const user = props.user;
            setGroupName(props.user.groupName);
            setSubmittedBy(props.user.userID);
            setGroupID(props.user.groupID);
        } catch (error) {}
    }, [
        props
    ]);
    const onDrop = (files)=>{
        const [uploadedFile] = files;
        setFile(uploadedFile);
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = "2px dashed #e9ebeb";
    };
    const updateBorder = (dragState)=>{
        if (dragState === "over") dropRef.current.style.border = "2px solid #000";
        else if (dragState === "leave") dropRef.current.style.border = "2px dashed #e9ebeb";
    };
    const handleOnSubmit = async (event)=>{
        event.preventDefault();
        try {
            if (title.trim() !== "" && groupName.trim() !== "" && submittedBy.trim() !== "" && status.trim() !== "") {
                if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("title", title);
                    formData.append("groupName", groupName);
                    formData.append("submittedBy", submittedBy);
                    formData.append("groupID", groupID);
                    formData.append("status", status);
                    setErrorMsg("");
                    await (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/upload", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    // props.history.push('/list');
                    console.log("works fine to this point");
                    (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                        title: "Topic Submit Successfully",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/student");
                } else setErrorMsg("Please select a file to add.");
            } else setErrorMsg("Please enter all the field values.");
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
        }
    };
    console.log("Component is rendered");
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "col-md-10",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "main-content",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form), {
                            className: "search-form",
                            onSubmit: handleOnSubmit,
                            children: [
                                errorMsg && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                    className: "errorMsg",
                                    children: errorMsg
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Group, {
                                            controlId: "title",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                type: "text",
                                                name: "title",
                                                value: title,
                                                placeholder: "Title",
                                                onChange: (e)=>{
                                                    setTitle(e.target.value);
                                                }
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Group, {
                                            controlId: "title",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                type: "text",
                                                name: "groupName",
                                                value: groupName,
                                                placeholder: "Group Name",
                                                onChange: (e)=>{
                                                    setGroupName(e.target.value);
                                                },
                                                readOnly: true
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Group, {
                                            controlId: "title",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                type: "text",
                                                name: "submittedBy",
                                                value: submittedBy,
                                                placeholder: "Submitted By",
                                                onChange: (e)=>{
                                                    setSubmittedBy(e.target.value);
                                                },
                                                readOnly: true
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    className: "upload-section",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$reactdropzone))), {
                                            onDrop: onDrop,
                                            onDragEnter: ()=>updateBorder("over"),
                                            onDragLeave: ()=>updateBorder("leave"),
                                            children: ({ getRootProps: getRootProps , getInputProps: getInputProps  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                    ...getRootProps({
                                                        className: "drop-zone"
                                                    }),
                                                    ref: dropRef,
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                            ...getInputProps()
                                                        }),
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                            children: "Drag and drop a file OR click here to select a file"
                                                        }),
                                                        file && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("strong", {
                                                                    children: "Selected file:"
                                                                }),
                                                                " ",
                                                                file.name
                                                            ]
                                                        })
                                                    ]
                                                })
                                        }),
                                        previewSrc ? isPreviewAvailable ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            className: "image-preview",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                                className: "preview-image",
                                                src: previewSrc,
                                                alt: "Preview"
                                            })
                                        }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            className: "preview-message",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                children: "No preview available for this file"
                                            })
                                        }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                            className: "preview-message",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                children: "Image preview will be shown here after selection"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Button), {
                                    variant: "primary",
                                    type: "submit",
                                    children: "Submit"
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}
var $1b73a1d012240925$export$2e2bcd8739ae039 = $1b73a1d012240925$var$AddTopic;



// import { API_URL } from '../../utils/constants';
function $a6fef428edd364b1$var$Topic(props) {
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    const [topic, setTopic] = (0, $ltMAx$react.useState)({});
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
        } catch (error) {}
    }, []);
    (0, $ltMAx$react.useEffect)(()=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/topics/getTopicUsingGroupID/" + user.groupID).then((res)=>{
            setTopic(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, [
        user,
        topic
    ]);
    console.log("Component is rendered");
    if (!topic) return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "main-content",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $1b73a1d012240925$export$2e2bcd8739ae039), {
                                user: user
                            })
                        })
                    })
                })
            ]
        })
    });
    if (topic.status == "Rejected") return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "main-content",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                    children: "Your topic is rejected. Submit a new topic"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $f5842b2d2b159fa9$export$2e2bcd8739ae039), {
                                    topic: topic
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                    children: "Submit a new topic"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $1b73a1d012240925$export$2e2bcd8739ae039), {
                                    user: user
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
    else if (topic) return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "main-content",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $f5842b2d2b159fa9$export$2e2bcd8739ae039), {
                                topic: topic
                            })
                        })
                    })
                })
            ]
        })
    });
    else return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "main-content",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $1b73a1d012240925$export$2e2bcd8739ae039), {
                                user: user
                            })
                        })
                    })
                })
            ]
        })
    });
}
var $a6fef428edd364b1$export$2e2bcd8739ae039 = $a6fef428edd364b1$var$Topic;








const $5076c05c5df6234a$var$TopicList = ()=>{
    const [filesList, setFilesList] = (0, $ltMAx$react.useState)([]);
    const [errorMsg, setErrorMsg] = (0, $ltMAx$react.useState)("");
    const [searchKeyword, setSearchKeyword] = (0, $ltMAx$react.useState)("");
    const filterTopic = filesList.filter((item)=>{
        return item.title.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    (0, $ltMAx$react.useEffect)(()=>{
        const getFilesList = async ()=>{
            try {
                const { data: data  } = await (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/topics/");
                setErrorMsg("");
                setFilesList(data);
            } catch (error) {
                error.response && setErrorMsg(error.response.data);
            }
        };
        getFilesList();
    }, []);
    const downloadFile = async (id, path, mimetype)=>{
        try {
            const result = await (0, ($parcel$interopDefault($ltMAx$axios))).get(`https://af-group-project.herokuapp.com/download/${id}`, {
                responseType: "blob"
            });
            const split = path.split("/");
            const filename = split[split.length - 1];
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Topic file is Downloaded!!", "Click ok to Continue", "success");
            setErrorMsg("");
            return (0, ($parcel$interopDefault($ltMAx$downloadjs)))(result.data, filename, mimetype);
        } catch (error) {
            if (error.response && error.response.status === 400) //setErrorMsg('Error while downloading file. Try again later');
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Error while downloading file. Try again later!!", "Click ok to Continue", "success");
        }
    };
    const acceptTopic = async (id)=>{
        try {
            const requestBody = {
                status: "Accepted"
            };
            await (0, ($parcel$interopDefault($ltMAx$axios))).patch(`https://af-group-project.herokuapp.com/changeStatus/${id}`, requestBody);
            alert("Topic status is changed to Accepted");
            window.location = "/list";
        } catch (error) {
            alert(error);
        }
    };
    const rejectTopic = async (id)=>{
        try {
            const requestBody = {
                status: "Rejected"
            };
            await (0, ($parcel$interopDefault($ltMAx$axios))).patch(`https://af-group-project.herokuapp.com/changeStatus/${id}`, requestBody);
            alert("Topic status is changed to Rejected");
            window.location = "/list";
        } catch (error) {
            alert(error);
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $017f251b233420e0$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "files-container",
                        children: [
                            errorMsg && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "errorMsg",
                                children: errorMsg
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                className: "mt-5",
                                placeholder: "Search by GroupName",
                                style: {
                                    marginLeft: "79%",
                                    width: "12vw"
                                },
                                onChange: (e)=>{
                                    setSearchKeyword(e.target.value);
                                }
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                                className: "table mt-5 container",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("thead", {
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Title"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Group Name"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Submitted By"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Download File"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Accept"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Reject"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                                        children: filterTopic.map((item)=>{
                                            return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.groupName
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.submittedBy
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.status
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                                href: "#/",
                                                                style: {
                                                                    textDecoration: "none"
                                                                },
                                                                onClick: ()=>downloadFile(item._id, item.file_path, item.file_mimetype),
                                                                children: "Download"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                            onClick: ()=>acceptTopic(item._id),
                                                            className: "btn btn-success p-1",
                                                            children: "Accept"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                            onClick: ()=>rejectTopic(item._id),
                                                            className: "btn btn-danger p-1",
                                                            children: "Reject"
                                                        })
                                                    })
                                                ]
                                            });
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
var $5076c05c5df6234a$export$2e2bcd8739ae039 = $5076c05c5df6234a$var$TopicList;











// import { API_URL } from '../../utils/constants';
function $3b0502f8069f01d2$var$AddTemplate(props) {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [file, setFile] = (0, $ltMAx$react.useState)(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = (0, $ltMAx$react.useState)(""); // state for storing previewImage
    const [state, setState] = (0, $ltMAx$react.useState)({
        templateName: "",
        description: "",
        deadline: ""
    });
    const [errorMsg, setErrorMsg] = (0, $ltMAx$react.useState)("");
    const [isPreviewAvailable, setIsPreviewAvailable] = (0, $ltMAx$react.useState)(false); // state to show preview only for images
    const dropRef = (0, $ltMAx$react.useRef)(); // React ref for managing the hover state of droppable area
    const handleInputChange = (event)=>{
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };
    const onDrop = (files)=>{
        const [uploadedFile] = files;
        setFile(uploadedFile);
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = "2px dashed #e9ebeb";
    };
    const updateBorder = (dragState)=>{
        if (dragState === "over") dropRef.current.style.border = "2px solid #000";
        else if (dragState === "leave") dropRef.current.style.border = "2px dashed #e9ebeb";
    };
    const handleOnSubmit = async (event)=>{
        event.preventDefault();
        try {
            const { templateName: templateName , description: description , deadline: deadline  } = state;
            if (templateName.trim() !== "" && description.trim() !== "" && deadline.trim() !== "") {
                if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("templateName", templateName);
                    formData.append("description", description);
                    formData.append("deadline", deadline);
                    setErrorMsg("");
                    await (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/upload/template", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Template Added..!!", "Click ok to Continue", "success");
                    // props.history.push('/list');
                    console.log("works fine to this point");
                    navigate("/admin-home");
                } else //setErrorMsg('Please select a file to add.');
                (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                    title: "Please select a file to add!!",
                    text: "Please put a file.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            } else //setErrorMsg('Please enter all the field values.');
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                title: "Please enter all the field values!!",
                text: "Please enter the relevent details.",
                icon: "error",
                confirmButtonText: "OK"
            });
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
        }
    };
    console.log("Component is rendered");
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "main-content",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form), {
                                className: "search-form",
                                onSubmit: handleOnSubmit,
                                children: [
                                    errorMsg && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                        className: "errorMsg",
                                        children: errorMsg
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "title",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                        children: "Template Name"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                        type: "text",
                                                        name: "templateName",
                                                        value: state.templateName || "",
                                                        placeholder: "template name",
                                                        onChange: handleInputChange
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "description",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                        children: "Description"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                        type: "text",
                                                        name: "description",
                                                        value: state.description || "",
                                                        placeholder: "description",
                                                        onChange: handleInputChange
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "description",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                        children: "Deadline"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                        type: "date",
                                                        name: "deadline",
                                                        value: state.deadline || "",
                                                        placeholder: "Topic Deadline",
                                                        onChange: handleInputChange
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "upload-section",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$reactdropzone))), {
                                                onDrop: onDrop,
                                                onDragEnter: ()=>updateBorder("over"),
                                                onDragLeave: ()=>updateBorder("leave"),
                                                children: ({ getRootProps: getRootProps , getInputProps: getInputProps  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                        ...getRootProps({
                                                            className: "drop-zone"
                                                        }),
                                                        ref: dropRef,
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                ...getInputProps()
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                                children: "Drag and drop a file OR click here to select a file"
                                                            }),
                                                            file && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("strong", {
                                                                        children: "Selected file:"
                                                                    }),
                                                                    " ",
                                                                    file.name
                                                                ]
                                                            })
                                                        ]
                                                    })
                                            }),
                                            previewSrc ? isPreviewAvailable ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "image-preview",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                                    className: "preview-image",
                                                    src: previewSrc,
                                                    alt: "Preview"
                                                })
                                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "preview-message",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                    children: "No preview available for this file"
                                                })
                                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "preview-message",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                    children: "Image preview will be shown here after selection"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Button), {
                                        variant: "primary",
                                        type: "submit",
                                        children: "Submit"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}
var $3b0502f8069f01d2$export$2e2bcd8739ae039 = $3b0502f8069f01d2$var$AddTemplate;











// import { API_URL } from '../../utils/constants';
function $690bd9dba2430b57$var$AllocatePanelMember(props) {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [file, setFile] = (0, $ltMAx$react.useState)(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = (0, $ltMAx$react.useState)(""); // state for storing previewImage
    const [state, setState] = (0, $ltMAx$react.useState)({
        allocatepnl_title: "",
        allocatepnl_description: ""
    });
    const [errorMsg, setErrorMsg] = (0, $ltMAx$react.useState)("");
    const [isPreviewAvailable, setIsPreviewAvailable] = (0, $ltMAx$react.useState)(false); // state to show preview only for images
    const dropRef = (0, $ltMAx$react.useRef)(); // React ref for managing the hover state of droppable area
    const handleInputChange = (event)=>{
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };
    const onDrop = (files)=>{
        const [uploadedFile] = files;
        setFile(uploadedFile);
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = "2px dashed #e9ebeb";
    };
    const updateBorder = (dragState)=>{
        if (dragState === "over") dropRef.current.style.border = "2px solid #000";
        else if (dragState === "leave") dropRef.current.style.border = "2px dashed #e9ebeb";
    };
    const handleOnSubmit = async (event)=>{
        event.preventDefault();
        try {
            const { allocatepnl_title: allocatepnl_title , allocatepnl_description: allocatepnl_description ,  } = state;
            if (allocatepnl_title.trim() !== "" && allocatepnl_description.trim() !== "") {
                if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("allocatepnl_title", allocatepnl_title);
                    formData.append("allocatepnl_description", allocatepnl_description);
                    setErrorMsg("");
                    await (0, ($parcel$interopDefault($ltMAx$axios))).post("https://af-group-project.herokuapp.com/upload/allocatedpanelmembers", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Allocate Panel Added..!!", "Click ok to Continue", "success");
                    // props.history.push('/list');
                    console.log("works fine to this point");
                    navigate("/admin-home");
                } else // setErrorMsg('Please select a file to add.');
                (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                    title: "Please select a file to add!!",
                    text: "Please put a file.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            } else //setErrorMsg('Please enter all the field values.');
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
                title: "Please enter all the field values!!",
                text: "Please enter the relevent details.",
                icon: "error",
                confirmButtonText: "OK"
            });
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
        }
    };
    console.log("Component is rendered");
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).Fragment, {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $eaa0283bd5096d3d$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-md-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "main-content",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form), {
                                className: "search-form",
                                onSubmit: handleOnSubmit,
                                children: [
                                    errorMsg && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                        className: "errorMsg",
                                        children: errorMsg
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "title",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                        children: "Allocate Panel Name"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                        type: "text",
                                                        name: "allocatepnl_title",
                                                        value: state.allocatepnl_title || "",
                                                        placeholder: "allocate panel name",
                                                        onChange: handleInputChange
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Row), {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Col), {
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactbootstrap.Form).Group, {
                                                controlId: "description",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                        children: "Description"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Form).Control, {
                                                        type: "text",
                                                        name: "allocatepnl_description",
                                                        value: state.allocatepnl_description || "",
                                                        placeholder: "description",
                                                        onChange: handleInputChange
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "upload-section",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$reactdropzone))), {
                                                onDrop: onDrop,
                                                onDragEnter: ()=>updateBorder("over"),
                                                onDragLeave: ()=>updateBorder("leave"),
                                                children: ({ getRootProps: getRootProps , getInputProps: getInputProps  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                        ...getRootProps({
                                                            className: "drop-zone"
                                                        }),
                                                        ref: dropRef,
                                                        children: [
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                                ...getInputProps()
                                                            }),
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                                children: "Drag and drop a file OR click here to select a file"
                                                            }),
                                                            file && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("strong", {
                                                                        children: "Selected file:"
                                                                    }),
                                                                    " ",
                                                                    file.name
                                                                ]
                                                            })
                                                        ]
                                                    })
                                            }),
                                            previewSrc ? isPreviewAvailable ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "image-preview",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                                    className: "preview-image",
                                                    src: previewSrc,
                                                    alt: "Preview"
                                                })
                                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "preview-message",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                    children: "No preview available for this file"
                                                })
                                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "preview-message",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                                    children: "Image preview will be shown here after selection"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactbootstrap.Button), {
                                        type: "submit",
                                        class: "btn btn-outline-success",
                                        children: "Submit"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}
var $690bd9dba2430b57$export$2e2bcd8739ae039 = $690bd9dba2430b57$var$AllocatePanelMember;








const $36ffb4c888deff02$var$AllocatePanelmemberList = ()=>{
    const [filesList, setFilesList] = (0, $ltMAx$react.useState)([]);
    const [errorMsg, setErrorMsg] = (0, $ltMAx$react.useState)("");
    const [searchKeyword, setSearchKeyword] = (0, $ltMAx$react.useState)("");
    const filterTopic = filesList.filter((item)=>{
        return item.allocatepnl_title.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    (0, $ltMAx$react.useEffect)(()=>{
        const getFilesList = async ()=>{
            try {
                const { data: data  } = await (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/getAllAllocatedPnlMembers");
                setErrorMsg("");
                setFilesList(data);
            } catch (error) {
                error.response && setErrorMsg(error.response.data);
            }
        };
        getFilesList();
    }, []);
    const downloadFile = async (id, path, mimetype)=>{
        try {
            const result = await (0, ($parcel$interopDefault($ltMAx$axios))).get(`https://af-group-project.herokuapp.com/download/allocatedPanelMembers/${id}`, {
                responseType: "blob"
            });
            const split = path.split("/");
            const filename = split[split.length - 1];
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire("Topic file is Downloaded!!", "Click ok to Continue", "success");
            setErrorMsg("");
            return (0, ($parcel$interopDefault($ltMAx$downloadjs)))(result.data, filename, mimetype);
        } catch (error) {
            if (error.response && error.response.status === 400) setErrorMsg("Error while downloading file. Try again later");
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $05b2a9a83cc55105$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "col-10",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "files-container",
                        children: [
                            errorMsg && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "errorMsg",
                                children: errorMsg
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                className: "mt-5",
                                placeholder: "Search by PanelTitle",
                                style: {
                                    marginLeft: "79%",
                                    width: "12vw"
                                },
                                onChange: (e)=>{
                                    setSearchKeyword(e.target.value);
                                }
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                                className: "table mt-5 container",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("thead", {
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Panel title"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Description"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                children: "Download File"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                                        children: filterTopic.map((item)=>{
                                            return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.allocatepnl_title
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                        children: item.allocatepnl_description
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                                href: "#/",
                                                                style: {
                                                                    textDecoration: "none"
                                                                },
                                                                onClick: ()=>downloadFile(item._id, item.file_path, item.file_mimetype),
                                                                children: "Download"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            });
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
var $36ffb4c888deff02$export$2e2bcd8739ae039 = $36ffb4c888deff02$var$AllocatePanelmemberList;





function $7265bb7131daf928$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$react.Fragment), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            class: "container-fluid align-items-end text-light mt-auto ",
            style: {
                background: "#232f3e"
            },
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                class: " text-black footer-section mt-5 text-center",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("small", {
                        children: "\xa9 2022 | All RIGHTS RESERVED"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("small", {
                        children: "Application Framework"
                    })
                ]
            })
        })
    });
}











function $3b26786976ab5aff$var$Header() {
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    const [id, setId] = (0, $ltMAx$react.useState)("");
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
        } catch (error) {}
    }, []);
    const handleMyClick = (e)=>{
        e.preventDefault();
        if (user.role == "student") (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/students/getStudentUsingUserID/" + user.userID).then((res)=>{
            setId(res.data._id.toString());
        }).catch((err)=>{
            console.log(err);
        });
        if (user.role == "supervisor") (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/getStaffUsingUserID/" + user.userID).then((res)=>{
            setId(res.data._id.toString());
        }).catch((err)=>{
            console.log(err);
        });
        if (user.role == "panel_member") (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/getStaffUsingUserID/" + user.userID).then((res)=>{
            setId(res.data._id.toString());
        }).catch((err)=>{
            console.log(err);
        });
    };
    (0, $ltMAx$react.useEffect)(()=>{
        if (user.role == "student") {
            navigateLink = "/students/view/" + id;
            navigate(navigateLink);
        }
        if (user.role == "supervisor") {
            navigateLink = "/staff/view/" + id;
            navigate(navigateLink);
        }
        if (user.role == "panel_member") {
            navigateLink = "/staff/view/panelMember/" + id;
            navigate(navigateLink);
        }
    }, [
        id
    ]);
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    function logout() {
        localStorage.clear();
        (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire({
            title: "Logout Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then((value)=>{
            (0, ($parcel$interopDefault($ltMAx$sweetalert2))).fire(window.location = "/");
        });
    }
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$react.Fragment), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("header", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("nav", {
                class: "navbar navbar-expand-lg navbar-dark ",
                style: {
                    background: "#232f3e"
                },
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                        class: "navbar-brand",
                        href: "#",
                        children: "Project Management Tool"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                        class: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                            class: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        class: "collapse navbar-collapse justify-content-center mr-5",
                        id: "navbarSupportedContent",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("ul", {
                            class: "navbar-nav ",
                            children: localStorage.getItem("token") ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        class: "nav-item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                            class: "nav-link",
                                            to: "",
                                            onClick: handleMyClick,
                                            children: user.userID
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        class: "nav-item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                            class: "nav-link",
                                            to: "#",
                                            onClick: logout,
                                            children: "Log Out"
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        class: "nav-item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                            class: "nav-link",
                                            to: "#",
                                            children: "Login"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        class: "nav-item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                            class: "nav-link",
                                            to: "#",
                                            children: "Sign Up"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
}
var $3b26786976ab5aff$export$2e2bcd8739ae039 = $3b26786976ab5aff$var$Header;










function $93720b328395ea57$var$SupervisorList() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [staff, setStaff] = (0, $ltMAx$react.useState)([]);
    const [supervisors, setSupervisors] = (0, $ltMAx$react.useState)([]);
    const [keyword, setKeyword] = (0, $ltMAx$react.useState)("");
    async function getSupervisors() {
        await (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/").then((res)=>{
            setStaff(res.data);
        });
        setSupervisors(staff.filter((member)=>member.type === "supervisor"));
    } //end of getSupervisors function
    //checking whether the user is logged in
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            if (!jwt) navigate("/unauthorized");
        } catch (error) {}
    }, []);
    (0, $ltMAx$react.useEffect)(()=>{
        getSupervisors();
    }, [
        supervisors
    ]);
    // search function
    const searchedSupervisors = supervisors.filter((supervisor)=>{
        return supervisor.name.toLowerCase().includes(keyword.toLowerCase());
    });
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$framermotion.motion).div, {
        initial: {
            y: 250
        },
        animate: {
            y: 0
        },
        exit: {
            x: window.innerWidth,
            y: window.innerHeight
        },
        className: "container",
        style: {
            justifyContent: "flex-end"
        },
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "mt-3",
                children: " List of Supervisors "
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "row mr-1",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "col-md-8"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                        className: "mt-5 col-md input-group-text",
                        placeholder: "Search Supervisor by Name...",
                        style: {
                            borderStyle: "initial"
                        },
                        onChange: (e)=>{
                            setKeyword(e.target.value);
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                className: "table table-light table-striped table-hover mt-5",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("thead", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                            className: "table-row",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Name "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " ID Number "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Research Interest "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Request "
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                        children: searchedSupervisors.map((supervisor)=>{
                            return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        children: [
                                            " ",
                                            supervisor.name,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        children: [
                                            " ",
                                            supervisor.idNumber,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        style: {},
                                        children: [
                                            " ",
                                            supervisor.researchInterest,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.motion).button, {
                                            className: "btn btn-primary px-4",
                                            initial: {
                                                backgroundColor: "white",
                                                transitionDuration: "3s"
                                            },
                                            animate: {
                                                backgroundColor: "#015"
                                            },
                                            whileHover: {
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(150, 150, 255)",
                                                boxShadow: "0px 0px 8px rgb(200, 200, 255)"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 500
                                            },
                                            children: " Request "
                                        })
                                    })
                                ]
                            }, supervisor.idNumber);
                        })
                    })
                ]
            })
        ]
    });
}
var $93720b328395ea57$export$2e2bcd8739ae039 = $93720b328395ea57$var$SupervisorList;







function $819847562cf32586$var$CoSupervisorList() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [staff, setStaff] = (0, $ltMAx$react.useState)([]);
    const [coSupervisors, setCoSupervisors] = (0, $ltMAx$react.useState)([]);
    const [keyword, setKeyword] = (0, $ltMAx$react.useState)("");
    async function getCoSupervisors() {
        await (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/staff/").then((res)=>{
            setStaff(res.data);
        });
        setCoSupervisors(staff.filter((member)=>member.type === "co-supervisor"));
    } //end of getCoSupervisors function
    //checking whether the user is logged in
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            if (!jwt) navigate("/unauthorized");
        } catch (error) {}
    }, []);
    (0, $ltMAx$react.useEffect)(()=>{
        getCoSupervisors();
    }, [
        coSupervisors
    ]);
    // search function
    const searchedCoSupervisors = coSupervisors.filter((coSupervisor)=>{
        return coSupervisor.name.toLowerCase().includes(keyword.toLowerCase());
    });
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$framermotion.motion).div, {
        className: "container",
        initial: {
            y: 250
        },
        animate: {
            y: 0
        },
        exit: {
            x: window.innerWidth,
            y: window.innerHeight
        },
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "mt-3",
                children: " List of Co-Supervisors "
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "row mr-1",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "col-md-8"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                        className: "mt-5 col-md input-group-text",
                        placeholder: "Search Co-Supervisor by Name...",
                        style: {
                            borderStyle: "initial"
                        },
                        onChange: (e)=>{
                            setKeyword(e.target.value);
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                className: "table table-light table-striped table-hover mt-5",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("thead", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                            className: "table-row",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Name "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " ID Number "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Research Interest "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Request "
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                        children: searchedCoSupervisors.map((coSupervisor)=>{
                            return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        children: [
                                            " ",
                                            coSupervisor.name,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        children: [
                                            " ",
                                            coSupervisor.idNumber,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        children: [
                                            " ",
                                            coSupervisor.researchInterest,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.motion).button, {
                                            className: "btn btn-primary px-4",
                                            initial: {
                                                backgroundColor: "white",
                                                transitionDuration: "3s"
                                            },
                                            animate: {
                                                backgroundColor: "#015"
                                            },
                                            whileHover: {
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(100, 100, 255)",
                                                boxShadow: "0px 0px 8px rgb(200, 200, 255)"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 500
                                            },
                                            children: " Request "
                                        })
                                    })
                                ]
                            }, coSupervisor._id);
                        })
                    })
                ]
            })
        ]
    });
}
var $819847562cf32586$export$2e2bcd8739ae039 = $819847562cf32586$var$CoSupervisorList;







function $9ae0d50af5b154d0$var$RequestListSupervisor() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [requests, setRequests] = (0, $ltMAx$react.useState)([]);
    // IMPORTANT --> change the url (given url is strictly for demonstration purposes)
    async function getRequests() {
        await (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/requests/getRequestByStaffId/6291df9650646990e2ccbdc4").then((res1)=>res1.data.map((info)=>{
                (0, ($parcel$interopDefault($ltMAx$axios))).get(`https://af-group-project.herokuapp.com/api/v1/groups/get/${info.group}`).then((res)=>{
                    groupName = res.data.groupName;
                    supervisor = res.data.supervisor;
                    requests.push({
                        groupName: groupName,
                        supervisor: supervisor
                    });
                });
            }));
    }
    //checking whether the user is logged in
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            if (!jwt) navigate("/unauthorized");
        } catch (error) {}
    }, []);
    (0, $ltMAx$react.useEffect)(()=>{
        getRequests();
    }, [
        requests
    ]);
    let requestNumber = 0;
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$framermotion.motion).div, {
        initial: {
            y: 250
        },
        animate: {
            y: 0
        },
        exit: {
            x: window.innerWidth,
            y: window.innerHeight
        },
        className: "container",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "mt-3",
                children: " Supervisor Requests "
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                className: "table table-light table-striped table-hover mt-5",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("thead", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    colSpan: "2",
                                    className: "col-2",
                                    children: " # "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    className: "col-2",
                                    children: " Group ID "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Research Topic "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Accept "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Reject "
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                        children: requests.map((request)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        colSpan: "2",
                                        className: "align-middle col-2",
                                        children: [
                                            " ",
                                            ++requestNumber,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        className: "align-middle col-2",
                                        children: [
                                            " ",
                                            request.groupName,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                        className: "align-middle",
                                        children: "  "
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                        className: "align-middle",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.motion).button, {
                                            className: "btn btn-success px-4",
                                            initial: {
                                                backgroundColor: "white",
                                                transitionDuration: "3s"
                                            },
                                            animate: {
                                                backgroundColor: "#181"
                                            },
                                            whileHover: {
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(100, 255, 100)",
                                                boxShadow: "0px 0px 8px rgb(200, 255, 200)"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 500
                                            },
                                            children: " Accept "
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                        className: "align-middle",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.motion).button, {
                                            className: "btn btn-danger px-4",
                                            initial: {
                                                backgroundColor: "white",
                                                transitionDuration: "3s"
                                            },
                                            animate: {
                                                backgroundColor: "#811"
                                            },
                                            whileHover: {
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(255, 100, 100)",
                                                boxShadow: "0px 0px 8px rgb(255, 200, 200)"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 500
                                            },
                                            children: " Reject "
                                        })
                                    })
                                ]
                            }, request._id))
                    })
                ]
            })
        ]
    });
}
var $9ae0d50af5b154d0$export$2e2bcd8739ae039 = $9ae0d50af5b154d0$var$RequestListSupervisor;







function $958051e5a0e99951$var$RequestListCoSupervisor() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [requests, setRequests] = (0, $ltMAx$react.useState)([]);
    let requestNumber = 0;
    // IMPORTANT --> change the url (given url is strictly for demonstration purposes)
    async function getRequests() {
        await (0, ($parcel$interopDefault($ltMAx$axios))).get("https://af-group-project.herokuapp.com/api/v1/requests/getRequestByStaffId/6291df9650646990e2ccbdc4").then((res1)=>res1.data.map((info)=>{
                (0, ($parcel$interopDefault($ltMAx$axios))).get(`https://af-group-project.herokuapp.com/api/v1/groups/get/${info.group}`).then((res)=>{
                    groupName = res.data.groupName;
                    co_supervisor = res.data.co_supervisor;
                    requests.push({
                        groupName: groupName,
                        co_supervisor: co_supervisor
                    });
                });
            }));
    }
    //checking whether the user is logged in
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            if (!jwt) navigate("/unauthorized");
        } catch (error) {}
    }, []);
    (0, $ltMAx$react.useEffect)(()=>{
        getRequests();
    }, [
        requests
    ]);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$framermotion.motion).div, {
        initial: {
            y: 250
        },
        animate: {
            y: 0
        },
        exit: {
            x: window.innerWidth,
            y: window.innerHeight
        },
        className: "container",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "mt-3",
                children: " Co-Supervisor Requests "
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                className: "table table-light table-striped table-hover mt-5",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("thead", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    colSpan: "2",
                                    className: "col-2",
                                    children: " # "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    className: "col-2",
                                    children: " Group ID "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Research Topic "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Accept "
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                    scope: "col",
                                    children: " Reject "
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                        children: requests.map((request)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        colSpan: "2",
                                        className: "align-middle col-2",
                                        children: [
                                            " ",
                                            ++requestNumber,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        className: "align-middle col-2",
                                        children: [
                                            " ",
                                            request.group,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                        className: "align-middle",
                                        children: [
                                            " ",
                                            request.co_supervisor,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                        className: "align-middle",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.motion).button, {
                                            className: "btn btn-success px-4",
                                            initial: {
                                                backgroundColor: "white",
                                                transitionDuration: "3s"
                                            },
                                            animate: {
                                                backgroundColor: "#181"
                                            },
                                            whileHover: {
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(100, 255, 100)",
                                                boxShadow: "0px 0px 8px rgb(200, 255, 200)"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 500
                                            },
                                            children: " Accept "
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                        className: "align-middle",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.motion).button, {
                                            className: "btn btn-danger px-4",
                                            initial: {
                                                backgroundColor: "white",
                                                transitionDuration: "3s"
                                            },
                                            animate: {
                                                backgroundColor: "#811"
                                            },
                                            whileHover: {
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(255, 100, 100)",
                                                boxShadow: "0px 0px 8px rgb(255, 200, 200)"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 500
                                            },
                                            children: " Reject "
                                        })
                                    })
                                ]
                            }, request))
                    })
                ]
            })
        ]
    });
}
var $958051e5a0e99951$export$2e2bcd8739ae039 = $958051e5a0e99951$var$RequestListCoSupervisor;







function $b62d09895bbaf505$var$GroupPage() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    //checking whether the user is logged in
    (0, $ltMAx$react.useEffect)(()=>{
        try {
            const jwt = localStorage.getItem("token");
            if (!jwt) navigate("/unauthorized");
        } catch (error) {}
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$framermotion.motion).div, {
        initial: {
            y: 250
        },
        animate: {
            y: 0
        },
        exit: {
            x: window.innerWidth,
            y: window.innerHeight
        },
        className: "container",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "mt-3",
                children: "Group 1"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                to: "/chat_forum",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                    children: "Chat Forum"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                children: "Documents"
            })
        ]
    });
}
var $b62d09895bbaf505$export$2e2bcd8739ae039 = $b62d09895bbaf505$var$GroupPage;








function $cd003310a6d30db5$var$ChatForum() {
    let navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const [messageContent, setMessageContent] = (0, $ltMAx$react.useState)("");
    const [user, setUser] = (0, $ltMAx$react.useState)({});
    async function pageInitialization() {
        try {
            const jwt = localStorage.getItem("token");
            setUser((0, ($parcel$interopDefault($ltMAx$jwtdecode)))(jwt));
        } catch (error) {
            navigate("/unauthorized");
        }
    }
    (0, $ltMAx$react.useEffect)(()=>{
        pageInitialization();
    }, []);
    const groupId = user.groupID;
    const userID = user.userID;
    console.log(groupId, userID);
    const name = "" //use the userID to find the name
    ;
    async function postMessage() {
        await (0, ($parcel$interopDefault($ltMAx$axios))).post(`https://af-group-project.herokuapp.com/api/v1/groups/newChatMessage/${groupId}`, {
            name: name,
            message: messageContent
        });
    }
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                children: "Post new message"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                class: "mb-3",
                onSubmit: ()=>{
                    postMessage();
                },
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                        type: "text",
                        class: "form-control",
                        id: "exampleFormControlTextarea1",
                        placeholder: "Enter your message here",
                        onChange: (e)=>{
                            setMessageContent(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                        children: " SEND "
                    })
                ]
            })
        ]
    });
}
var $cd003310a6d30db5$export$2e2bcd8739ae039 = $cd003310a6d30db5$var$ChatForum;





function $4b642db7d693a75a$var$Unauthorized() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$framermotion.motion).div, {
        initial: {
            y: 100
        },
        animate: {
            y: 0
        },
        exit: {
            y: window.innerHeight
        },
        transition: {
            type: "spring",
            bounce: 1
        },
        className: "py-5 text-warning",
        style: {
            height: window.innerHeight
        },
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "py-5 mt-5 mb-5",
                children: " You tried accessing a page that only logged in users are allowed to access "
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                children: " Please login first to gain access "
            })
        ]
    });
}
var $4b642db7d693a75a$export$2e2bcd8739ae039 = $4b642db7d693a75a$var$Unauthorized;


function $06c2080925baad1b$var$AnimatedRoutes() {
    const location = (0, $ltMAx$reactrouterdom.useLocation)();
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.AnimatePresence), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactrouterdom.Routes), {
            location: location,
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/supervisors",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $93720b328395ea57$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/co_supervisors",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $819847562cf32586$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/supervisor_requests",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $9ae0d50af5b154d0$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/co_supervisor_requests",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $958051e5a0e99951$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/group_home",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $b62d09895bbaf505$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/chat_forum",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $cd003310a6d30db5$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/unauthorized",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $4b642db7d693a75a$export$2e2bcd8739ae039), {})
                })
            ]
        }, location.pathname)
    });
}
var $06c2080925baad1b$export$2e2bcd8739ae039 = $06c2080925baad1b$var$AnimatedRoutes;


function $da11a1101b2a894a$export$86fbec116b87613f() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("style", {
                children: "body { background-color: #f1f3f0; }"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("style", {
                children: "body { padding: 0px 0px 0px 0px; }"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactrouterdom.BrowserRouter), {
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $3b26786976ab5aff$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactrouterdom.Routes), {
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $d4991868a3cef739$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/admin-home",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $e16a91c09b3e7c19$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "admin/staff/update/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $16f52f33240b448d$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "admin/students/update/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $a7d5b0ddf21b0c86$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/admin/students",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ef7c2022d156b490$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/admin/staff",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $2489eca03fbcd870$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/addAdmin",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ace6788f9b919927$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/registerStudent",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $396e6e092ad378d9$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/student",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $873a38ac38330c7c$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/students/view/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $b90a68f5b8e903f1$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/students/update/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $4e7acb7b7b7af57a$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/student/changePassword",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $8803068ae3a5d953$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/registerStaff",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $a9c57da589f2f5ed$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/supervisor",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ae59dd8834b8a940$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/staff/view/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $4fcf3ef09d9562e7$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/staff/update/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $bd0eeab52d846dfa$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/staff/changePassword",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $578020a1b0c8b74f$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/panelMember",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $6d8d736f0446d225$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/staff/view/panelMember/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $3d55b12a99d7f69d$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/staff/update/panelMember/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $932c8d694d6356fe$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/staff/panelMember/changePassword",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $3f3cec6fe1c69212$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/admin/groups",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0173ffbdc74f3a5b$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "admin/groups/update/:id",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ac2ea9b3c587436e$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/student/createGroup",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $6b84ed44db6d6193$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/student/group",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $3a6632a2afdea399$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/student/group/topic",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $a6fef428edd364b1$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/student/group/templates",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $756e5ae752377717$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/student/group/submissions/:templateId",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $b307094c0a54ce40$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/student/group/submissions/",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $46d73f1b032f5992$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/list",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $5076c05c5df6234a$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/addtemplate",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $3b0502f8069f01d2$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "ViewTopic",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $f5842b2d2b159fa9$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/allocatepanelmembers",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $690bd9dba2430b57$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                                path: "/allocatepanelmemberslist",
                                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $36ffb4c888deff02$export$2e2bcd8739ae039), {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $06c2080925baad1b$export$2e2bcd8739ae039), {})
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $7265bb7131daf928$export$2e2bcd8739ae039), {})
        ]
    });
}





const $4fa36e821943b400$var$root = (0, ($parcel$interopDefault($ltMAx$reactdomclient))).createRoot(document.getElementById("app"));
$4fa36e821943b400$var$root.render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $da11a1101b2a894a$export$86fbec116b87613f), {}));


//# sourceMappingURL=index.js.map
