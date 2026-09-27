export const name="fire_hydrant";
export const id="dl_c998daebc3e7b59891d1";
export const url=new URL("../icons/fire_hydrant.svg?v=dac41efb6d064a163c1edbd069282be5108727b855e04b243f99cbb741899211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
