export const name="drive_folder_upload";
export const id="dl_2471a11172904b9591e2";
export const url=new URL("../icons/drive_folder_upload.svg?v=f212bde0ba3a1b221929f78b6598476aa078b7f6599e8406bde538b36f7e56b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
