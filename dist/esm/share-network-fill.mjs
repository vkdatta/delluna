export const name="share-network-fill";
export const id="dl_4472e1df339c48e28f1d";
export const url=new URL("../icons/S/share-network-fill.svg?v=1b23169dd2d0cb3bb748fcd61b222089aefdecbeef7ca7a0f49d26ef0378cf3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
