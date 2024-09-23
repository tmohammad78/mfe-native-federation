// import { renderApp } from "./render";

const app = document.querySelector('#app');
const page = app.appendChild(document.createElement('div'));

// renderApp(page);

// // loadRemoteModule({
// //   remoteName: "wrapper",
// //   exposedModule: "./productPage",
// // }).then(({ renderProductPage }) => {
// //   const root = document.querySelector("#app");
// //   renderProductPage(root);
// // });

import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { loadRemoteModule } from "@softarc/native-federation";

const DomesticFlight = React.lazy(() => loadRemoteModule({
    remoteName: "domestic",
    exposedModule: "./domesticFlight",
  }).then(({ renderDomestic }) => {
    const root = document.querySelector("#domestic");
    renderDomestic(root);
}))
  

function App() {
    return (
        <div>
            This is the container app
            <Header onSignOut={() => {}} isSignedIn={true}/>
        </div>
    )
}

export default App;


const container = document.getElementById('app');

ReactDOM.render(<App />, container);