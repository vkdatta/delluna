export const name="sync_desktop";
export const id="dl_d5884e4f5d4b4a2ea07e";
export const url=new URL("../icons/sync_desktop.svg?v=b43c4f6d72fd94ffba1cf46c95540ebe47b22dd34ef961c3e68e415102b68d39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
