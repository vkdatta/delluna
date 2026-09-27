export const name="list-plus";
export const id="dl_310bf65fba224906b315";
export const url=new URL("../icons/list-plus.svg?v=0ab9c9c812e69db33c3da2f6e833212dd80fbdff00516bbc805825cfcf0d5a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
