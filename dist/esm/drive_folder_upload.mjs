export const name="drive_folder_upload";
export const id="dl_db7584e8488463439f6c";
export const url=new URL("../icons/drive_folder_upload.svg?v=64ff1c14257af183d26f75483b7bdb3e56568f1be1de1ea8b06dd674af5fe139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
