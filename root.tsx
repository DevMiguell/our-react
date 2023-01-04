import App from "./App";

let React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag == "function") {
      try {
        return tag(props);
      } catch ({ promise, key }) {
        promise.then(data => {
          console.log(promise);
          promiseCache.set(key, data);
          rerender();
        })
        return { tag: 'h1', props: { children: ['I AM LOADING'] } }
      }
    }
    var element = { tag, props: { ...props, children } };
    //    console.log( element );
    return element;
  },
};

//to know if data is ready we implement cache, a closure, not global
const promiseCache = new Map();

const createResouce = (thingThatReturnsSomething, key) => {
  if (promiseCache.has(key)) {
    return promiseCache.get(key);
  }
  throw { promise: thingThatReturnsSomething(), key };
}

//Moving parts of our app
const states = []
let stateCursor = 0;

const useState = (initialState) => {
  const FROZENCURSOR = stateCursor;
  states[FROZENCURSOR] = states[FROZENCURSOR] || initialState;

  console.log(states);
  const setState = (newState) => {
    states[FROZENCURSOR] = newState;
    rerender();
  };
  stateCursor++;

  return [states[FROZENCURSOR], setState]
}



const renderer = (reactElement, container) => {
  if (['string', 'number'].includes(typeof reactElement)) {
    container.appendChild(document.createTextNode(String(reactElement)));
    return;
  }
  const actualDomElement = document.createElement(reactElement.tag);
  if (reactElement.props) {
    Object.keys(reactElement.props).filter(p => p != 'children').forEach(p => actualDomElement[p] = reactElement.props[p]);
  }
  if (reactElement.props.children) {
    reactElement.props.children.forEach(child => renderer(child, actualDomElement));
  }
  //append root to the container
  container.appendChild(actualDomElement);

}
export { useState, createResouce, React }

const rerender = () => {
  stateCursor = 0;
  document.querySelector("#app").firstChild.remove();
  renderer(<App />, document.querySelector('#app'));
}

//windows.app the id is also a variable
renderer(<App />, document.querySelector('#app'));
