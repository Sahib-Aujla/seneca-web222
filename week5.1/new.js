function checkPassword(password) {
  if (str.length < 8 || str.length > 32) return false;

let exp=/[A-Z0-9]/;
let yes=exp.test(str);

  return true;
}
checkPassword("hsabfibf")

checkPassword("ahsiufgiu")
