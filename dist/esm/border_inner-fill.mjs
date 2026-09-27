export const name="border_inner-fill";
export const id="dl_041c58024a3d2bf5e988";
export const url=new URL("../icons/border_inner-fill.svg?v=2d2fcd84d2252aaf46eacf49ecdfd1700c43744aa1607b09e553c507c5344295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
