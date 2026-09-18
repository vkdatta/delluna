export const name="add_reaction";
export const id="dl_c1967cc14d504e8fa832";
export const url=new URL("../icons/add_reaction.svg?v=4257316e08d0e9ef23664f2dd7edecd2b2a82a8f3cbac19ff7f8fb5e9f40e9d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
