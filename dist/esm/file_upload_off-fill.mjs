export const name="file_upload_off-fill";
export const id="dl_90746faaf248750f9af6";
export const url=new URL("../icons/file_upload_off-fill.svg?v=b7e78f50cb4f6dee195d65cd9adea9923d2986a96c91de30d7a3a70966ca96f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
