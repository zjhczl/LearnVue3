import _ from 'lodash'

function divComp(){
    var eleDiv = document.createElement('div')
    eleDiv.innerHTML=_.join(['hello','webpack','!'],'')
    return eleDiv
}

document.body.appendChild(divComp())