import React from "react";
import Cards from "./Cards";
import Contacts from "../contacts";

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//      <Cards
//      name ="AMAN"
//      email ="aman@gmail.com"
//      img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//      tel ="99999999"
//      />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Cards
        name={Contacts[0].name}
        email={Contacts[0].email}
        img={Contacts[0].imgURL}
        tel={Contacts[0].phone}
      />
      <Cards
        name={Contacts[1].name}
        email={Contacts[1].email}
        img={Contacts[1].imgURL}
        tel={Contacts[1].phone}
      />
      <Cards
        name={Contacts[2].name}
        email={Contacts[2].email}
        img={Contacts[2].imgURL}
        tel={Contacts[2].phone}
      />
    </div>
  );
}

export default App;
