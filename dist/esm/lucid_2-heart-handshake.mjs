export const name="lucid_2-heart-handshake";
export const id="dl_b36807da6a454a8abc5e";
export const url=new URL("../icons/lucid_2-heart-handshake.svg?v=5f4af2af329dc2abeb786ce11b011bd69de572e096323ab6150d8848533fb96f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
