export const name="agender-fill";
export const id="dl_6e0455285c1e413bb07b";
export const url=new URL("../icons/agender-fill.svg?v=02d07d939b61f0b82bdd350ffebb22f1c5c202d0b5629127057974402ba78184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
