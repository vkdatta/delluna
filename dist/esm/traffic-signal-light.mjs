export const name="traffic-signal-light";
export const id="dl_b599a958a1d8af3f3f16";
export const url=new URL("../icons/traffic-signal-light.svg?v=5db503980dcfdd1b987ae8a910615109d4010ba512a95218a928abb8fd4e30cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
