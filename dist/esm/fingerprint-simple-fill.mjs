export const name="fingerprint-simple-fill";
export const id="dl_fbc26abe55824a05b1c9";
export const url=new URL("../icons/fingerprint-simple-fill.svg?v=c52541e653ec0924eafb5b2b28598a09b9e5ee81287342c18d9237367a46e515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
