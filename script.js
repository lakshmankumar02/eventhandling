/*************** Event ***************/
// Events allow you to write JavaScript code that reacts to certain situations. Examples of
// events include:
// The user clicks the mouse button
// The Web page loading
// A form field being changed
// As of today, there are 2 ways to handle events in JavaScript.
// 1. By using an event handler
// 2. By adding an event listener

/*************** Event Handlers ***************/

// JavaScript provides various kinds of event handlers that get triggered based on 
// specific actions on the HTML elements. Few of the event handlers are:

// onclick onload onmouseover onmouseout onkeydown onkeyup

function myFunction(){
    console.log("I was clicked");
}

const mouseOver = ()=>{
    console.log("Mouse Over");
}

const mouseOut = ()=>{
    console.log("Mouse Out");
}

const keyDown = ()=>{
    console.log("keyDown");
}

const keyUp = ()=>{
    console.log("keyUp");
}

