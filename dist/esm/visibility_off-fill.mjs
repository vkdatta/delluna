export const name="visibility_off-fill";
export const id="dl_889ba8132c5bf4008fb4";
export const url=new URL("../icons/visibility_off-fill.svg?v=f58f241fdf1d085b051789fee1e0290d6bf66b6f9330e8f33f2dc3addcae2e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
