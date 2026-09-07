export const name="barbell-fill";
export const id="dl_1055e1a261dc4756bbb2";
export const url=new URL("../icons/barbell-fill.svg?v=827d3d188557e37c9653e3ecd0da014eb676e3990519f11f1a8dc89f9d844cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
