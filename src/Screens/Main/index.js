import React, { useState } from "react"; // import from react

import { Window, App, TextInput, TouchableOpacity, Text } from "proton-native"; // import the proton-native components
import styles from "./styles";

export default function Main(){
    const [downloadUrl, setDownloadUrl] = useState('');

    function dowloadFile(){
        console.log(downloadUrl);
    }
    return (
      <App>
        {/* you must always include App around everything */}
        <Window style={styles.mainWindow}>
            <TextInput style={styles.urlInput} onChangeText={value => setDownloadUrl(value)}/>
            <TouchableOpacity style={styles.buttonDownload} onPress={dowloadFile}>
                <Text style={styles.textButton}>Download</Text>
            </TouchableOpacity>
        </Window>
      </App>
    );

}
