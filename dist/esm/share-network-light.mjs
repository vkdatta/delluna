export const name="share-network-light";
export const id="dl_b1e2347384f296ef94f2";
export const url=new URL("../icons/share-network-light.svg?v=1aaf779d797544d05ac071a4da8018cf1f1847a988fdb09ea319bcf9c7282d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
