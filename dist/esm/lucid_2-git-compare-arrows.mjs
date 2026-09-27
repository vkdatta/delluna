export const name="lucid_2-git-compare-arrows";
export const id="dl_3ce9c436200349f3a8f7";
export const url=new URL("../icons/lucid_2-git-compare-arrows.svg?v=e5fb415cb1efd828d793ea893dbcf6e12380cff2f1bd4757465495f9afb3fea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
