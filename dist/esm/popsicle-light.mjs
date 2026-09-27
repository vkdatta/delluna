export const name="popsicle-light";
export const id="dl_2f8413dc165e45f0a41e";
export const url=new URL("../icons/popsicle-light.svg?v=e34e8229063ecd06a0882f61b7032a7b2b2d0a69581a1c34a2c687bed4f9aed1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
