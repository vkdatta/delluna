export const name="gpp_maybe-fill";
export const id="dl_9b9b2688a86abaf88a4f";
export const url=new URL("../icons/gpp_maybe-fill.svg?v=b0f0b95fddf8f571b1e66fa30e2501f0d5767b696472841ec38df5916c414a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
