export const name="atom-duotone";
export const id="dl_995ca1ac1bf3447c8fae";
export const url=new URL("../icons/atom-duotone.svg?v=4909d859bce8f634b5b8aa66a86027806a8d97b01a12caeaabaed48e5b051b3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
