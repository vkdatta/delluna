export const name="vector-three";
export const id="dl_57dd88b4b081fac042dc";
export const url=new URL("../icons/vector-three.svg?v=aad0a01eb8e3439d79f0bb9ab94f15f7175456a735615f9b3d60d0d1d7277b23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
