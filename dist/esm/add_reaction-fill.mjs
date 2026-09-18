export const name="add_reaction-fill";
export const id="dl_0bab9bf7a4d74f44b0d4";
export const url=new URL("../icons/add_reaction-fill.svg?v=95e12838a13d8030bb7d07c633db45f3b59ab765dedbfd64c5271c2e61e70a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
