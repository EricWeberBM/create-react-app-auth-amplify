import React, { Component } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import aws_exports from './aws-exports';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import ResponsiveAppBar from './customComponents/ButtonAppBar';
import SupplierList from './features/supplier-list/SupplierList';
import { getPartner, listPartners } from './graphql/queries';
import ProviderDetailView from './features/partner-detail/PartnerDetail';

Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  // we pay per request so keep it disabled
  componentDidMount() {
    //const graphqlResult = API.graphql(graphqlOperation(listPartners)).then((response) => 
    //{console.log(response);
    // this.setState({listItems: response.data.listPartners.items})});

    //test
  };

  render(name) {
    return (
      <div>
        <ResponsiveAppBar >Test</ResponsiveAppBar>
        <div className="App">
        <SupplierList PartnerList={this.state.listItems}/>
        <ProviderDetailView value="Hello World" />
        </div>
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

export default withAuthenticator(App);
