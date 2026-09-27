export const name="x-logo-thin";
export const id="dl_ee9ae94cee2a37b59ec4";
export const url=new URL("../icons/x-logo-thin.svg?v=70ca9473964b9fe26cd110a3072a9c05ac27e4e581083dc25887cc7350214b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
