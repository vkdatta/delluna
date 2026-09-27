export const name="lucid_1-car-front";
export const id="dl_9d6b1e35e4d04211b868";
export const url=new URL("../icons/lucid_1-car-front.svg?v=42af99e39197d275e55d87d1f24aa8b2751ad6aeb897950fd143c3dbb42ae1f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
