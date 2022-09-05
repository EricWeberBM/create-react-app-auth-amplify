import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PartnerDetail from "./PartnerDetail";
import { API, graphqlOperation } from "aws-amplify";
import { createProvider } from "../../graphql/mutations";

const initialState = {
  Provider: {
    id: null,
    Details: {
      Name: "",
      Description: "",
      HeadOfficeLocation: "EU",
      InfolineMail: "",
      ComplaintMail: "",
      Website: "",
    },
    EmailsWeReceive: {
      Voucher: false,
      Cancellation: false,
      Confirmation: false,
    },
    Properties: {
      IsSupplyingCars: false,
      ShouldPerformPriceCheck: false,
      HasCustomLookupPage: false,
    },
  },
  isLoading: false,
};

export const asyncSave = createAsyncThunk(
    //ToDo Block if is loading, update when ID not null. 
  "PartnerDetail/saveDetails",
  async (payload, api) => {
    //return await API.graphql(graphqlOperation(createProvider, {input: payload}));
  }
);

const slice = createSlice({
  name: "PartnerDetail",
  initialState,
  reducers: {
    setProviderDetails: (state, { payload }) => {
      state.Provider.Details = {
        ...state.Provider.Details,
        [payload.property]: payload.value,
      };
    },
    setProviderEmailsWeReceive: (state, { payload }) => {
      state.Provider.EmailsWeReceive = {
        ...state.Provider.EmailsWeReceive,
        [payload.property]: payload.value,
      };
    },
    setProviderProperties: (state, { payload }) => {
      state.Provider.Properties = {
        ...state.Provider.Properties,
        [payload.property]: payload.value,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncSave.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(asyncSave.fulfilled, (state) => {
      state.isLoading = false;
      // ToDo save the id
    });
    builder.addCase(asyncSave.rejected, (state, {payload}) => {
      state.isLoading = false;
      console.log(payload);
    })
  },
});

export const {
  setProviderDetails,
  setProviderEmailsWeReceive,
  setProviderProperties,
} = slice.actions;

export default slice.reducer;
