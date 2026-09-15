export const name="electric_meter";
export const id="dl_cfeb4ed9c00b442c87a2";
export const url=new URL("../icons/E/electric_meter.svg?v=b8e6a26362e71c5a910ee915e9e4de5feea030d409547f72f4ac0393d0ee7145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
