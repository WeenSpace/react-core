import {
  title,
  description,
  mrAuto,
  mlAuto,
} from "assets/jss/react-core";
import customSelectStyle from "assets/jss/react-core/customSelectStyle";

const contactStyle = {
  title,
  mrAuto,
  mlAuto,
  ...customSelectStyle,
  description: {
    ...description,
    marginBottom: "70px",
  },
  textCenter: {
    textAlign: "center!important",
  },
  selectUnderlineRoot: {
    "& > div": {
      marginTop: "13px",
    },
  },
  aboutUs: {
    padding: "80px 0px",
  },
};

export default contactStyle;
