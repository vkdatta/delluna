export const name="background_grid_small-fill";
export const id="dl_b258150f2df352b99c31";
export const url=new URL("../icons/background_grid_small-fill.svg?v=4c73e24818599761f48eb2c2f91fc59ad148e7b8b97485512ca978d4a639680a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
