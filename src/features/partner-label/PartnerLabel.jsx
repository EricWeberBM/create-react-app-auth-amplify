import { Component } from "react";

class PartnerLabel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editModeEnabled: false,
      }
    }
    
    handleEditClick() {
      this.setState({ editModeEnabled: !this.state.editModeEnabled });
    }
  
    render() {
      return (
        <form>
          <input type="text" value={this.props.number} disabled={!this.state.editModeEnabled}/>
          <a role="button" title="Edit" onClick={this.handleEditClick.bind(this)}>Edit..</a>
        </form>
      );
    }
  }

  export default PartnerLabel;