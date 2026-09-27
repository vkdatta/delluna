export const name="mobile_tap-fill";
export const id="dl_b5ef4a8378ff6a92d818";
export const url=new URL("../icons/mobile_tap-fill.svg?v=41b7f8c6264fb71b001a9236e82b13e8c3aeda8ef6c8aa3d2f4a8b8a3009cb39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
