export const name="fire_hydrant-fill";
export const id="dl_92d1f2c919e04d2a98b5";
export const url=new URL("../icons/fire_hydrant-fill.svg?v=85c211a1ec50ad734afd326b0ecc73c484a62107ad339bcf6f074dae151adad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
