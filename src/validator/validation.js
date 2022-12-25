//----------------------------------- Email -----------------------------------
const isValidEmail = function (value) {
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  };
//------------------------------ Phone number ---------------------------------
  const isValidMobile = function (mobile) {
    if (/^[0]?[6789]\d{9}$/.test(mobile)) {
      return true
    }
    return false
  }

  
//---------------------------------- Name ----------------------------------
const isValidName = function (name) {
  
    if(name.trim().length === 0){return false}
    if (/^[a-zA-Z ,.'-]+$/.test(name)) {
      return true;
    }
    return false
  };
//---------------------------------- Date ----------------------------------
  const isValidDate = function (value) {
    let dateFormatRegex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
    if (dateFormatRegex.test(value)) {
      return true
    } else {
      return false
    }
  }
  module.exports = { isValidEmail, isValidName, isValidMobile, isValidDate }
