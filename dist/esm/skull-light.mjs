export const name="skull-light";
export const id="dl_1a7b44141d7c03274505";
export const url=new URL("../icons/skull-light.svg?v=ce720a33132b5689fc6760d3a08ccd9c54978f01a2a0c481071c2e397981e1af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
