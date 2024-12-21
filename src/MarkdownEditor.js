import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMarkdown } from './redux/actions';
import { marked } from 'marked';
import './MarkdownEditor.css'; // Import CSS

const MarkdownEditor = () => {
  const dispatch = useDispatch();
  const markdownText = useSelector((state) => state.markdownText);

  const handleChange = (event) => {
    dispatch(setMarkdown(event.target.value));
  };

  return (
    <div className="markdown-editor-container">
      <textarea
        className="markdown-textarea"
        value={markdownText}
        onChange={handleChange}
        placeholder="Enter markdown text here..."
        rows="10"
        cols="50"
      />
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: marked(markdownText) }}
      />
    </div>
  );
};

export default MarkdownEditor;
