export const name="sync_desktop-fill";
export const id="dl_0d72753c6efa137970c2";
export const url=new URL("../icons/sync_desktop-fill.svg?v=56e86e28c0a0c8e319766622b6511622d2900e236db14fe6cd25df210067c7a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
