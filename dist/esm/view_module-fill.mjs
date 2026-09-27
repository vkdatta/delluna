export const name="view_module-fill";
export const id="dl_e800dfa66b69b45ee223";
export const url=new URL("../icons/view_module-fill.svg?v=14c029011596232daf335f36a846f4e56d5be97f6a65ed0e5385568585b1b260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
