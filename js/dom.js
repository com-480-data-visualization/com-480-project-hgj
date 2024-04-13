var _ = (elem)=>{
    return document.getElementById(elem);
};

// Create Dom Element
function CDE(pTag, pAttributes){
    var newElem = document.createElement(pTag);
    pAttributes = typeof(pAttributes) !== 'undefined' && pAttributes.length > 0 ? pAttributes : false;
    if(pAttributes){
        pAttributes.forEach(attribute => {
            newElem.setAttribute(attribute[0], attribute[1]);
        });
    }
    return newElem;
}

makeSureClassExists = (pElement,pClassName)=>{
    if(pElement.classList.contains(pClassName)){
        return true
    }else{
        pElement.classList.add(pClassName)
        return true
    }
}

makeSureClassDoesNotExist = (pElement,pClassName)=>{
    if(pElement.classList.contains(pClassName)){
        pElement.classList.remove(pClassName)
        makeSureClassDoesNotExist(pElement, pClassName)
    }else{
        return true
    }
}