import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input:''
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  componentWillMount(){
    this.setState({input:init_text});
  };
  render() {
    return (
      
      <div className="App">
        <div className="editor-container container">
          <p><span className="tag editor-tag">Editor</span></p>
          <div className="editor" id="editor">
            <textarea name="editor" id="" cols="30" rows="10" value={this.state.input} onChange={this.handleChange}></textarea>
          </div>
        </div>
        <div className="preview-container container">
          <p ><span className="tag preview-tag " >Preview</span></p>
          <div className="preview" id="preview">
            <div className = "well"
            dangerouslySetInnerHTML={{__html: marked(this.state.input, {renderer: renderer})}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const init_text = (`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`)
export default App;
