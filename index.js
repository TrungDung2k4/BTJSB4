// Bài 1
function calculatePlusPoint(region, candidateType) {
  var plusPoint = 0;
  if (region === "X") plusPoint += 0;
  else if (region === "A") plusPoint += 2;
  else if (region === "B") plusPoint += 1;
  else plusPoint += 0.5;
  if (candidateType === "0") plusPoint += 0;
  else if (candidateType === "1") plusPoint += 2.5;
  else if (candidateType === "2") plusPoint += 1.5;
  else plusPoint += 1;
  return plusPoint;
}
document.getElementById("decide").onclick = () => {
  var standardPoint = +document.getElementById("standardPoint").value;
  var region =
    document.getElementById("region").options[
      document.getElementById("region").selectedIndex
    ].value;
  var candidateType =
    document.getElementById("candidateType").options[
      document.getElementById("candidateType").selectedIndex
    ].value;
  var point1 = +document.getElementById("point1").value;
  var point2 = +document.getElementById("point2").value;
  var point3 = +document.getElementById("point3").value;
  var sumPoint = point1 + point2 + point3;
  var plusPoint = calculatePlusPoint(region, candidateType);
  var totalPoint = sumPoint + plusPoint;
  var decision;
  if (point1 === 0 || point2 === 0 || point3 === 0) decision = "Không Đậu";
  else decision = totalPoint >= standardPoint ? "Đậu" : "Không Đậu";
  document.getElementById("decision").innerHTML = decision;
};
// Bài 2
function calculatePaymentKW(numberKW) {
  var pay = 0;
  if (numberKW < 50) pay += 500 * numberKW;
  else if (numberKW < 100) pay += 500 * 49 + 650 * (numberKW - 49);
  else if (numberKW < 200) pay += 500 * 49 + 650 * 50 + 850 * (numberKW - 99);
  else if (numberKW < 350)
    pay += 500 * 49 + 650 * 50 + 850 * 100 + 1100 * (numberKW - 199);
  else
    pay +=
      500 * 49 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (numberKW - 349);
  return pay;
}
document.getElementById("calculateKW").onclick = () => {
  var fullname = document.getElementById("fullname").value;
  var numberKW = +document.getElementById("numberKW").value;
  var paymentKW = `Họ Và Tên: ${fullname} - Tiền Điện: ${calculatePaymentKW(
    numberKW
  )}`;
  document.getElementById("paymentKW").innerHTML = paymentKW;
};
// Bài 3
function calculateTaxPayment(taxedIncome) {
  var taxPayment;
  if (taxedIncome <= 60000000) taxPayment = 0.05 * taxedIncome;
  else if (taxedIncome <= 120000000) taxPayment = 0.1 * taxedIncome;
  else if (taxedIncome <= 210000000) taxPayment = 0.15 * taxedIncome;
  else if (taxedIncome <= 384000000) taxPayment = 0.2 * taxedIncome;
  else if (taxedIncome <= 624000000) taxPayment = 0.25 * taxedIncome;
  else if (taxedIncome <= 960000000) taxPayment = 0.3 * taxedIncome;
  else taxPayment = 0.35 * taxedIncome;
  return taxPayment;
}
document.getElementById("calculateTax").onclick = () => {
  var fullName = document.getElementById("fullName").value;
  var totalYearlyIncome = +document.getElementById("totalYearlyIncome").value;
  var dependentMembers = +document.getElementById("dependentMembers").value;
  var taxedIncome = totalYearlyIncome - 4000000 - dependentMembers * 1600000;
  var calculatedTax = `Họ Tên: ${fullName} - Tiền Thuế: ${calculateTaxPayment(
    taxedIncome
  )}`;
  document.getElementById("calculatedTax").innerHTML = calculatedTax;
};
// Bài 4
function showConnectionNumbers() {
  if (
    document.getElementById("customerType").options[
      document.getElementById("customerType").selectedIndex
    ].value === "B"
  ) {
    document.getElementById("connectionNumbers").style.display = "block";
    document.getElementById("connectionNumbers").style.marginTop = "25px";
  } else {
    document.getElementById("connectionNumbers").style.display = "none";
  }
}
function calculateConnectionNumbers(customerType) {
  if (customerType === "B")
    return +document.getElementById("connectionNumbers").value;
  return 0;
}
document.getElementById("calculateTVPayment").onclick = () => {
  var customerType =
    document.getElementById("customerType").options[
      document.getElementById("customerType").selectedIndex
    ].value;
  var customerID = document.getElementById("customerID").value;
  var connectionNumbers = calculateConnectionNumbers(customerType);
  var additionalConnectionNumbers =
    connectionNumbers > 10 ? connectionNumbers - 10 : 0;
  var premiumChannels = +document.getElementById("premiumChannels").value;
  var fee1;
  var fee2;
  var fee3;
  var totalPayment;
  if (customerType === "H") {
    fee1 = 4.5;
    fee2 = 20.5 + 5 * additionalConnectionNumbers;
    fee3 = 7.5 * premiumChannels;
  } else {
    fee1 = 15;
    fee2 = 75 + 5 * additionalConnectionNumbers;
    fee3 = 50 * premiumChannels;
  }
  totalPayment = fee1 + fee2 + fee3;
  document.getElementById(
    "calculatedTVPayment"
  ).innerHTML = `Mã Khách Hàng: ${customerID} - Tiền Cáp: $${totalPayment}`;
};
