export const name="fertile-fill";
export const id="dl_78daa0155f6cff0ee12e";
export const url=new URL("../icons/fertile-fill.svg?v=af1badb67cfabdc22690122fe21eb0bcb0c1b80bf790bc9f0e6975b346a9a029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
