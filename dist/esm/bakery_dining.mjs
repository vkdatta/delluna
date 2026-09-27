export const name="bakery_dining";
export const id="dl_221e3509b715db777da3";
export const url=new URL("../icons/bakery_dining.svg?v=9b57b234790fe3f2e7ab307a6a824a841504ff4d6b3555995b922b10bd125672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
