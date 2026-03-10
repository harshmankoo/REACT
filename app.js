// this is done using the JSDOM manuplation

console.log("hello");
const hey = document.getElementById("divcss");
const by = document.createElement("h1");
by.innerText = "Hey This is my First React Task";
hey.appendChild(by);

// =========================================================

// this is done using REACT Dom manuplation

// <div>
//     <h1>Hey! I am using this</h1>
// </div>

const heading = React.createElement("h1", {}, "Hey! I am using this");
const newheading = ReactDOM.createRoot(document.getElementById("divcss"));
newheading.render(heading);

// ==========================================
// {
//      <div id="newmaindiv">
//           <div id="firstdiv">
//                 <div id="seconddiv">
// //         <h1>Hey Here i am creating a nested react elements</h1>
//                 </div>
//             </div>
//         </div>
// }

const newmaindiv = React.createElement(
  "div",
  { id: "newmaindiv" },

  React.createElement(
    "div",
    { id: "firstdiv" },
    React.createElement(
      "div",
      { id: "seconddiv" },
      React.createElement(
        "h1",
        {},
        "HEY HERE I AM CREATING A NESTED REACT ELEMENT",
      ),
    ),
  ),
);
const newroot = ReactDOM.createRoot(document.getElementById("heart"));
newroot.render(newmaindiv);
 

// ==================
