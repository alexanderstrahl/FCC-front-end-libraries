//React: Create a Controlled Form
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // change code below this line
      this.setState({submit: this.state.input})
      event.preventDefault()
      // change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* change code below this line */}
            <input placeholder="input"
              onChange = {this.handleChange.bind(this)} 
              value = {this.state.input}>
            </input>
            {/* change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* change code below this line */}
            <h1>{this.state.submit}</h1>
          {/* change code above this line */}
        </div>
      );
    }
  }
  