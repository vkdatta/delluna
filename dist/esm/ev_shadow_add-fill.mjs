export const name="ev_shadow_add-fill";
export const id="dl_95ece648653dc0c72189";
export const url=new URL("../icons/ev_shadow_add-fill.svg?v=32ac357250c0e5c5e467ee429cb5d5bf65dfe24da14478772ed6e1e968a0366a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
