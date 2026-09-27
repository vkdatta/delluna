export const name="density_large-fill";
export const id="dl_364c7f8215f993ea24e2";
export const url=new URL("../icons/density_large-fill.svg?v=4e1286d092733925516f45776cbd0e003745d0850ee1d300d33d4aa541810812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
