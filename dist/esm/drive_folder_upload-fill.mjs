export const name="drive_folder_upload-fill";
export const id="dl_2a51b5adeb0b5b871fd9";
export const url=new URL("../icons/drive_folder_upload-fill.svg?v=6551b31c34c58952188caf5790455954eb93e334e965751cdb6e6a580e4b1cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
