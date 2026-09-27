export const name="recenter-fill";
export const id="dl_059516aa44324ca94895";
export const url=new URL("../icons/recenter-fill.svg?v=de7dea27c630e6601602fdb25179231210d644d27a07b1e814ed08dd60cc3d9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
