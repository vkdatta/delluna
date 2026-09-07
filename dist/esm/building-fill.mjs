export const name="building-fill";
export const id="dl_b8def6afbea04353b5fe";
export const url=new URL("../icons/building-fill.svg?v=46723faedc14ac19a48af7b985c8d94e07ca1e754d4067dcfa4d94578cda705f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
