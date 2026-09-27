export const name="raw_off";
export const id="dl_5a69eb982fb3917e1c13";
export const url=new URL("../icons/material_symbols/raw_off.svg?v=9273c464c9875591ef1e093fa29e17d1f843631d6180e5b44fbaad55d65d5364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
