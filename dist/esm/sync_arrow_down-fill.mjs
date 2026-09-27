export const name="sync_arrow_down-fill";
export const id="dl_3e0f0792bd1136ca8f0f";
export const url=new URL("../icons/sync_arrow_down-fill.svg?v=503dc6f37f678af06087251f6094796a39546660f6425fc390249e7dd4b5abdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
