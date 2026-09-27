export const name="filter_5-fill";
export const id="dl_4e724d40ed9c70e31e89";
export const url=new URL("../icons/filter_5-fill.svg?v=b03e68b9476db1a8f91c1aa776f8bd489431bccaee7a4668abd4c5a86e0248b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
