import React, {Component, useState, useEffect} from "react";
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DraftEditor = () => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    return (
        <div className="App">
            <header className="App-header">
                Rich Text Editor Example
            </header>
            <Editor
                editorState={editorState}
                onChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </div>
    );
}

export default DraftEditor;