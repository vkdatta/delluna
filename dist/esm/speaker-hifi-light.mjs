export const name="speaker-hifi-light";
export const id="dl_dc557d778eca8c972c5c";
export const url=new URL("../icons/speaker-hifi-light.svg?v=220ca128bd36deec735416792b30b3911e36ef1fb2340372cb704082cace7d77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
