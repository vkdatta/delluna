export const name="kitchen";
export const id="dl_8ec816f7185d4df0b58a";
export const url=new URL("../icons/K/kitchen.svg?v=6a85922aabb5ef16bc786f59781345b00b5d7f0c3a03cd5518ebbe64f71c3180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
