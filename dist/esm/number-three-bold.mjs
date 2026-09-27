export const name="number-three-bold";
export const id="dl_b1e59941997f4c579986";
export const url=new URL("../icons/number-three-bold.svg?v=2c46445860097c4269195b67e9a070ad595d2185824da238be094a051d80b2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
