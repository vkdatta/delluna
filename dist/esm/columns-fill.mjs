export const name="columns-fill";
export const id="dl_32d8161945d54656bbfc";
export const url=new URL("../icons/columns-fill.svg?v=fadaffea17176424c741733406d89c58d84ea7166726dfa198a3285a3dcaf69e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
