export const name="arrow-bend-down-left-fill";
export const id="dl_df247eb3d82145fb9506";
export const url=new URL("../icons/arrow-bend-down-left-fill.svg?v=e7e4e20a3a0e67ec5645674a3c7c6c9d03aa085dbd32e60f3c1d2c18ea2a7eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
