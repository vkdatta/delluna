export const name="add_call";
export const id="dl_7b1115458e5e78a77165";
export const url=new URL("../icons/add_call.svg?v=a790baa2d2aedad9a5c8f18b9022c70077bf096a61cd24949e0143af93f04f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
