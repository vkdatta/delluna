export const name="person-simple-circle-fill";
export const id="dl_aa161c14ca2248589866";
export const url=new URL("../icons/person-simple-circle-fill.svg?v=828ca085cf848e4863cbdf8405cb88e1b5bac2889b8131a2e8e7160209c0be8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
