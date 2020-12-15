import React, { Component } from "react"; // import from react

import { Window, App } from "proton-native"; // import the proton-native components
import styles from "./styles";

export default function Main(){
    return (
      <App>
        {/* you must always include App around everything */}
        <Window style={styles.mainWindow}>
          
        </Window>
      </App>
    );

}
