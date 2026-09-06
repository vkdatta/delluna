export const name="hand-withdraw-bold";
export const id="dl_2938d87af8d44b2e931b";
export const url=new URL("../icons/hand-withdraw-bold.svg?v=779cf176528215afd9f665d989aec4aa853ece3b7fa0b1659cdac2d1eefd353f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
