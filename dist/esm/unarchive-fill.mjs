export const name="unarchive-fill";
export const id="dl_635971e21d9b4a215f5a";
export const url=new URL("../icons/unarchive-fill.svg?v=20bf4f09b849ae35a3f590b8c4a47b622164eaf3300cef502cd741ad42a7d8cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
