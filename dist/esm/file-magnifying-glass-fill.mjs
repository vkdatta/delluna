export const name="file-magnifying-glass-fill";
export const id="dl_a61b3776235c411aa9bc";
export const url=new URL("../icons/file-magnifying-glass-fill.svg?v=f15188cf2896a1dc76bf8e504726171a4b0f8b36522346fea0c32c71356f305d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
