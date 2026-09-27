export const name="lucid_1-blender";
export const id="dl_9cd825c52e9a4633bff3";
export const url=new URL("../icons/lucid_1-blender.svg?v=41ae34749f2b4a4590544bb1805ec23ada844e4fd6b83319613d35a831fefad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
