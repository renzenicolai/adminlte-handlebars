'use strict';

class Renderer {
    constructor(initial_content = {}) {
        this.templates = {};
        this.compile_templates();
        this.render(initial_content);
    }
    
    compile_templates() {
        Handlebars.registerHelper({
            eq:     function (v1, v2)      { return v1 === v2; },
            ne:     function (v1, v2)      { return v1 !== v2; },
            lt:     function (v1, v2)      { return v1 < v2;   },
            gt:     function (v1, v2)      { return v1 > v2;   },
            lte:    function (v1, v2)      { return v1 <= v2;  },
            gte:    function (v1, v2)      { return v1 >= v2;  },
            and:    function ()            { return Array.prototype.slice.call(arguments).every(Boolean); },
            or:     function ()            { return Array.prototype.slice.call(arguments, 0, -1).some(Boolean); },
            list:   function (v1)          { return Array.isArray(v1); },
            length: function (v1)          { return v1.length; },
            string: function (v1)          { return (typeof v1 === "string"); },
            isset:  function (v1)          { return (typeof v1 !== "undefined"); },
            isin:   function (list, value) { return list.includes(value); },
            isinobjinlist: function (list, value, key) {
                for (var i in list) {
                    var item = list[i];
                    if (item[key] === value) return true;
                }
                return false;
            },
            replace_newlines: (text) => {
                if (typeof text === "string") {
                    text = Handlebars.Utils.escapeExpression(text);
                    return new Handlebars.SafeString(text.split("\n").join("<br />"));
                }
                return text;
            },
            current_id: () => {
                if (typeof window.handlebars_incremental_identifier !== "number") {
                    window.handlebars_incremental_identifier = 0;
                }
                return window.handlebars_incremental_identifier;
            },
            next_id: () => {
                if (typeof window.handlebars_incremental_identifier !== "number") {
                    window.handlebars_incremental_identifier = 0;
                }
                return window.handlebars_incremental_identifier++;
            },
            uppercase: (text) => {
                return text.toUpperCase();
            },
            lowercase: (text) => {
                return text.toLowerCase();
            }
        });

        Handlebars.registerPartial("navbar", document.getElementById("tpl-navbar").innerHTML);
        Handlebars.registerPartial("navbar_nav_item", document.getElementById("tpl-navbar-nav-item").innerHTML);
        Handlebars.registerPartial("navbar_dropdown", document.getElementById("tpl-navbar-dropdown").innerHTML);
        Handlebars.registerPartial("sidebar", document.getElementById("tpl-sidebar").innerHTML);
        Handlebars.registerPartial("sidebar_nav", document.getElementById("tpl-sidebar-nav").innerHTML);
        Handlebars.registerPartial("sidebar_nav_item", document.getElementById("tpl-sidebar-nav-item").innerHTML);
        Handlebars.registerPartial("content", document.getElementById("tpl-content").innerHTML);
        Handlebars.registerPartial("footer", document.getElementById("tpl-footer").innerHTML);
        Handlebars.registerPartial("content_row", document.getElementById("tpl-content-row").innerHTML);
        Handlebars.registerPartial("content_column", document.getElementById("tpl-content-column").innerHTML);
        Handlebars.registerPartial("content_element", document.getElementById("tpl-content-element").innerHTML);
        Handlebars.registerPartial("content_element_inner", document.getElementById("tpl-content-element-inner").innerHTML);
        Handlebars.registerPartial("icon", document.getElementById("tpl-icon").innerHTML);
        Handlebars.registerPartial("card", document.getElementById("tpl-card").innerHTML);
        Handlebars.registerPartial("flexbox", document.getElementById("tpl-flexbox").innerHTML);

        this.templates["page"] = Handlebars.compile(document.getElementById("tpl-page").innerHTML);
        this.templates["navbar"] = Handlebars.compile(document.getElementById("tpl-navbar").innerHTML);
        this.templates["sidebar"] = Handlebars.compile(document.getElementById("tpl-sidebar").innerHTML);
        this.templates["content"] = Handlebars.compile(document.getElementById("tpl-content").innerHTML);
        this.templates["footer"] = Handlebars.compile(document.getElementById("tpl-footer").innerHTML);
    }

    render(content) {
        document.getElementById('page').innerHTML = this.templates["page"](content);
    }
    
    render_navbar(content) {
        document.getElementById('navbar').innerHTML = this.templates["navbar"](content);
    }
    
    render_sidebar(content) {
        document.getElementById('sidebar').innerHTML = this.templates["sidebar"](content);
    }
    
    render_content(content) {
        document.getElementById('content').innerHTML = this.templates["content"](content);
    }
    
    render_footer(content) {
        document.getElementById('footer').innerHTML = this.templates["footer"](content);
    }
}
