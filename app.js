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
                    title: "Hello world",
                    breadcrumbs: [
                        {
                            label: "Hello",
                            target: "#"
                        },
                        {
                            label: "world"
                        }
                    ]
                },
                content: [
                    [
                        {
                            width: 6,
                            content: {
                                type: "card",
                                content: {
                                    header: {
                                        title: "Example card",
                                        links: [
                                            {
                                                target: "javascript:alert('Card link!');",
                                                label: "Hello world"
                                            }
                                        ],
                                        tools: [
                                            {
                                                icon: "chart-pie",
                                                target: "javascript:alert('Card tool 1!');",
                                                label: "Hello world"
                                            },
                                            {
                                                icon: "user",
                                                target: "javascript:alert('Card tool 2!');"
                                            }
                                        ]
                                    },
                                    content: {
                                        type: "flexbox",
                                        content: {
                                            type: "paragraph",
                                            content: "Hello world"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            width: 6,
                            content: {
                                content: "Hello world"
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
                content: "Left",
                content_right: "Right"
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
