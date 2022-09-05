import {
  TextField,
  Switch,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Input,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import logo from "../../logo-floyt.png";
import {
  asyncSave,
  setProviderDetails,
  setProviderEmailsWeReceive,
  setProviderProperties,
} from "./PartnerDetail.slice";

const TextFieldLeftAligned = (props) => (
  <TextField
    inputProps={{ style: { textAlign: "left" } }}
    autoComplete="off"
    className="ProviderAttribute"
    variant="outlined"
    {...props}
  >
    {props.children}
  </TextField>
);

const MapStateToProps = (state) => ({
  provider: state.PartnerSlice.Provider,
  isloading: state.PartnerSlice.isLoading,
});

const MapDispatchToProps = (dispatch) => ({
  setProviderDetails: (ProviderDetailsKey, ProviderDetailsValue) =>
    dispatch(
      setProviderDetails({
        value: ProviderDetailsValue,
        property: ProviderDetailsKey,
      })
    ),
  setProviderEmailsWeReceive: (
    ProviderEmailsWeReceiveKey,
    ProviderEmailsWeReceiveValue
  ) =>
    dispatch(
      setProviderEmailsWeReceive({
        value: ProviderEmailsWeReceiveValue,
        property: ProviderEmailsWeReceiveKey,
      })
    ),
  setProviderProperties: (ProviderPropertiesKey, ProviderPropertiesValue) =>
    dispatch(
      setProviderProperties({
        value: ProviderPropertiesValue,
        property: ProviderPropertiesKey,
      })
    ),
  saveProvider: (Provider) => {
    dispatch(asyncSave(Provider))
  }
});

class ProviderDetailView extends Component {
  constructor(props) {
    super(props);
    this.saveImage = this.saveImage.bind(this);
    this.renderProviderDetails = this.renderProviderDetails.bind(this);
    this.renderProviderEmailsWeReceive =
      this.renderProviderEmailsWeReceive.bind(this);
    this.renderProviderProperties = this.renderProviderProperties.bind(this);
  }

  state = { image: logo };

  saveImage(event) {
    console.log(event.target.files[0]);
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  }

  renderProviderDetails() {
    return Object.keys(this.props.provider.Details).map((key) => (
      <TextFieldLeftAligned
        key={key}
        label={key}
        value={this.props.provider.Details[key]}
        onChange={(e) => this.props.setProviderDetails(key, e.target.value)}
      />
    ));
  }

  renderProviderEmailsWeReceive() {
    return Object.keys(this.props.provider.EmailsWeReceive).map((key) => (
      <FormControlLabel
        key={key}
        control={<Switch />}
        label={key}
        checked={this.props.provider.EmailsWeReceive[key]}
        onChange={(e) =>
          this.props.setProviderEmailsWeReceive(key, e.target.checked)
        }
      />
    ));
  }

  renderProviderProperties() {
    return Object.keys(this.props.provider.Properties).map((key) => (
      <FormControlLabel
        key={key}
        control={<Switch />}
        label={key}
        checked={this.props.provider.Properties[key]}
        onChange={(e) =>
          this.props.setProviderProperties(key, e.target.checked)
        }
      />
    ));
  }

  render() {
    return (
      <div className="ProviderDetailDiv">
        <ButtonGroup variant="contained">
          <Button
          onClick={() => this.props.saveProvider(this.props.provider)}
          disabled={this.props.isloading}>Save
          </Button>
          <Button color="error">Delete</Button>
        </ButtonGroup>
        <img
          className="LogoInput"
          onClick={() => document.getElementById("fileUpload").click()}
          height="150px"
          style={{ objectFit: "scale-down" }}
          src={this.state.image}
          alt={logo}
        ></img>
        <input
          id="fileUpload"
          type="file"
          style={{ display: "none" }}
          onChange={this.saveImage}
        ></input>
        {this.renderProviderDetails()}
        <div className="ProviderDetailControlDiv">
          <FormGroup className="FormGroupBorder">
            <FormLabel>Emails we receive:</FormLabel>
            {this.renderProviderEmailsWeReceive()}
          </FormGroup>
          <FormGroup className="FormGroupBorder">
            <FormLabel>Properties:</FormLabel>
            {this.renderProviderProperties()}
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(ProviderDetailView);
