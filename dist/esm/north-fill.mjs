export const name="north-fill";
export const id="dl_657e5a8f6e9ddfd4645d";
export const url=new URL("../icons/north-fill.svg?v=031ac710aaf198e41167470947ec0764eaad7b9acc1e8fae3ce16d713520c681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
