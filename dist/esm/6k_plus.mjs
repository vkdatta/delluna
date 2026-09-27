export const name="6k_plus";
export const id="dl_ba5457a3ceb94423e092";
export const url=new URL("../icons/6k_plus.svg?v=31779eb17a1321342d1c9ea4579a27a39d21fd5c5ff40e85a1a1bc8e476c732c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
