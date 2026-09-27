export const name="bell-z-light";
export const id="dl_673f70a01a0544198417";
export const url=new URL("../icons/bell-z-light.svg?v=dfab3cf4c709fe8e5e4760cda4e6ad13a7cc4386d9806baa7bdbbf1224f1fc68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
