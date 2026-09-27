export const name="share-fat-fill";
export const id="dl_0f5548b07a6526e8fbaa";
export const url=new URL("../icons/share-fat-fill.svg?v=fe2f8761e4308199460b5d072a412fb430017c3d22bcee99a6b8f5010f2298b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
