export const name="moved_location";
export const id="dl_9ca4198b31d2a0958013";
export const url=new URL("../icons/moved_location.svg?v=de2480f6d16c0ccd887a6e74a16fef8449934a0c375fd7bd266225e3aaece526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
