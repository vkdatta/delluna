export const name="cell-signal-low";
export const id="dl_f4837b200e22487cbc7c";
export const url=new URL("../icons/cell-signal-low.svg?v=d1838ac8795ac4968f763fcb2c0aa49d39f296afb71ff0824888468cd93086e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
