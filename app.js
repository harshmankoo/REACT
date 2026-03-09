
// this is done using the JSDOM manuplation

console.log("hello")
const hey = document.getElementById("divcss")
const by = document.createElement("h1")
by.innerText= "Hey This is my First React Task"
hey.appendChild(by)

// this is done using REACT Dom manuplation



    // <div id="heading">
    //     <h1>hey i am creating div using react </h1>
    // </div>

const heading = React.createElement("h1", {}, "Hey! I am using this");
const root = ReactDOM.createRoot(document.getElementById("divcss"));
root.render(heading);

