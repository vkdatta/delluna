export const name="lucid_3-square-arrow-out-down-left";
export const id="dl_352cd52442f04bc1a4df";
export const url=new URL("../icons/lucid_3-square-arrow-out-down-left.svg?v=157b34d26d4ab9f3294e890aef22135a8c6dfbe821b99fb9c5eb9525c23b3b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
