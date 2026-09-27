export const name="arrow_downward_alt-fill";
export const id="dl_1330b0dc0a697fecd510";
export const url=new URL("../icons/arrow_downward_alt-fill.svg?v=046e5e76964b23ea389cacd2dbcfd7d297880a63b13bde7981508932460057dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
