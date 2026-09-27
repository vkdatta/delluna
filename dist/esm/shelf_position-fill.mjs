export const name="shelf_position-fill";
export const id="dl_e1c948b5dba53c6233ab";
export const url=new URL("../icons/shelf_position-fill.svg?v=e6feb3ee035d43bd901ee215c5f99b8502fcbf6137a72d628ed282e21d94b658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
