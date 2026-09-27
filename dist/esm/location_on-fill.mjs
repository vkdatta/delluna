export const name="location_on-fill";
export const id="dl_2883f6c07af5e6736935";
export const url=new URL("../icons/location_on-fill.svg?v=cbc02c3140329b03a4414f5d14c36e761922cab38c1a11e7da43facfe6badbe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
