export const name="ear-light";
export const id="dl_b860f6366d3d49afb014";
export const url=new URL("../icons/ear-light.svg?v=105a50e3793648c6d5981db70e81c97755f34577a824e8787eedb0769eaeaf46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
