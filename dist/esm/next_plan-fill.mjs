export const name="next_plan-fill";
export const id="dl_edf446a35c04be1e6503";
export const url=new URL("../icons/next_plan-fill.svg?v=2a048139a11295727e3064bbb6c93d17a83683a097c32fc1c8dadab48b85b550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
