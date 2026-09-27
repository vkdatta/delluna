export const name="number-circle-zero-light";
export const id="dl_b37fbac0b12749d8ad80";
export const url=new URL("../icons/number-circle-zero-light.svg?v=53f801d2bb57af91afc50f620bdee7513c1381022e41764cebe25fef4e35350f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
