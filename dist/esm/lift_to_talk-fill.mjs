export const name="lift_to_talk-fill";
export const id="dl_5994cddbd5b52a6f8adf";
export const url=new URL("../icons/lift_to_talk-fill.svg?v=48640606ce6d358720a0d003e4dd329c1b3b0ec315e184ec299a5b3a5c103c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
