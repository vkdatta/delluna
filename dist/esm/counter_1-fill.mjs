export const name="counter_1-fill";
export const id="dl_165ad72b02294bc98033";
export const url=new URL("../icons/counter_1-fill.svg?v=0e12f562d48e376640415ea084d1153a74773f14c23a719b8c1c57bde642f199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
