import tpl from "./avatar.hbs";
import "./avatar.scss";

export default (path) => {
  return tpl({ path });
};
