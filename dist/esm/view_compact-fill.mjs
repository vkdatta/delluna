export const name="view_compact-fill";
export const id="dl_88fedcc0d5764daa7d4e";
export const url=new URL("../icons/view_compact-fill.svg?v=f008e66c55431832e57682cd419a0b2526fcec92942b10be413d9050cf39fa3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
