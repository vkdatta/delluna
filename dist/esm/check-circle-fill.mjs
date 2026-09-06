export const name="check-circle-fill";
export const id="dl_b769b75d23df44a292e7";
export const url=new URL("../icons/check-circle-fill.svg?v=6ba676543869fddabb7a4ba7026fc51e14351455f4c095ea389b89d0e1d79708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
