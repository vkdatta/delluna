export const name="delivery_truck_bolt-fill";
export const id="dl_849e81ea778ca114d7e9";
export const url=new URL("../icons/delivery_truck_bolt-fill.svg?v=67ea1ed802f60d8e0294d563660c6da2151d6399d788a7bbc189f5c5c889e063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
