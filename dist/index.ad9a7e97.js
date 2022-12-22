let React = {
    createElement: (tag, props, children)=>{
        if (typeof tag == "function") return tag(props);
        const element = {
            tag,
            props: {
                ...props,
                children
            }
        };
        console.log(element);
        return element;
    }
};
const App = ()=>/*#__PURE__*/ React.createElement("div", {
        className: "react-2022",
        __source: {
            fileName: "index.tsx",
            lineNumber: 13,
            columnNumber: 3
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 14,
            columnNumber: 5
        },
        __self: this
    }, "Hello, person"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 17,
            columnNumber: 5
        },
        __self: this
    }, "Text p"));
/*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "index.tsx",
        lineNumber: 23,
        columnNumber: 1
    },
    __self: this
});

//# sourceMappingURL=index.ad9a7e97.js.map
