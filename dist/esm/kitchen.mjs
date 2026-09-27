export const name="kitchen";
export const id="dl_7d3d99193023ea2a318d";
export const url=new URL("../icons/kitchen.svg?v=6a85922aabb5ef16bc786f59781345b00b5d7f0c3a03cd5518ebbe64f71c3180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
