import tpl from "./chatPreview.hbs";
import "./chatPreview.scss";

export default (title='', last_message='', time='', unread_count='', avatarPath) => {
  return tpl({
    title,
    last_message,
    time,
    unread_count,
    avatarPath,
  });
};