export const name="windmill-fill";
export const id="dl_206a3acf716da788e745";
export const url=new URL("../icons/windmill-fill.svg?v=358bc8530624480f4f77b0b5fbc46849eb3e1311cfb92a76cabc92a7333a279e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
