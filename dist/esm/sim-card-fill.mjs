export const name="sim-card-fill";
export const id="dl_7b1984070b8e4096a81f";
export const url=new URL("../icons/S/sim-card-fill.svg?v=29cdeb6cd0899b6ec59a130d7abebc52b68b9f13e2aaebc69011edac8396ae79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
