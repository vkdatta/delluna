export const name="share-network-fill";
export const id="dl_2d96f9df5a2597610b7e";
export const url=new URL("../icons/share-network-fill.svg?v=1b23169dd2d0cb3bb748fcd61b222089aefdecbeef7ca7a0f49d26ef0378cf3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
