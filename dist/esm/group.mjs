export const name="group";
export const id="dl_4b62ff3e3d10f6eb0e1b";
export const url=new URL("../icons/group.svg?v=926eef4fbf46e589d7d3341910e8abb2a527678d9aff9f7cf29b09ae589d7d36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
