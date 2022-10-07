'use strict';

var app = null;

class App {
    constructor() {
        this.example_content = {
            navbar: {
                dark: false,
                color: "white",
                items: [
                    {
                        label: "Home",
                        target: "#"
                    },
                    {
                        label: "No target"
                    }
                ],
                items_right: [
                    {
                        icon: "search",
                        search: {
                            id: "search",
                            target: "app.on_form_submit",
                            placeholder: "Search"
                        }
                    },
                    {
                        icon: "comments",
                        icon_style: "far",
                        badge: {
                            label: "3",
                            color: "danger"
                        },
                        dropdown: {
                            header: {
                                label: "Example dropdown header"
                            },
                            items: [
                                {
                                    label: "Example dropdown item #1",
                                    target: "javascript:alert('You clicked on the item');"
                                },
                                {
                                    label: "Example dropdown item #2"
                                }
                            ],
                            footer: {
                                label: "Example dropdown footer",
                                target: "javascript:alert('You clicked on the footer');"
                            }
                        }
                    },
                    {
                        icon: "bell",
                        icon_style: "far",
                        badge: {
                            label: "15",
                            color: "warning"
                        }
                    },
                    {
                        icon: "expand-arrows-alt",
                        fullscreen: true
                    },
                    {
                        icon: "th-large"
                    }
                ]
            },
            sidebar: {
                logo: "logo.webp",
                title: "Handlebars template",
                style: [
                    //"flat",
                    //"compact"
                ],
                dark: true,
                color: "primary",
                items: [
                    {
                        label: "Example item",
                        icon: "chart-pie",
                        target: "https://google.com",
                        icon_color: "danger",
                        text_color: "warning"
                    },
                    {
                        label: "Active item",
                        icon: "chart-pie",
                        active: true
                    },
                    {
                        header: true,
                        label: "Hello world"
                    },
                    {
                        label: "Item with badge",
                        icon: "chart-pie",
                        badge: {
                            label: "Badge!",
                            color: "danger"
                        }
                    },
                    {
                        label: "Level 1",
                        icon: "chart-pie",
                        open: true,
                        items: [
                            {
                                label: "Level 2",
                                icon: "circle",
                                items: [
                                    {
                                        label: "Level 3",
                                        icon: "circle",
                                        icon_style: "far",
                                        items: [
                                            {
                                                label: "Level 4",
                                                icon: "dot-circle",
                                                icon_style: "far"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            content: {
                header: {
                    title: "Dashboard",
                    breadcrumbs: [
                        {
                            label: "Home",
                            target: "#"
                        },
                        {
                            label: "Dashboard v1"
                        }
                    ]
                },
                back: {
                    color: "success"
                },
                content: [
                    [
                        {
                            width: ["lg-3", 6],
                            content: {
                                type: "small-box",
                                content: {
                                    color: "info",
                                    content: [
                                        {
                                            type: "title",
                                            content: "101%"
                                        },
                                        {
                                            type: "paragraph",
                                            content: "Hello world"
                                        }
                                    ],
                                    ion_icon: "bag",
                                    footer: {
                                        content: [
                                            "More info",
                                            {
                                                type: "icon",
                                                content: {
                                                    icon: "arrow-circle-right"
                                                }
                                            }
                                        ],
                                        icon: "arrow-circle-right",
                                        target: "javascript:alert('More info!');"
                                    }
                                }
                            }
                        },
                        {
                            width: ["lg-3", 6],
                            content: {
                                type: "small-box",
                                content: {
                                    color: "success",
                                    content: [
                                        {
                                            type: "title",
                                            content: "101%"
                                        },
                                        {
                                            type: "paragraph",
                                            content: "Hello world"
                                        }
                                    ],
                                    ion_icon: "stats-bars",
                                    footer: {
                                        content: [
                                            "More info",
                                            {
                                                type: "icon",
                                                content: {
                                                    icon: "arrow-circle-right"
                                                }
                                            }
                                        ],
                                        icon: "arrow-circle-right",
                                        target: "javascript:alert('More info!');"
                                    }
                                }
                            }
                        },
                        {
                            width: ["lg-3", 6],
                            content: {
                                type: "small-box",
                                content: {
                                    color: "warning",
                                    content: [
                                        {
                                            type: "title",
                                            content: "44"
                                        },
                                        {
                                            type: "paragraph",
                                            content: "User Registrations"
                                        }
                                    ],
                                    ion_icon: "person-add",
                                    footer: {
                                        content: [
                                            "More info",
                                            {
                                                type: "icon",
                                                content: {
                                                    icon: "arrow-circle-right"
                                                }
                                            }
                                        ],
                                        target: "javascript:alert('More info!');"
                                    }
                                }
                            }
                        },
                        {
                            width: ["lg-3", 6],
                            content: {
                                type: "small-box",
                                content: {
                                    color: "danger",
                                    content: [
                                        {
                                            type: "title",
                                            content: "101%"
                                        },
                                        {
                                            type: "paragraph",
                                            content: "Hello world"
                                        }
                                    ],
                                    ion_icon: "pie-graph",
                                    footer: {
                                        content: [
                                            "More info",
                                            {
                                                type: "icon",
                                                content: {
                                                    icon: "arrow-circle-right"
                                                }
                                            }
                                        ],
                                        icon: "arrow-circle-right",
                                        target: "javascript:alert('More info!');"
                                    }
                                }
                            }
                        }
                    ],
                    [
                        {
                            width: 6,
                            content: {
                                type: "card",
                                content: {
                                    color: "gradient-warning",
                                    header: {
                                        color: "warning",
                                        content: [
                                            {
                                                type: "title",
                                                card: true,
                                                icon: "chart-pie",
                                                content: "Example card"
                                            },
                                            {
                                                type: "link",
                                                target: "javascript:alert('Card link!');",
                                                label: "Hello world"
                                            }
                                        ],
                                        tools: [
                                            {
                                                type: "badge",
                                                content: "3",
                                                color: "danger"
                                            },
                                            {
                                                type: "link",
                                                icon: "chart-pie",
                                                target: "javascript:alert('Card tool 1!');",
                                                content: "Hello world",
                                                button: ["tool", "sm"],
                                                color: "warning"
                                            },
                                            {
                                                type: "link",
                                                icon: "user",
                                                target: "javascript:alert('Card tool 2!');",
                                                button: ["tool", "sm"],
                                                color: "warning"
                                            }
                                        ]
                                    },
                                    content: {
                                        type: "flexbox",
                                        content: {
                                            type: "paragraph",
                                            content: "Card content"
                                        }
                                    },
                                    footer: {
                                        type: "flexbox",
                                        content: {
                                            type: "paragraph",
                                            content: "Card footer"
                                        }
                                    },
                                    overlay: {
                                        type: "icon",
                                        content: {
                                            icon: "sync-alt",
                                            big: true,
                                            spin: true
                                        }
                                    }
                                }
                            }
                        },
                        {
                            width: 6,
                            content: {
                                type: "card",
                                content: {
                                    header: {
                                        content: [
                                            {
                                                type: "title",
                                                card: true,
                                                content: "Form elements"
                                            }
                                        ]
                                    },
                                    form: {
                                        onsubmit: "alert('Form submitted!');"
                                    },
                                    content: [
                                        {
                                            type: "input",
                                            content: {
                                                type: "hidden",
                                                value: "Value",
                                                id: "hiddeninput1"
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Text input",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "text",
                                                    placeholder: "Placeholder",
                                                    value: "Value",
                                                    id: "textinput1"
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Disabled text input",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "text",
                                                    placeholder: "Placeholder",
                                                    value: "Value",
                                                    id: "textinput2",
                                                    disabled: true
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Success text input",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "text",
                                                    placeholder: "Placeholder",
                                                    value: "Value",
                                                    id: "textinput3",
                                                    valid: true
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Warning text input",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "text",
                                                    placeholder: "Placeholder",
                                                    value: "Value",
                                                    id: "textinput4",
                                                    warning: true
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Invalid text input",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "text",
                                                    placeholder: "Placeholder",
                                                    value: "Value",
                                                    id: "textinput5",
                                                    invalid: true
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Text input with addons",
                                            content: {
                                                type: "input-group",
                                                content: [
                                                    {
                                                        type: "input-prepend",
                                                        content: {
                                                            content: "Front",
                                                            icon: "envelope"
                                                        }
                                                    },
                                                    {
                                                        type: "input",
                                                        content: {
                                                            type: "text",
                                                            placeholder: "Placeholder",
                                                            value: "Value",
                                                            id: "textinput6"
                                                        }
                                                    },
                                                    {
                                                        type: "input-append",
                                                        content: {
                                                            content: "Back",
                                                            icon: "check"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Password input",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "password",
                                                    placeholder: "Placeholder",
                                                    value: "Value",
                                                    id: "passwordinput1"
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Text area",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "textarea",
                                                    placeholder: "Placeholder",
                                                    value: "Value",
                                                    id: "textarea1",
                                                    rows: 4
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Checkbox input",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "checkbox",
                                                    value: true,
                                                    id: "checkbox1",
                                                    label: "Checkbox label"
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Radio buttons",
                                            content: [
                                                {
                                                    type: "input",
                                                    content: {
                                                        type: "radio",
                                                        value: false,
                                                        id: "radio1",
                                                        name: "radioGroup1",
                                                        label: "Radio input A",
                                                    }
                                                },
                                                {
                                                    type: "input",
                                                    content: {
                                                        type: "radio",
                                                        value: true,
                                                        id: "radio2",
                                                        name: "radioGroup1",
                                                        label: "Radio input B",
                                                    }
                                                },
                                                {
                                                    type: "input",
                                                    content: {
                                                        type: "radio",
                                                        value: false,
                                                        id: "radio3",
                                                        name: "radioGroup1",
                                                        label: "Radio input C",
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            type: "form-group",
                                            label: "Select",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "select",
                                                    id: "select1",
                                                    value: "c",
                                                    options: {
                                                        "a": "Option A",
                                                        "b": "Option B",
                                                        "c": "Option C",
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            type: "form-group",
                                            label: "Select multiple",
                                            content: {
                                                type: "input",
                                                content: {
                                                    type: "select",
                                                    id: "select2",
                                                    multiple: true,
                                                    value: ["b", "c"],
                                                    options: {
                                                        "a": "Option A",
                                                        "b": "Option B",
                                                        "c": "Option C",
                                                    }
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    ],
                    [
                        {
                            width: 6,
                            content: {
                                type: "card",
                                content: {
                                    outline: true,
                                    color: "success",
                                    header: {
                                        content: [
                                            {
                                                type: "title",
                                                card: true,
                                                icon: "chart-pie",
                                                content: "Example card"
                                            },
                                            {
                                                type: "link",
                                                target: "javascript:alert('Card link!');",
                                                label: "Hello world"
                                            }
                                        ],
                                        tools: [
                                            {
                                                type: "pagination",
                                                small: true,
                                                items: [
                                                    {
                                                        target: "#",
                                                        label: "«"
                                                    },
                                                    {
                                                        target: "#",
                                                        label: "1"
                                                    },
                                                    {
                                                        target: "#",
                                                        label: "2"
                                                    },
                                                    {
                                                        target: "#",
                                                        label: "3"
                                                    },
                                                    {
                                                        target: "#",
                                                        label: "»"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    content: {
                                        type: "flexbox",
                                        content: {
                                            type: "paragraph",
                                            content: "Card content"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            width: 6,
                            content: {
                                type: "callout",
                                content: {
                                    color: "info",
                                    content: [
                                        {
                                            type: "title",
                                            size: 5,
                                            icon: "info",
                                            content: "Something happened"
                                        },
                                        {
                                            type: "paragraph",
                                            content: "Hello world"
                                        }
                                    ]
                                }
                            }
                        }
                    ],
                    [
                        {
                            width: 12,
                            content: {
                                type: "paragraph",
                                content: "Hello world"
                            }
                        }
                    ]
                ]
            },
            footer: {
                content: [
                    {
                        type: "strong",
                        content: "Hello world "
                    },
                    {
                        type: "link",
                        target: "javascript:alert('Footer link');",
                        content: "click me"
                    },
                    " Some more text.",
                    {
                        type: "float-right",
                        content: [
                            {
                                type: "strong",
                                content: "Hello from the "
                            },
                            "other side"
                        ]
                    }
                ]
            }
        };
        this.renderer = new Renderer(this.example_content);
    }
    
    on_form_submit(event) {
        console.log("Form submitted: " + event.srcElement.id);
        let input = document.getElementById(event.srcElement.id + "-input");
        if (input !== null) {
            alert("Form submitted: " + event.srcElement.id + ", value: " + input.value);
        } else {
            alert("Form submitted: " + event.srcElement.id);
        }
    }
}

function start_app() {
    app = new App(); 
}
