export const name="lucid_3-nut-off";
export const id="dl_266298d274824d8885ca";
export const url=new URL("../icons/lucid_3-nut-off.svg?v=7bfd20176dde247a65a412a8c52d495d0250f8da308ea682e4ce59fdb1cbdad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
