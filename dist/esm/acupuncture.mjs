export const name="acupuncture";
export const id="dl_60d16482f7a24d6abfb3";
export const url=new URL("../icons/acupuncture.svg?v=f8ac47579fa7e6417b66305950b26388e4574fa73a706bcf0186bccf4039d8ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
