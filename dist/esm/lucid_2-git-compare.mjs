export const name="lucid_2-git-compare";
export const id="dl_fae74b6548a747248ef8";
export const url=new URL("../icons/lucid_2-git-compare.svg?v=9f6cee74dece37834a98aafdfdcfaf0e0698a4bc3563f0dc0533f612f675bf14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
