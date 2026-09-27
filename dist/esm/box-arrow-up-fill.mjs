export const name="box-arrow-up-fill";
export const id="dl_5f92ecfd890046a58d8f";
export const url=new URL("../icons/box-arrow-up-fill.svg?v=e3a116dcb886cfbbad1620ea1be8e01ed4bd78ffeca6c69dcb3467595c53b48c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
