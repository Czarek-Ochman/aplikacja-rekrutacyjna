function chceckForm() {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var phone = phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
  document.getElementById("phoneNumber").value = "";

  document.getElementById("result").innerHTML = "Wynik:";
  document.getElementById("resultName").innerHTML = "Imie: " + name;
  document.getElementById("resultPhone").innerHTML =
    "Telefon: +48 " + phoneNumber;
  document.getElementById("resultFormatPhone").innerHTML =
    "Telefon: +48 " + phone;

  chceckGender(name);
}

function chceckGender(name) {
  if (document.getElementById("woman").checked) {
    document.getElementById("resultGender").innerHTML = "Kobieta";
  } else if (document.getElementById("man").checked) {
    document.getElementById("resultGender").innerHTML = "Mężczyzna";
  } else {
    if (name.toLowerCase().charAt(name.length - 1) === "a") {
      document.getElementById("resultGender").innerHTML = "Płeć: Kobieta";
    } else
      document.getElementById("resultGender").innerHTML = "Płeć: Mężczyzna";
  }
}
