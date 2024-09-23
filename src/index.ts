import './style.css';
import { initFederation } from "@softarc/native-federation";

(async () => {
  await initFederation({
    // "international": "http://localhost:2004/remoteEntry.json",
    "domestic": "https://domestic-flight-app.vercel.app/remoteEntry.json",
  });
  await import("./bootstrap");
})();
