function showRigging() {
    const isJunior = document.getElementById("juniorGirl").checked;
    const boatType = document.getElementById("boatTypeSelect").value;
    const isSingle = boatType === "1x";
    const weight = parseFloat(document.getElementById("weightInput").value);
  
    // Always hide both first
    document.getElementById("riggingTable1xjwh").style.display = "none";
    document.getElementById("riggingTable1xjwl").style.display = "none";
  
    if (isJunior && isSingle && weight && weight > 58) {
      document.getElementById("riggingTable1xjwh").style.display = "block"; // Heavy
    } else if (isJunior && isSingle && weight && weight <= 58) {
      document.getElementById("riggingTable1xjwl").style.display = "block"; // Light
    } else {
        const alertModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
        alertModal.show();
      }
}
  function selectBoat(el) {
    document.getElementById('boatDropdownBtn').textContent = el.textContent;
  }
