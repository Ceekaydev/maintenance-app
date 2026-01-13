// Code.gs
function saveRequest(data) {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Requests");
  sheet.appendRow([
    new Date(),
    data.customer,
    data.device,
    data.phone,
    data.issue
  ]);
  return "Request saved successfully!";
}

