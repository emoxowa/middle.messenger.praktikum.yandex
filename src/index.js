import header from "./layouts/header";
import template from "./index.hbs";

//pages
import login from './pages/login';
import registration from "./pages/registration";
import profile from "./pages/profile";
import changeInfo from "./pages/changeInfo";
import changePassword from "./pages/changePassword";
import error from "./pages/error";
import chatlist from "./pages/chatlist";

//components 
import button from "./components/button";
import avatar from "./components/avatar";
import burgerMenu from "./components/burgerMenu";
import chatPreview from "./components/chatPreview";

const root = document.getElementById("root");
const headerElement = document.getElementById("header");

const getRoute = () => {
  const path = window.location.pathname;
  switch (path) {
    case "/":
      return getChatlist();
    case "/signin":
      return loginPage();
    case "/signup":
      return registerPage();
    case "/profile":
      return getProfilePage();
    case "/changeinfo":
      return updateProfileInfoPage();
    case "/changepassword":
      return updateProfilePasswordPage();
    case "/500":
      return internalServerError();
    default:
      return notFoundPage();
  }
}

function getChatlist() {
  return template({
    page: chatlist({
      burgerMenu: burgerMenu(),
      chatPreview: chatPreview(
        "Андрей",
        "Изображение",
        "10:49",
        "2",
        "images/avatar.png"
      ),
    }),
  });
}

function loginPage() {
  return template({
    page: login({
      title: 'Вход',
      button: button("Авторизоваться"),
      sign_link: "Еще не зарегистрированы?",
    }),
  });
}

function registerPage() {
  return template({
    page: registration({
      title: 'Регистрация',
      button: button("Зарегистрироваться"),
      sign_link: "Войти",
    }),
  });
}

function getProfilePage() {
  return template({
    page: profile({
      first_name: "Иван",
      avatar: avatar("images/avatar.png"),
    }),
  });
}

function updateProfileInfoPage() {
  return template({
    page: changeInfo({
      button: button("Сохранить"),
      avatar: avatar("images/avatar.png"),
    }),
  });
}

function updateProfilePasswordPage() {
  return template({
    page: changePassword({
      button: button("Сохранить"),
      avatar: avatar("images/avatar.png"),
    }),
  });
}

function internalServerError() {
  return template({
    page: error({
      title: "500",
      subtitle: "Мы уже фиксим",
    }),
  });
}

function notFoundPage() {
  return template({
    page: error({
      title: "404",
      subtitle: "Не туда попали",
    }),
  });
}

root.innerHTML = getRoute();
headerElement.innerHTML = header();