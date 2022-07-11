import React, { Component } from 'react';
import logo from './logo-floyt.png';
import './App.css';
import Button from '@mui/material/Button';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import aws_exports from './aws-exports';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import ResponsiveAppBar from './customComponents/ButtonAppBar';
import FormDialog from './customComponents/FormDialog';

Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

class App extends Component {
  render(name) {
    return (
      <div>
        <ResponsiveAppBar >Test</ResponsiveAppBar>
        <div className="App">
        <SupplierList />
        <ProviderDetailView />
        </div>
      </div>
         
    );
  }
}

function createNewProviderListEntry() {
  FormDialog();
}

class SupplierList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('render');
    return (
      <div className='PartnerList'>
        <br/>
        <img className="Partner-list-logo" src={logo}/>
        <h2>Partner Repository (POC)</h2>
        <Button variant="contained" onClick={createNewProviderListEntry}>Add new partner</Button>
        <ListItem/>
      </div>
    );
  }
}

class ListItem extends Component {
  state = {
    listItems: []
  };

  render() {
    return (
      <React.Fragment>
        {this.state.listItems.map(listItem => (
          <p
          key={listItem}
          className='Provider-label'>
            {listItem}
          </p>
        ))}
      </React.Fragment>
    );
  }
}

class ProviderDetailView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ProviderDetailView'>
        <h1>This will be the detailview.</h1>
      </div>
    );
  }
}

export default withAuthenticator(App);
