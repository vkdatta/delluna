export const name="fitness_tracker";
export const id="dl_33ff02544392e2a62b1d";
export const url=new URL("../icons/fitness_tracker.svg?v=5d2d2e9e1b19a6c9deb5fdb07a85a2fed926353b9afdc57539cd554f65ea52be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
