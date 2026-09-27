export const name="lucid_2-git-fork";
export const id="dl_ea81be62858348449361";
export const url=new URL("../icons/lucid_2-git-fork.svg?v=11301c67d4f72170a24ace16ceab49bd9fa33464b25b92e14848220b9548d312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
