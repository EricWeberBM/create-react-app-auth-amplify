import { Box, TextField } from "@mui/material";
import { Component } from "react";
import logo from '../../logo-floyt.png';


const style = {
        height: "100%",
        width: "100%",
        background: "purple",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

class ProviderDetailView extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div style={style}>
            <img height="250px" style={{"object-fit": "scale-down"}} width="250px" src={logo} alt={logo}></img>
            <TextField id="outlined-basic" label="Providername" variant="outlined" placeholder='SunnyCars' value={this.props.value}/>
        </div>
      );

    }
  }

  export default ProviderDetailView;