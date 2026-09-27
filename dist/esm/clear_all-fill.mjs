export const name="clear_all-fill";
export const id="dl_debb23443aca1440a5cf";
export const url=new URL("../icons/clear_all-fill.svg?v=aa58016d4c51f04d86a29f80c62f64e3e0045d44f175a5a5caacdd09c8bf8664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
