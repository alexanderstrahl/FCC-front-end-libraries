//React: Use && for a More Concise Conditional
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
        
        return (
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
            {this.state.display && <h1>Displayed!</h1>} // if this.state.display is true then is displays Displayed!
          </div>
        );
      
    }
  };
  