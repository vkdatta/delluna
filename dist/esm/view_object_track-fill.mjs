export const name="view_object_track-fill";
export const id="dl_b03cef5a030e4da3128a";
export const url=new URL("../icons/view_object_track-fill.svg?v=bc2c81b3f09dd6ab5c302e1f0d8604f1a5099b7fe1663a5f66cf3413217872b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
