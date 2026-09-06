export const name="minus-square-light";
export const id="dl_4f18ee5f6feb4f1c8647";
export const url=new URL("../icons/minus-square-light.svg?v=14ea0bc777802c4a38961ca7cf3bc648cf52786070354936077e48458f053835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
