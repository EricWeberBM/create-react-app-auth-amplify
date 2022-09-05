import { configureStore} from "@reduxjs/toolkit";
import PartnerSlice from "../features/partner-detail/PartnerDetail.slice";

const store = configureStore({
    reducer:{
        PartnerSlice
    }
});

export default store;