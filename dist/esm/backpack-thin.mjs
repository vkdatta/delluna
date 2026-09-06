export const name="backpack-thin";
export const id="dl_5dfb3f934d7d4433abab";
export const url=new URL("../icons/backpack-thin.svg?v=7e53aef612c9453ffd1515c25a8d8dd3af4ce1ef7bfdf5848d3d55402825d7e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
