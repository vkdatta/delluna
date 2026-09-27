export const name="photo_size_select_large";
export const id="dl_440a8222d5536b377ef2";
export const url=new URL("../icons/photo_size_select_large.svg?v=9611c8ffa73e0fc4c4da53a51dc2551d256aad001ed5cb229961be25ed1a3fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
