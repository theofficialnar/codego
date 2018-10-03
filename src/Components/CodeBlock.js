import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/solarized_dark";

class CodeBlock extends React.Component {
  state = {
    code: `function doSomething() {
  // Type you answer here and click RUN
  return "Let's get started"
}

doSomething();`
  };

  onLoad = () => {
    console.log("test");
  };

  onChange = (value, event) => {
    console.log(`event: ${event}`);
    console.log(`value: ${value}`);
    this.setState({ code: value });
  };

  runCode = () => {
    let code = eval(this.state.code);
    console.log(code);
    this.props.submitAnswer(code);
  };

  render() {
    const { code } = this.state;

    return (
      <React.Fragment>
        <AceEditor
          mode="javascript"
          theme="solarized_dark"
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          defaultValue={code}
          value={code}
          tabSize={2}
          commands={[
            {
              name: "copy",
              bindKey: { win: "Ctrl-V", mac: "Command-V" },
              exec: () => alert("No cheating.")
            }
          ]}
          style={{
            margin: "0 auto"
          }}
        />
        <button className="btn btn-run" onClick={this.runCode}>
          RUN
        </button>
      </React.Fragment>
    );
  }
}

export default CodeBlock;
