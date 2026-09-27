export const name="briefcase-bold";
export const id="dl_c2dbd1c7725e416389ba";
export const url=new URL("../icons/briefcase-bold.svg?v=dc43d1def75b9c2936c599e9f75335090c5cd9390925fbed020e26d0d73a01cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
