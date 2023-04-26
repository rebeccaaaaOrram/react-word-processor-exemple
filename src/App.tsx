import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
  return (
    <>
      <DocumentEditorContainerComponent
        id="container"
        height={"590px"}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
      />
    </>
  );
}

export default App;
