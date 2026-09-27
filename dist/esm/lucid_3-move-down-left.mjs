export const name="lucid_3-move-down-left";
export const id="dl_3a830a957f5a489d89c5";
export const url=new URL("../icons/lucid_3-move-down-left.svg?v=c5d6ce5f5ca98aea0960bf35ffe9688eff7f831e1f165109e1a5c529daebfceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
