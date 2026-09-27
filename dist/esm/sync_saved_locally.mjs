export const name="sync_saved_locally";
export const id="dl_8ad99ef4b5339e768c63";
export const url=new URL("../icons/sync_saved_locally.svg?v=4c1b547d10b6b89cea055568c563f71e19737704af5d4e054b82700b0bcc9d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
