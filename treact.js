//Updated 12/2
// const node = document.createElement('h1')
// node["title"] = 'foo'

// const text = document.createTextNode("")
// text["nodeValue"] = 'Hello'

// node.appendChild(text)
// container.appendChild(node)
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => 
        typeof child === "object" 
        ? child 
        : createTextElement(child)
      ),
    }
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}

const treact = {
  createTextElement
}



const container = document.getElementById('root')





















// //Render method as used in React - ReactDOM.render(<App />, document.getElementById('root'))

// function render(element, parentDom) {
//   const { type, props } = element;
//   const dom = document.createElement(type);
  
//   //Check to see if Object.props starts with the word 'on' to check for event listening method
//   const isListener = name => name.startsWith('on');

//   //Check what type of event it is
//   Object.keys(props).filter(isListener).forEach(name => {
//     const eventType = name.toLowerCase().substring(2)
//     dom.addEventListener(eventType, props[name]);
//   })

//   const isAttribute = name => !isListener(name) && name != "children";
//   Object.keys(props).filter(isAttribute).forEach(name => {
//     dom[name] = props[name];
//   })

//   //Render children
//   const childElements = props.children || [];
//   childElements.forEach(childElement => render(childElement, dom));

//   //Append dom to parent
//   parentDom.appendChild(dom);
// }

// const TEXT_ELEMENT = "TEXT ELEMENT"

// //createElement function to convert JSX to JS
// function createElement(type, config, ...args) {
//   const props = Object.assign({}, config);
//   const hasChildren = args.length > 0;
//   const rawChildren = hasChildren ? [].concat(...args) : [];
//   props.children = rawChildren
//     .filter(child => child != null &&  child !== false)
//     .map(child => child instanceof Object ? child : createTextElement(child))
//   return { type, props };
// }

// function createTextElement(value) {
//   return createElement(TEXT_ELEMENT, {nodeValue: value});
// }


// // const element = {
// //   type: "div",
// //   props: {
// //     id: "container",
// //     children: [
// //       { type: "input", props: { value: "foo", type: "text" } },
// //       { type: "a", props: { href: "/bar" } },
// //       { type: "span", props: {} }
// //     ]
// //   }
// // };