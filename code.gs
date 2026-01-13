// Code.gs
function saveRequest(data) {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Requests");
  sheet.appendRow([
    new Date(),
    data.customer,
    data.device,
    data.issue
  ]);
  return "Saved successfully!";
}
        