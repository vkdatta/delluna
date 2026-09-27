export const name="mobile_cast-fill";
export const id="dl_ebffe01d9860a3f1ddf6";
export const url=new URL("../icons/mobile_cast-fill.svg?v=8db5ccae6b0bdc2798b85229d34663be35163817cc1d4a549eab68a25b58eff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
