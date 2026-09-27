export const name="caret-double-left-thin";
export const id="dl_c866cbc9166d4cfb9a19";
export const url=new URL("../icons/caret-double-left-thin.svg?v=29daa7aff3170a7a90090077d78d6824765d849aecc37c9f6f375a27f9b9ca5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
