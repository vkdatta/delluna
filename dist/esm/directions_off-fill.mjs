export const name="directions_off-fill";
export const id="dl_bdaf29091e42ff6d82b9";
export const url=new URL("../icons/directions_off-fill.svg?v=c19370f3dbb5391c07afcb9c757f1ff505e4774e3ab35da77f89902a84ea8290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
