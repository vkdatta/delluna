export const name="crosshair-bold";
export const id="dl_e318177c87ea4662a2ca";
export const url=new URL("../icons/crosshair-bold.svg?v=602da0b3c48f14d8043f9bd536e0d344706055d56ce1d4f5be95eb675013bd8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
