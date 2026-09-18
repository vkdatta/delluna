export const name="time_auto";
export const id="dl_c9d3d4cf56484a83be8a";
export const url=new URL("../icons/T/time_auto.svg?v=f9632f2a1f2a5e7ab8c7021f449740e70e4743f01cd5be605a0b80332760b945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
