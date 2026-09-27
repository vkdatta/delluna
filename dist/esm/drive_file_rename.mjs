export const name="drive_file_rename";
export const id="dl_148f214011a2389c5b6e";
export const url=new URL("../icons/drive_file_rename.svg?v=8d11d2fca0a91fbca303076a84913d29462bcf8ced157e3a30c015757aa32196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
