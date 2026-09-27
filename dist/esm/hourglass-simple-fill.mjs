export const name="hourglass-simple-fill";
export const id="dl_a13a911f97dc47aba9f0";
export const url=new URL("../icons/hourglass-simple-fill.svg?v=cb8ef073d46e58aebbcbf8fae468b2fb34249455cba197c44c8627ef3b378700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
