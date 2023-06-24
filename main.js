// Import Library or dependencies
import "./src/style.css";
// import NiceSelect from "./node_modules/nice-select2/dist/js";
NiceSelect.bind(document.getElementById("a-select"), {
  searchable: true,
  placeholder: "select",
  searchtext: "Kaldera",
  selectedtext: "geselecteerd",
});
NiceSelect.bind(document.getElementById("prov"), {
  searchable: true,
  placeholder: "select",
  searchtext: "Kaldera",
  selectedtext: "geselecteerd",
});
NiceSelect.bind(document.getElementById("kota"), {
  searchable: true,
  placeholder: "select",
  searchtext: "Kaldera",
  selectedtext: "geselecteerd",
});
NiceSelect.bind(document.getElementById("kec"), {
  searchable: true,
  placeholder: "select",
  searchtext: "Kaldera",
  selectedtext: "geselecteerd",
});
NiceSelect.bind(document.getElementById("sekolah"), {
  searchable: true,
  placeholder: "select",
  searchtext: "Kaldera",
  selectedtext: "geselecteerd",
});
async function getJenjang() {
  try {
    let response = await fetch(
      "https://api-sekolah-indonesia.vercel.app/sekolah/SD?page=1&perPage=5"
    );
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getJenjang();
