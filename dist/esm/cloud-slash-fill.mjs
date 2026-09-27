export const name="cloud-slash-fill";
export const id="dl_1f4856dba0104867802f";
export const url=new URL("../icons/cloud-slash-fill.svg?v=9532c342135e3fcfb60afc635628c40055694e8ddba99530b19cbe938b5962c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
