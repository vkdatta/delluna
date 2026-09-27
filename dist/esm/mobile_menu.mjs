export const name="mobile_menu";
export const id="dl_8d44a25906e12db6ce7b";
export const url=new URL("../icons/mobile_menu.svg?v=25932e43882bf23e52fef57309020253cd761c2bbee774117b85f190f94dc3d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
