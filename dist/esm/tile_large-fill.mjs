export const name="tile_large-fill";
export const id="dl_d169b85d77544b0f8bd7";
export const url=new URL("../icons/T/tile_large-fill.svg?v=e1692d857fe84d4cbb767284278cb902975f4bdaee4a3f9fb0fdad438395ad5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
