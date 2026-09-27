export const name="broadcast-duotone";
export const id="dl_29abcb573c20480e8f01";
export const url=new URL("../icons/broadcast-duotone.svg?v=3a46c4b30bf47fa2b3150d16c212bbb61ab514c27428ec5f2050d190d525990f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
