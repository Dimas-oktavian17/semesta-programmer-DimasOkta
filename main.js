// Import Library or dependencies
import "./src/style.css";
// import NiceSelect from "./node_modules/nice-select2/dist/js";
NiceSelect.bind(document.getElementById("a-select"), {
  searchable: true,
  placeholder: "select",
  searchtext: "Kaldera",
  selectedtext: "geselecteerd",
});
