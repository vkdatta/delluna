export const name="bug-droid-fill";
export const id="dl_709ffbb9c047418f9e50";
export const url=new URL("../icons/bug-droid-fill.svg?v=610008e3c65275ceb8f3e8c16266731586e69d6f64f39e63a7c34cc9aa9b7279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
