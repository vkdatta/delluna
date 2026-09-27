export const name="tab_new_right";
export const id="dl_70cbaec7ce51d0308d2d";
export const url=new URL("../icons/tab_new_right.svg?v=99be722615394a49c49e50290d844643d62ec13ea1e0787ef8bc90b8614ad92c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
