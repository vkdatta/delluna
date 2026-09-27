export const name="lucid_2-git-compare";
export const id="dl_fae74b6548a747248ef8";
export const url=new URL("../icons/lucid_2-git-compare.svg?v=6df6c2125daf62def3251fdede2d5f2f54c82af0df34bdc7c40e170270bc04bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
