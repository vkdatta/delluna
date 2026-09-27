export const name="mobile_arrow_down-fill";
export const id="dl_a996f47762453c7a6aba";
export const url=new URL("../icons/mobile_arrow_down-fill.svg?v=aff923ca739b935e4122750563a7a00ac03dfb91abe0cb441b13c9e6f8ce712d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
