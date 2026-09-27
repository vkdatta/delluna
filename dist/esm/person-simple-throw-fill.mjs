export const name="person-simple-throw-fill";
export const id="dl_c1f66a0d158f46808336";
export const url=new URL("../icons/person-simple-throw-fill.svg?v=6f4a142609ac6d8dc89ed12ba00dd63f6261960277428c404b10971a36ed6089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
