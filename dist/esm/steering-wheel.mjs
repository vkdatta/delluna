export const name="steering-wheel";
export const id="dl_eba76c7108d146918ece";
export const url=new URL("../icons/S/steering-wheel.svg?v=64b540806a248ba3906210cfb9348655cab32345a847fccff8715c2761915cb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
