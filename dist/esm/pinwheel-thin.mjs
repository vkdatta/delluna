export const name="pinwheel-thin";
export const id="dl_3c268ecc7c21403d9748";
export const url=new URL("../icons/pinwheel-thin.svg?v=3bec83a7ef0790b051395459de51018c3ea69baeb18195458bdaad8860d7f64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
