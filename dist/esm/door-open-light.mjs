export const name="door-open-light";
export const id="dl_a879be9c01744b99b34b";
export const url=new URL("../icons/door-open-light.svg?v=aa905a35084ccdc221be189c6ce3949eacfce86576ecb89c5961e9c85ac259a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
