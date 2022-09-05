import { Component } from "react";
import Button from '@mui/material/Button';
import logo from '../../logo-floyt.png';
import CreateProviderDialog from "../../customComponents/CreateProviderDialog";

class SupplierList extends Component 
{
  constructor(props) {
    super(props);
    this.createNewProviderListEntry = this.createNewProviderListEntry.bind(this);
    this.state = {ModalVisible: false};
  }

  // Todo show availabe providers in List

  render() {
    return (
      <div className='PartnerList'>
        <br />
        <img className="Partner-list-logo" src={logo} />
        <h2>Partner Repository</h2>
        <CreateProviderDialog ModalVisible={this.state.ModalVisible} handleClose={() => this.setState({ModalVisible: false})}/>
        <Button variant="contained" onClick={this.createNewProviderListEntry}>Add new partner</Button>
        <br />
        <ul>
          {this.props.PartnerList?.map(({name}) => <li>
            {name}
          </li>)}
        </ul>
      </div>
    );
  }
  
  createNewProviderListEntry() {
    this.setState({
      ModalVisible: true
    });
  }
}



export default SupplierList;