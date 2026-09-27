export const name="arrow-fat-line-left-bold";
export const id="dl_46247ad4da5545c6b97b";
export const url=new URL("../icons/arrow-fat-line-left-bold.svg?v=2a36902e5ef60feab5b00e56edd9a9abd2ba1d5369d1685bcd20f161e17ea76f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
