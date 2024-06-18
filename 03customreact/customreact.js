function customRender(reactElements, customRoot){
    /*
    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.children

    domElement.setAttribute('href', reactElements.props.href)
    domElement.setAttribute('href', reactElements.props.target)

    customRoot.appendChild(domElement)
    */
    //It is static functionality to create react.
    
    
    /*
    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.children

    for(const prop in reactElements.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElements.props[prop])
    }
    customRoot.appendChild(domElement)
    */
    //It is dynamic functionality to create react.
}

const reactElements = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Hit Me!"
}

const customRoot = document.querySelector('#root')

customRender(reactElements, customRoot)