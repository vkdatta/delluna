export const name="lucid_1-bone";
export const id="dl_0424b5e9416640ba9645";
export const url=new URL("../icons/lucid_1-bone.svg?v=6b12c51a6bafc74229dc03be15605cf1e0265acce9616608b580fcc4deccf664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
