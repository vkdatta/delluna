export const name="skip_next-fill";
export const id="dl_0c13f95c660f4069841f";
export const url=new URL("../icons/skip_next-fill.svg?v=2357c96ae98cce68f419abdc89f8440796987d6788d514336ec69226a9b1d3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
