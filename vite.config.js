import { defineConfig } from "vite";
import dotenv from "dotenv";
// import NiceSelect from "nice-select2";
dotenv.config(); // load env vars from .env
// NiceSelect.config();
export default defineConfig({
  define: {
    API_SEKOLAH: `"${process.env.API_SEKOLAH}"`,
    API_OPENAI: `"${process.env.API_OPENAI}"`,
    API_PROVINSI: `"${process.env.API_PROVINSI}"`,
  },
  //....
});
