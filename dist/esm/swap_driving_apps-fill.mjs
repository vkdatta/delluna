export const name="swap_driving_apps-fill";
export const id="dl_f6227396bd7a24757286";
export const url=new URL("../icons/swap_driving_apps-fill.svg?v=fa7be01496874d131d36239572abf8b1dec2b6db97373ba1ec9f544060e7142d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
