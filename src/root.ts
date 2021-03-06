import {StdOp ,BaseMedium , J, Domain, j, Cell , Construct, Composite, isPrimative} from 'jungle-core'


const headattrs = ['style', 'class', 'alt', 'src', 'href', 'type', 'action', 'required', 'id']


// /**
//  * a class for injecting dynamic content into a page, it is a source 
//  */
// class Feed extends Construct {
    
// }

// class Router extends Cell {
    
// }

// class RoutingMedium extends BaseMedium {
    
//     fanIn:false
//     fanOut:

//     inductSeat(){
        
//     }
//     inductTarget

//     connect(){

//     }

//     retractSeat
//     retractTarget

//     disconnect(){
//     }

// }


class HTMLElementCell extends Cell {

    elem: HTMLElement;

    applyHead(head) {
        super.applyHead(head)
        this.elem = document.createElement(head.elem)

        for(let att in head){
            if(headattrs.indexOf(att) >= 0){
                this.elem.setAttribute(att, head[att])
            }
        }
    }

    _patch(body){
        // if the body is text it is html 

        if(typeof body === 'string'){
            this.elem.innerHTML = body
        }else{
            super._patch(body)
        }
    }

    addStrange(key, val){
        /** So that text content is added in order */

        if(isPrimative(val)){
            this.elem.insertAdjacentText('beforeend', val)
        }

        super.addStrange(key, val)

    }

    attach(mount: HTMLElementCell, name) {
        super.attach(mount, name)
        mount.elem.appendChild(this.elem)
    }

    detach(mount: HTMLElementCell, name) {
        super.attach(mount, name)
        mount.elem.removeChild(this.elem)
    }

}

export class DOMRoot extends Cell {

    elem:HTMLElement;

    applyHead(head) {
        super.applyHead(head)
        this.elem = document.getElementById(head.mount)
    }

}

export const Dom = new Domain()
for (let domElemTag of [
  'div', 'p', 'a','b','i','h1','h2','h3', 'h4', 'h5', 'h6',
  'style', 'img', 'ol', 'ul', 'li', 'span', 'br', 
  'table', 'tr','thead','td','form', 'input', 'label']
){
    Dom.define(domElemTag, j(HTMLElementCell, {head: {elem:domElemTag}}))
}

const entry = {
    basis:DOMRoot,
    domain:Dom
}

export default entry