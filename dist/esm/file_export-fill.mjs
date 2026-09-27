export const name="file_export-fill";
export const id="dl_870213bad072daaa406d";
export const url=new URL("../icons/file_export-fill.svg?v=4bb9b3f115ea6f1f2e2c8b1001bdb602899b4ab7c6dfdcaa13370503d4ddf31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
