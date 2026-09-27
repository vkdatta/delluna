export const name="gpp_maybe";
export const id="dl_f0d3faa011f099204d03";
export const url=new URL("../icons/gpp_maybe.svg?v=eef2004864b7a5afeee74d3717696f6e91cdf584f5e3c32d57aa95a6d5b8691b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
