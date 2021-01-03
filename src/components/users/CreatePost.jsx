import React, { useEffect, useState } from "react";
import axios from 'axios';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import DOMPurify from 'dompurify';

const CreatePost = (props) => {

    const [user, setuser] = useState({ login: '', password: '' });

    useEffect(() => {
        var a = localStorage.getItem('myData');
        var b = JSON.parse(a);
        setuser(b)
    }, []);

    const storedData = localStorage.getItem('myData');

    let _contentState = ContentState.createFromText('Вводите текст сюда');
    const raw = convertToRaw(_contentState)
    const [contentState, setContentState] = useState(raw) // ContentState JSON

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const  [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }


    const apiUrl = "http://localhost:3000/post/";
    const [data, setdata] = useState({ title: '', content: '', author_id: user._id, email: '', password: '' })

    const id_random = Math.ceil(Math.random()*100000000);

    const Publicate = (e) => {
        handleEditorChange(contentState);
        console.log(contentState);

        e.preventDefault();
        debugger;
        const data1 = {
            title: data.title,
            content: contentState,
            author_id: user._id,
        };
        axios.post(apiUrl, data1)
            .then((result) => {
                debugger;
                console.log(result.data);
                if (result.data.Status === 'Invalid')
                    alert('Ошибка!');
                else {
                    alert("Вы успешно создали пост!");
                    props.history.push('/');
                }
            })
    }

    const onChange = (e) => {
        e.persist();
        debugger;
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    return(
        <div className="main" id="s12">
            <div className="create-post-editor">
                <header className="App-header">
                    <label htmlFor="title">Заголовок: </label>
                    <input type="text" id="title" name="title" onChange={onChange} value={data.title} placeholder="Введите заголовок поста"/>
                </header>
                <Editor
                    defaultContentState={contentState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                />
            </div>
            <span className="accept-b" onClick={Publicate}>Опубликовать</span>
        </div>
    );
}

export default CreatePost;