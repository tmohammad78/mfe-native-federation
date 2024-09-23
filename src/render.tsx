
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
            <React.Suspense fallback="Loading ...">
                {/* <DomesticFlight /> */}
            </React.Suspense>
        </div>
    )
}

export default App;

export function renderApp(container: HTMLElement) {
    console.log(container,'container')
    ReactDOM.render(<App />, container);
}