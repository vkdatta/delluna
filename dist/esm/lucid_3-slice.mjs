export const name="lucid_3-slice";
export const id="dl_709b9b0f33c740089ef8";
export const url=new URL("../icons/lucid_3-slice.svg?v=286be35cb5c0327f2c6a7c43ba755d0532b32a05ab61ba1180fae10003681b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
