export const name="scrollable_header-fill";
export const id="dl_aa6c8b517102d7c8efd9";
export const url=new URL("../icons/scrollable_header-fill.svg?v=9f3d950bc3c5420298b6b8fa92f14042cdd665adee88dd5d20549d0143c56683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
