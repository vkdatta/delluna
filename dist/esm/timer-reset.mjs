export const name="timer-reset";
export const id="dl_8034a58b3095446dad68";
export const url=new URL("../icons/timer-reset.svg?v=ae00da5b93e815ed4572845396149e5d17da21e6942cc62195480d972c2b4f9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
