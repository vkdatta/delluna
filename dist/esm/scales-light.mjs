export const name="scales-light";
export const id="dl_20eea36698edfd91727f";
export const url=new URL("../icons/scales-light.svg?v=6eb024d075c76d6b6224d0ecaaba714e56c800a7be69faac6c015a36e731fead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
