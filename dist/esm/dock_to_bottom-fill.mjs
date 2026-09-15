export const name="dock_to_bottom-fill";
export const id="dl_76eee0d0cf7b46e99887";
export const url=new URL("../icons/D/dock_to_bottom-fill.svg?v=6cf26813c36ff2b84a0317b57370b670471a0424aa8c782dd3b85d636e436bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
