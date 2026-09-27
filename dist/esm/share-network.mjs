export const name="share-network";
export const id="dl_710ecbda1ea4cbffef03";
export const url=new URL("../icons/share-network.svg?v=4907de2455eccb9b2f765c152b3e859a9cb5d1a31c9450cce1c03392411439a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
