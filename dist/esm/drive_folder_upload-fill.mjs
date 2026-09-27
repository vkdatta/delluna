export const name="drive_folder_upload-fill";
export const id="dl_9e0709ec80592d0ccd7e";
export const url=new URL("../icons/drive_folder_upload-fill.svg?v=0d4ab69a93d8bf443920966ebfb07ccbba2af5c4666ce6ad2492a0ea609bf839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
