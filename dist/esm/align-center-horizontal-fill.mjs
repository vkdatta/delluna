export const name="align-center-horizontal-fill";
export const id="dl_b43320f4da8142ca9493";
export const url=new URL("../icons/align-center-horizontal-fill.svg?v=2332c2aa9c97929c534a4527621f22e663e5b2135a115b3d4025d0eb5754650d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
