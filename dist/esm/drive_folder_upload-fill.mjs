export const name="drive_folder_upload-fill";
export const id="dl_1e3daa2fe93d45eb95bb";
export const url=new URL("../icons/D/drive_folder_upload-fill.svg?v=6551b31c34c58952188caf5790455954eb93e334e965751cdb6e6a580e4b1cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
