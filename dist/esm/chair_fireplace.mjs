export const name="chair_fireplace";
export const id="dl_5febc23043e0b2d6f28f";
export const url=new URL("../icons/chair_fireplace.svg?v=cbdf72f835a85bb0228c63347a96e7a264516518afda9be26260134d31dd0812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
