export const name="volume-1";
export const id="dl_28cbdd01083a4ee8959f";
export const url=new URL("../icons/volume-1.svg?v=2a86abf5fc4eb5d33fec6478d32984bbeb0bccd777e970fd41c349a7a17ff982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
