export const name="drive_folder_upload-fill";
export const id="dl_e9af903715b01a1a32dd";
export const url=new URL("../icons/drive_folder_upload-fill.svg?v=2378e8aa0610f1343fa2047e95426da157d5a6868bc2f9ee3003d4b59418572f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
