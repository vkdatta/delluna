export const name="featured_seasonal_and_gifts-fill";
export const id="dl_27b11b8dbe24ab911e2d";
export const url=new URL("../icons/featured_seasonal_and_gifts-fill.svg?v=2187bf58ecc83738dc7bb2064e9367eabb03d6d5d28f8d6f38658f0a3cf2bb60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
