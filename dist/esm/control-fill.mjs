export const name="control-fill";
export const id="dl_e91bcbac9d0440d99ff9";
export const url=new URL("../icons/control-fill.svg?v=245bb9e472add32b0df3242dd16427fde7df05bf53d541faa6b2306fca80db93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
