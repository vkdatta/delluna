export const name="bell-fill";
export const id="dl_1134ccaca2704c51ba27";
export const url=new URL("../icons/bell-fill.svg?v=9318574c35976b3e67e2ea410d5a610899af4e643b15bc7a70b2e397fda36004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
