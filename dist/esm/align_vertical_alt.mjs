export const name="align_vertical_alt";
export const id="dl_df305b2c40e2ad065439";
export const url=new URL("../icons/align_vertical_alt.svg?v=467419a3a3f2f6950f3cf0d25d2ca38971dec8b9fb6b2c82a4d9a036de5e9484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
