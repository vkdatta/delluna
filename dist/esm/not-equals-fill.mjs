export const name="not-equals-fill";
export const id="dl_ecd2578f601c4e36b0c8";
export const url=new URL("../icons/not-equals-fill.svg?v=4b1f09458aaade7ff35303fe46ae5c04a3b2e32e84fe4f3a8864893a234aa01f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
