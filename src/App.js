import React, { Component } from 'react';
import './App.css';
import {
    Button,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";
// import {Table, Column, Cell} from 'fixed-data-table';
import Form from "react-jsonschema-form";




// import ipcRenderer from 'electron';
//
// // In renderer process (web page).
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
//
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log(arg) // prints "pong"
// })
// ipcRenderer.send('asynchronous-message', 'ping')

var schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const menu = (
    <Menu>
        <MenuItem text="New" />
        <MenuItem text="Open" />
        <MenuItem text="Save" />
        <MenuDivider />
        <MenuItem text="Settings..." />
    </Menu>
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
        </p>
        <Popover content={menu} position={Position.BOTTOM_RIGHT}>
            <Button text="Actions" />
        </Popover>
        <Form schema={schema}/>
      </div>
    );
  }
}

export default App;
