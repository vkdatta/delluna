export const name="vibrate-duotone";
export const id="dl_2b324e1fc0914fed97d0";
export const url=new URL("../icons/V/vibrate-duotone.svg?v=817c0749a445695460ca330acd2a7587d7f71a666467281f63358cb1ed5439fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
