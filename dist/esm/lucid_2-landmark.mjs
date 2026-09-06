export const name="lucid_2-landmark";
export const id="dl_d37a4d135e8344e48724";
export const url=new URL("../icons/lucid_2-landmark.svg?v=dfdba9f936973949910ccdc0857a2c01a0e07d8f1117f9f1c90fe6a535db600b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
