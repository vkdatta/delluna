export const name="lucid_2-git-compare";
export const id="dl_fae74b6548a747248ef8";
export const url=new URL("../icons/lucid_2-git-compare.svg?v=56118d665a625662c6ef0d90c4bd5ff063d1a091ecd85be5e40e20173b957aee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
