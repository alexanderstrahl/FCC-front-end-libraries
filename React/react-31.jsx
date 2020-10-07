//React: Pass a Callback as Props

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* change code below this line */ }
          <div>
           <GetInput
             input={this.state.inputValue}
             handleChange={this.handleChange}/>
           <RenderInput input={this.state.inputValue}/>
         </div>
          { /* change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Get Input</h2>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      )
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };
  