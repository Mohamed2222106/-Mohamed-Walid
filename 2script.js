function openMenu(tableId, event) {
  if (event.target.tagName === "BUTTON") return;
  activeTableId = tableId;
  document.getElementById("menu-popup").style.display = "block";
}

tableDiv.addEventListener("click", (event) => openMenu(table.id, event));
