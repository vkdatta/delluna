export const name="lucid_3-road";
export const id="dl_dac779fc47844aeaa653";
export const url=new URL("../icons/lucid_3-road.svg?v=af10ffd604c1e3a753d18ce4eae34605a98d3212798ce72f65ecd5fcc5c109f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
