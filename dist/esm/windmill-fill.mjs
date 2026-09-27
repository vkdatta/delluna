export const name="windmill-fill";
export const id="dl_55062645e255ad10c03e";
export const url=new URL("../icons/windmill-fill.svg?v=2e7cdfa63806281a1b7cf737f32719d1a344d493be2114d162e17274e87ad980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
