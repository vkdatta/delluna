export const name="magnification_large";
export const id="dl_5dd5d1f59b4886fc8350";
export const url=new URL("../icons/magnification_large.svg?v=61a723b881b2812198ee85579f728885b4d11578f501849dfbbeb4fa15f24fe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
