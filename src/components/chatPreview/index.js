import tpl from './chatPreview.hbs';
import './chatPreview.scss';

export default (title, lastMessage, time, unreadMessages, avatarPath) => tpl({
  title,
  lastMessage,
  time,
  unreadMessages,
  avatarPath,
});
