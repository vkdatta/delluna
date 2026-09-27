export const name="on_hub_device";
export const id="dl_a6b94756214b1bb3268d";
export const url=new URL("../icons/on_hub_device.svg?v=1c8fcc4a248482d151f005b1d7d261dcee5dadb66a3a87ff8c1a967bcff2ca15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
