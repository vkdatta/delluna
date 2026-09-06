export const name="lucid_3-move-down-left";
export const id="dl_3a830a957f5a489d89c5";
export const url=new URL("../icons/lucid_3-move-down-left.svg?v=f572bb75ad0b9375f8e5db1b2feb954d7cf281f691515a88a121d5572080301a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
