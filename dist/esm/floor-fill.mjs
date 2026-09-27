export const name="floor-fill";
export const id="dl_d717dcde7f1bef471c63";
export const url=new URL("../icons/floor-fill.svg?v=8af3908aeeb99110640f528e1edfd1a6fcc767b4b8f1d5cca746d38137c6d2c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
