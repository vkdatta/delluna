export const name="tile_large-fill";
export const id="dl_3daa15f6799f00872e0c";
export const url=new URL("../icons/tile_large-fill.svg?v=288371d91635545bd5bb5bead0a466c8028c875d219eeb3c031795f13768de51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
