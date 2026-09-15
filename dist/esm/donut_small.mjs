export const name="donut_small";
export const id="dl_3076df78b15246a2af5e";
export const url=new URL("../icons/D/donut_small.svg?v=a03e636f76e583301a0790f9ca0321547a14cf9d642fa48e08ab07eecc01cde6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
