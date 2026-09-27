export const name="stat_3";
export const id="dl_a3350e45efa2687b6203";
export const url=new URL("../icons/stat_3.svg?v=c71ed1ac320d1c1aef64cbe9c8a7fc32aabb50589453a4ea6ff51a107b29a909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
