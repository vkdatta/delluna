export const name="wand_shine";
export const id="dl_ae7d0bb6372e4e0d8f06";
export const url=new URL("../icons/W/wand_shine.svg?v=bf8b4276735a8e80ed3ab65b320d48392b83c9fec258f2ef64fac84f0ecf2975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
